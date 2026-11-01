import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Hero3DVisualProps {
  className?: string;
}

export default function Hero3DVisual({ className = '' }: Hero3DVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  // Check reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || reducedMotion) return;

    // Test WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 2. Materials
    // Matte terracotta core
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xA84432, // Terracotta
      roughness: 0.35,
      metalness: 0.15,
      flatShading: true,
    });

    // Sunlit Sand outer cage wireframe
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xD9C2A3, // Sunlit sand
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });

    // Node spheres
    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: 0x30251F, // Espresso
      roughness: 0.2,
      metalness: 0.8,
    });

    const crimsonNodeMat = new THREE.MeshStandardMaterial({
      color: 0xC63D2F, // Crimson accent
      roughness: 0.3,
      metalness: 0.4,
    });

    // 3. Geometry & Mesh Construction
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Inner Faceted Core: Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const coreMesh = new THREE.Mesh(coreGeo, coreMaterial);
    rootGroup.add(coreMesh);

    // Outer Wireframe Lattice: Slightly larger Icosahedron
    const outerGeo = new THREE.IcosahedronGeometry(2.0, 1);
    const outerMesh = new THREE.Mesh(outerGeo, wireMaterial);
    rootGroup.add(outerMesh);

    // Connected Node Spheres at outer vertices
    const nodeGroup = new THREE.Group();
    rootGroup.add(nodeGroup);

    const nodeGeo = new THREE.SphereGeometry(0.075, 16, 16);
    const posAttribute = outerGeo.getAttribute('position');
    const vertexCount = posAttribute.count;

    for (let i = 0; i < vertexCount; i += 3) {
      const x = posAttribute.getX(i);
      const y = posAttribute.getY(i);
      const z = posAttribute.getZ(i);

      const isSpecial = i % 6 === 0;
      const node = new THREE.Mesh(nodeGeo, isSpecial ? crimsonNodeMat : nodeMaterial);
      node.position.set(x, y, z);
      nodeGroup.add(node);
    }

    // 4. Subtle Orbital Data Rings
    const ringGeo = new THREE.TorusGeometry(2.4, 0.015, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xE5D9C8,
      transparent: true,
      opacity: 0.45,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo, ringMat);
    ringMesh1.rotation.x = Math.PI / 3;
    rootGroup.add(ringMesh1);

    const ringMesh2 = new THREE.Mesh(ringGeo, ringMat);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.x = -Math.PI / 6;
    rootGroup.add(ringMesh2);

    // 5. Lighting
    const keyLight = new THREE.DirectionalLight(0xFFF7EC, 2.8);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xD9C2A3, 1.2);
    fillLight.position.set(-5, -3, 3);
    scene.add(fillLight);

    const backLight = new THREE.DirectionalLight(0xA84432, 1.6);
    backLight.position.set(0, -4, -5);
    scene.add(backLight);

    const ambientLight = new THREE.AmbientLight(0xFBF7F0, 0.8);
    scene.add(ambientLight);

    // 6. Interactive Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Responsive Resizing
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 7. Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX * 0.7 - targetX) * 0.05;
      targetY += (mouseY * 0.7 - targetY) * 0.05;

      // Base rotation + mouse tilt
      coreMesh.rotation.y = elapsedTime * 0.35 + targetX;
      coreMesh.rotation.x = elapsedTime * 0.2 + targetY;

      outerMesh.rotation.y = -elapsedTime * 0.2 + targetX * 0.6;
      outerMesh.rotation.x = -elapsedTime * 0.15 + targetY * 0.6;

      nodeGroup.rotation.y = -elapsedTime * 0.2 + targetX * 0.6;
      nodeGroup.rotation.x = -elapsedTime * 0.15 + targetY * 0.6;

      ringMesh1.rotation.z = elapsedTime * 0.15;
      ringMesh2.rotation.z = -elapsedTime * 0.12;

      // Gentle floating breathing bob
      rootGroup.position.y = Math.sin(elapsedTime * 1.4) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animId);

      coreGeo.dispose();
      outerGeo.dispose();
      nodeGeo.dispose();
      ringGeo.dispose();
      coreMaterial.dispose();
      wireMaterial.dispose();
      nodeMaterial.dispose();
      crimsonNodeMat.dispose();
      ringMat.dispose();

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion]);

  if (reducedMotion || !webglSupported) {
    return (
      <div className={`hero-3d-container fallback-visual ${className}`}>
        <div className="hero-fallback-lattice" aria-hidden="true">
          <div className="lattice-core" />
          <div className="lattice-ring ring-1" />
          <div className="lattice-ring ring-2" />
          <span className="lattice-node node-1" />
          <span className="lattice-node node-2" />
          <span className="lattice-node node-3" />
        </div>
        <div className="hero-3d-badge">
          <span className="status-dot-emerald" />
          <span>Neural Data Lattice · Architectural Core</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`hero-3d-container ${className}`} ref={containerRef} aria-label="Interactive 3D Neural Software Lattice">
      <div className="hero-3d-badge">
        <span className="status-dot-emerald" />
        <span>Neural Data Lattice · Interactive 3D</span>
      </div>
    </div>
  );
}

