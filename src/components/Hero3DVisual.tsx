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

    const width = container.clientWidth || 520;
    const height = container.clientHeight || 520;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 2. High-Tech Cybernetic Lighting
    const ambientLight = new THREE.AmbientLight(0x0a1020, 1.6);
    scene.add(ambientLight);

    // Key Light: Electric Cyan
    const cyanLight = new THREE.DirectionalLight(0x00f0ff, 3.2);
    cyanLight.position.set(4, 5, 5);
    scene.add(cyanLight);

    // Fill Light: Neon Violet
    const violetLight = new THREE.DirectionalLight(0x8b5cf6, 2.8);
    violetLight.position.set(-5, -4, 4);
    scene.add(violetLight);

    // Rim Light: Pure White/Silver for sharp silhouette
    const rimLight = new THREE.PointLight(0xffffff, 2.0, 20);
    rimLight.position.set(0, 5, -3);
    scene.add(rimLight);

    // 3. Cybernetic Neural Kernel Object Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // A. Inner Luminous Core (Energy Sphere)
    const coreGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // Core Point Light for dynamic glow
    const coreLight = new THREE.PointLight(0x00f0ff, 3.0, 6);
    rootGroup.add(coreLight);

    // B. Faceted Hyper-Icosahedron (Translucent Dark Obsidian with Emissive Edges)
    const facetedGeo = new THREE.IcosahedronGeometry(1.5, 1);
    const facetedMat = new THREE.MeshPhysicalMaterial({
      color: 0x0d1424,
      metalness: 0.85,
      roughness: 0.15,
      transmission: 0.65,
      thickness: 1.2,
      ior: 1.5,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.88,
    });
    const facetedMesh = new THREE.Mesh(facetedGeo, facetedMat);
    rootGroup.add(facetedMesh);

    // Wireframe Overlay on the faceted mesh
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(facetedGeo, wireMat);
    rootGroup.add(wireMesh);

    // C. Dual Gyroscopic Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(2.2, 0.025, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    rootGroup.add(ringMesh1);

    const ringGeo2 = new THREE.TorusGeometry(2.5, 0.02, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.x = -Math.PI / 6;
    rootGroup.add(ringMesh2);

    // Outer Thin Orbit Ring
    const ringGeo3 = new THREE.TorusGeometry(2.85, 0.012, 16, 120);
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.4,
    });
    const ringMesh3 = new THREE.Mesh(ringGeo3, ringMat3);
    ringMesh3.rotation.z = Math.PI / 5;
    rootGroup.add(ringMesh3);

    // D. Orbiting Satellite Nodes (14 Neural Data Nodes)
    const nodeCount = 14;
    const nodeGroup = new THREE.Group();
    rootGroup.add(nodeGroup);

    const nodeGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const nodeMatCyan = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 1.2,
      roughness: 0.1,
    });
    const nodeMatViolet = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x8b5cf6,
      emissiveIntensity: 1.2,
      roughness: 0.1,
    });

    interface NodeData {
      mesh: THREE.Mesh;
      radius: number;
      speed: number;
      phase: number;
      inclination: number;
    }

    const nodes: NodeData[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const isCyan = i % 2 === 0;
      const mesh = new THREE.Mesh(nodeGeo, isCyan ? nodeMatCyan : nodeMatViolet);
      nodeGroup.add(mesh);

      nodes.push({
        mesh,
        radius: 2.0 + Math.random() * 0.9,
        speed: (0.4 + Math.random() * 0.6) * (i % 2 === 0 ? 1 : -1),
        phase: (i / nodeCount) * Math.PI * 2,
        inclination: (Math.random() - 0.5) * Math.PI * 0.8,
      });
    }

    // E. Outer Bounding Dodecahedron Cage with Vertex Nodes
    const cageGeo = new THREE.DodecahedronGeometry(3.0, 0);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x1e293b,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    rootGroup.add(cageMesh);

    // 4. Mouse Tracking & Smooth Interactive Lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let isHovered = false;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 2;
      targetMouseY = y * 2;
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
      targetMouseX = 0;
      targetMouseY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 520;
      const newHeight = container.clientHeight || 520;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 5. Animation Loop
    const clock = new THREE.Clock();

    const renderLoop = () => {
      animationFrameId = requestAnimationFrame(renderLoop);

            const elapsed = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Dynamic tilt following cursor
      rootGroup.rotation.y = elapsed * 0.25 + mouseX * 0.75;
      rootGroup.rotation.x = mouseY * 0.65;

      // Dynamic hover speed boost
      const speedMultiplier = isHovered ? 1.6 : 1.0;

      // Inner Core Pulse
      const pulse = Math.sin(elapsed * 3) * 0.15 + 0.85;
      coreMesh.scale.set(pulse, pulse, pulse);
      coreLight.intensity = (Math.sin(elapsed * 4) * 0.5 + 2.5) * (isHovered ? 1.4 : 1.0);

      // Rotate faceted mesh opposite to wire
      facetedMesh.rotation.y = elapsed * 0.2 * speedMultiplier;
      facetedMesh.rotation.z = elapsed * 0.15 * speedMultiplier;

      wireMesh.rotation.y = elapsed * -0.15 * speedMultiplier;
      wireMesh.rotation.x = elapsed * 0.1 * speedMultiplier;

      // Rotate Orbital Rings at differential velocities
      ringMesh1.rotation.z = elapsed * 0.4 * speedMultiplier;
      ringMesh2.rotation.z = elapsed * -0.35 * speedMultiplier;
      ringMesh3.rotation.x = elapsed * 0.25 * speedMultiplier;

      // Outer Cage Slow Drift
      cageMesh.rotation.x = elapsed * 0.05;
      cageMesh.rotation.y = elapsed * 0.08;

      // Update Orbiting Satellite Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const angle = elapsed * n.speed * speedMultiplier + n.phase;
        const x = Math.cos(angle) * n.radius;
        const z = Math.sin(angle) * n.radius;
        const y = Math.sin(angle * 1.5 + n.phase) * (n.radius * 0.45);

        n.mesh.position.set(x, y, z);
      }

      // Subtle breathing float in Z space
      rootGroup.position.y = Math.sin(elapsed * 1.8) * 0.12;

      renderer.render(scene, camera);
    };

    renderLoop();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);

      coreGeo.dispose();
      coreMat.dispose();
      facetedGeo.dispose();
      facetedMat.dispose();
      wireMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      ringGeo3.dispose();
      ringMat3.dispose();
      nodeGeo.dispose();
      nodeMatCyan.dispose();
      nodeMatViolet.dispose();
      cageGeo.dispose();
      cageMat.dispose();

      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion]);

  if (reducedMotion || !webglSupported) {
    return (
      <div
        className={`hero-3d-fallback flex items-center justify-center ${className}`}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '420px',
          background: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.08) 0%, rgba(139, 92, 246, 0.04) 50%, transparent 70%)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'relative',
        }}
      >
        <div className="tech-fallback-ring">
          <div className="tech-fallback-pulse" />
          <span className="font-mono text-xs tracking-widest text-cyan-400">
            [ NEURAL KERNEL ACTIVE ]
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`hero-3d-canvas-container ${className}`}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '440px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab',
      }}
      aria-label="Interactive 3D Neural Kernel Visual"
    />
  );
}
