import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Architectural3DModelProps {
  scrollProgress?: number;
}

export default function Architectural3DModel({ scrollProgress = 0 }: Architectural3DModelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

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

    // 1. Scene, Camera & Renderer
    const scene = new THREE.Scene();

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 520;

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    // Editorial camera angle: elevated eye-level looking through the layered arches
    camera.position.set(3.8, 2.4, 5.8);
    camera.lookAt(0, 0.15, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 2. Realistic Matte Coastal Architectural Materials
    // Matte terracotta plaster
    const matTerracotta = new THREE.MeshStandardMaterial({
      color: 0xA84432,
      roughness: 0.88,
      metalness: 0.02,
    });

    // Sun-faded lighter terracotta
    const matTerracottaLight = new THREE.MeshStandardMaterial({
      color: 0xB85D45,
      roughness: 0.85,
      metalness: 0.02,
    });

    // Sunlit beach sandstone
    const matSandstone = new THREE.MeshStandardMaterial({
      color: 0xE8D8C3,
      roughness: 0.92,
      metalness: 0.01,
    });

    // Warm cream limestone
    const matLimestone = new THREE.MeshStandardMaterial({
      color: 0xF4E9D8,
      roughness: 0.82,
      metalness: 0.02,
    });

    // Dark espresso accent stone
    const matEspresso = new THREE.MeshStandardMaterial({
      color: 0x30251F,
      roughness: 0.85,
      metalness: 0.04,
    });

    // 3. Architectural Structure: 3 Layered Terracotta Arches Pavilion
    const pavilionGroup = new THREE.Group();
    scene.add(pavilionGroup);

    // Foundation Plinth: Solid terraced stone foundation (anchored, not floating)
    const plinthLowerGeo = new THREE.BoxGeometry(4.2, 0.22, 3.4);
    const plinthLower = new THREE.Mesh(plinthLowerGeo, matSandstone);
    plinthLower.position.y = -1.1;
    plinthLower.receiveShadow = true;
    pavilionGroup.add(plinthLower);

    const plinthUpperGeo = new THREE.BoxGeometry(3.6, 0.18, 2.8);
    const plinthUpper = new THREE.Mesh(plinthUpperGeo, matLimestone);
    plinthUpper.position.y = -0.9;
    plinthUpper.receiveShadow = true;
    pavilionGroup.add(plinthUpper);

    // Helper to build a clean architectural archway
    function createArchway(width: number, height: number, depth: number, material: THREE.Material) {
      const archGroup = new THREE.Group();
      const colWidth = width * 0.16;
      const colHeight = height - width / 2;

      // Left Pillar
      const leftColGeo = new THREE.BoxGeometry(colWidth, colHeight, depth);
      const leftCol = new THREE.Mesh(leftColGeo, material);
      leftCol.position.set(-width / 2 + colWidth / 2, colHeight / 2, 0);
      leftCol.castShadow = true;
      leftCol.receiveShadow = true;
      archGroup.add(leftCol);

      // Right Pillar
      const rightCol = new THREE.Mesh(leftColGeo, material);
      rightCol.position.set(width / 2 - colWidth / 2, colHeight / 2, 0);
      rightCol.castShadow = true;
      rightCol.receiveShadow = true;
      archGroup.add(rightCol);

      // Semicircular Arch Top
      const archRadius = (width - colWidth) / 2;
      const archGeo = new THREE.TorusGeometry(archRadius, colWidth / 2, 24, 48, Math.PI);
      const archTop = new THREE.Mesh(archGeo, material);
      archTop.position.set(0, colHeight, 0);
      archTop.rotation.z = Math.PI;
      archTop.castShadow = true;
      archTop.receiveShadow = true;
      archGroup.add(archTop);

      return archGroup;
    }

    // Arch 1: Front Layer (Deep Terracotta, Grand Scale)
    const arch1 = createArchway(1.8, 2.2, 0.28, matTerracotta);
    arch1.position.set(0, -0.81, 0.85);
    pavilionGroup.add(arch1);

    // Arch 2: Middle Layer (Sun-faded Terracotta, Medium Scale)
    const arch2 = createArchway(1.5, 1.95, 0.24, matTerracottaLight);
    arch2.position.set(0, -0.81, 0.0);
    pavilionGroup.add(arch2);

    // Arch 3: Back Layer (Warm Limestone, Distant Framing)
    const arch3 = createArchway(1.25, 1.7, 0.2, matLimestone);
    arch3.position.set(0, -0.81, -0.75);
    pavilionGroup.add(arch3);

    // Subtle Architectural Column Portal at the side
    const accentColGeo = new THREE.CylinderGeometry(0.09, 0.09, 1.9, 32);
    const accentCol = new THREE.Mesh(accentColGeo, matEspresso);
    accentCol.position.set(1.4, 0.14, 0.4);
    accentCol.castShadow = true;
    pavilionGroup.add(accentCol);

    // Architectural Horizontal Beam Resting on Columns
    const beamGeo = new THREE.BoxGeometry(0.35, 0.14, 2.2);
    const beam = new THREE.Mesh(beamGeo, matLimestone);
    beam.position.set(1.4, 1.15, 0.4);
    beam.castShadow = true;
    pavilionGroup.add(beam);

    // 4. Natural Afternoon Sunlight Lighting (Professional Architectural Rig)
    // Primary Key Sun: High warm angled light
    const keySun = new THREE.DirectionalLight(0xFFF6E8, 2.4);
    keySun.position.set(6, 7.5, 4.5);
    keySun.castShadow = true;
    keySun.shadow.mapSize.width = 1024;
    keySun.shadow.mapSize.height = 1024;
    keySun.shadow.camera.near = 1;
    keySun.shadow.camera.far = 18;
    keySun.shadow.camera.left = -3;
    keySun.shadow.camera.right = 3;
    keySun.shadow.camera.top = 3;
    keySun.shadow.camera.bottom = -3;
    keySun.shadow.bias = -0.0008;
    scene.add(keySun);

    // Warm Sand Bounce Light (simulating ground reflection from Mediterranean sand)
    const sandBounce = new THREE.DirectionalLight(0xE5D9C8, 0.85);
    sandBounce.position.set(-4, -1, -3);
    scene.add(sandBounce);

    // Sky Ambient Light
    const ambientSky = new THREE.HemisphereLight(0xFBF7F0, 0xD9C2A3, 0.65);
    scene.add(ambientSky);

    // 5. Restrained Interactive Mouse Parallax (Gentle & Dignified)
    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Heavy damping for calm architectural solidity
      targetRotY += (mouseX * 0.28 - targetRotY) * 0.04;
      targetRotX += (mouseY * 0.16 - targetRotX) * 0.04;

      if (pavilionGroup) {
        // Base fixed orientation + gentle perspective look-around + scroll progression
        pavilionGroup.rotation.y = 0.22 + targetRotY + (scrollProgress * 0.4);
        pavilionGroup.rotation.x = 0.02 + targetRotX;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      plinthLowerGeo.dispose();
      plinthUpperGeo.dispose();
      accentColGeo.dispose();
      beamGeo.dispose();
      matTerracotta.dispose();
      matTerracottaLight.dispose();
      matSandstone.dispose();
      matLimestone.dispose();
      matEspresso.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [scrollProgress, reducedMotion]);

  if (reducedMotion) {
    return (
      <div className="threejs-canvas-wrapper" style={{ backgroundImage: 'url(/images/hero-arches.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="three-hint-badge">
          <span>● Architectural Pavilion — Coastal Terracotta</span>
        </div>
      </div>
    );
  }

  return (
    <div className="threejs-canvas-wrapper" ref={containerRef} aria-label="3D Architectural Terracotta Arches Pavilion">
      <div className="three-hint-badge">
        <span>● Architectural Pavilion — Three Coastal Terracotta Arches</span>
      </div>
    </div>
  );
}
