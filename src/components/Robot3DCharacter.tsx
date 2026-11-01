import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Robot3DCharacterProps {
  className?: string;
}

export default function Robot3DCharacter({ className = '' }: Robot3DCharacterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

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

    let width = container.clientWidth || 540;
    let height = container.clientHeight || 560;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 5.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 2. Realistic Studio Cyber Lighting
    const ambientLight = new THREE.AmbientLight(0x0a1224, 1.8);
    scene.add(ambientLight);

    // Key Light: Electric Cyan
    const keyLight = new THREE.DirectionalLight(0x00f0ff, 3.5);
    keyLight.position.set(4, 5, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Fill Light: Neon Violet
    const fillLight = new THREE.DirectionalLight(0x8b5cf6, 2.8);
    fillLight.position.set(-5, -2, 4);
    scene.add(fillLight);

    // Top Rim Light: Crisp White
    const rimLight = new THREE.DirectionalLight(0xffffff, 2.4);
    rimLight.position.set(0, 6, -4);
    scene.add(rimLight);

    // Subtle Underlight for dramatic jaw & collarbone definition
    const underLight = new THREE.PointLight(0x00f0ff, 1.5, 8);
    underLight.position.set(0, -2, 2);
    scene.add(underLight);

    // 3. Materials
    // Obsidian Titanium Armor Plates
    const titaniumArmorMat = new THREE.MeshPhysicalMaterial({
      color: 0x111726,
      metalness: 0.88,
      roughness: 0.22,
      clearcoat: 0.9,
      clearcoatRoughness: 0.15,
      reflectivity: 0.9,
    });

    // Dark Carbon Core Chassis
    const carbonChassisMat = new THREE.MeshStandardMaterial({
      color: 0x080c14,
      metalness: 0.92,
      roughness: 0.35,
    });

    // Brushed Metallic Joints & Pistons
    const chromePistonMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.95,
      roughness: 0.15,
    });

    // Visor Glass
    const visorGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x040810,
      metalness: 0.3,
      roughness: 0.05,
      transmission: 0.75,
      thickness: 0.6,
      ior: 1.55,
      transparent: true,
      opacity: 0.92,
      clearcoat: 1.0,
    });

    // Emissive Cyan Elements (Optics, Core, Accents)
    const cyanEmissiveMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 2.2,
      roughness: 0.1,
    });

    // Emissive Violet Elements
    const violetEmissiveMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x8b5cf6,
      emissiveIntensity: 2.0,
      roughness: 0.1,
    });

    // Wireframe Overlay
    const wireAccentMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });

    // 4. Robot Assembly Hierarchical Groups
    const robotRoot = new THREE.Group();
    scene.add(robotRoot);
    robotRoot.position.set(0, -0.6, 0);

    // --- A. TORSO & CHEST CHASSIS ---
    const torsoGroup = new THREE.Group();
    robotRoot.add(torsoGroup);

    // Central Torso Block
    const chestCoreGeo = new THREE.BoxGeometry(1.4, 1.2, 0.9);
    const chestCoreMesh = new THREE.Mesh(chestCoreGeo, carbonChassisMat);
    chestCoreMesh.position.set(0, 0.5, 0);
    torsoGroup.add(chestCoreMesh);

    // Angled Left Pectoral Armor
    const pecGeo = new THREE.CylinderGeometry(0.65, 0.75, 0.4, 6);
    const pecLeft = new THREE.Mesh(pecGeo, titaniumArmorMat);
    pecLeft.rotation.z = Math.PI / 12;
    pecLeft.rotation.x = Math.PI / 8;
    pecLeft.position.set(-0.45, 0.75, 0.4);
    torsoGroup.add(pecLeft);

    // Angled Right Pectoral Armor
    const pecRight = new THREE.Mesh(pecGeo, titaniumArmorMat);
    pecRight.rotation.z = -Math.PI / 12;
    pecRight.rotation.x = Math.PI / 8;
    pecRight.position.set(0.45, 0.75, 0.4);
    torsoGroup.add(pecRight);

    // Central Arc Reactor / AI Neural Core Chamber
    const reactorRingGeo = new THREE.TorusGeometry(0.24, 0.04, 16, 32);
    const reactorRing = new THREE.Mesh(reactorRingGeo, chromePistonMat);
    reactorRing.position.set(0, 0.65, 0.48);
    torsoGroup.add(reactorRing);

    const reactorCoreGeo = new THREE.SphereGeometry(0.14, 24, 24);
    const reactorCore = new THREE.Mesh(reactorCoreGeo, cyanEmissiveMat);
    reactorCore.position.set(0, 0.65, 0.48);
    torsoGroup.add(reactorCore);

    const reactorLight = new THREE.PointLight(0x00f0ff, 2.5, 4);
    reactorLight.position.set(0, 0.65, 0.65);
    torsoGroup.add(reactorLight);

    // Abdominal Hydraulic Spine Section
    for (let i = 0; i < 3; i++) {
      const vertGeo = new THREE.CylinderGeometry(0.38 - i * 0.04, 0.42 - i * 0.04, 0.15, 8);
      const vert = new THREE.Mesh(vertGeo, titaniumArmorMat);
      vert.position.set(0, 0.15 - i * 0.22, 0.1);
      torsoGroup.add(vert);

      // Hydraulic Side Pistons
      const pistonGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.22, 12);
      const pLeft = new THREE.Mesh(pistonGeo, chromePistonMat);
      pLeft.position.set(-0.35, 0.15 - i * 0.22, 0.18);
      torsoGroup.add(pLeft);

      const pRight = new THREE.Mesh(pistonGeo, chromePistonMat);
      pRight.position.set(0.35, 0.15 - i * 0.22, 0.18);
      torsoGroup.add(pRight);
    }

    // Collarbones & Shoulder Mounts
    const collarGeo = new THREE.BoxGeometry(1.8, 0.12, 0.4);
    const collar = new THREE.Mesh(collarGeo, titaniumArmorMat);
    collar.position.set(0, 1.15, 0.2);
    torsoGroup.add(collar);

    // --- B. SHOULDERS & ARMS ---
    const shoulderGroup = new THREE.Group();
    torsoGroup.add(shoulderGroup);

    // Left Shoulder Pauldron
    const pauldronGeo = new THREE.SphereGeometry(0.48, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.6);
    const pauldronLeft = new THREE.Mesh(pauldronGeo, titaniumArmorMat);
    pauldronLeft.position.set(-1.15, 1.05, 0.1);
    pauldronLeft.rotation.z = Math.PI / 4;
    shoulderGroup.add(pauldronLeft);

    const pauldronLeftWire = new THREE.Mesh(pauldronGeo, wireAccentMat);
    pauldronLeftWire.position.set(-1.15, 1.05, 0.1);
    pauldronLeftWire.rotation.z = Math.PI / 4;
    shoulderGroup.add(pauldronLeftWire);

    // Right Shoulder Pauldron
    const pauldronRight = new THREE.Mesh(pauldronGeo, titaniumArmorMat);
    pauldronRight.position.set(1.15, 1.05, 0.1);
    pauldronRight.rotation.z = -Math.PI / 4;
    shoulderGroup.add(pauldronRight);

    const pauldronRightWire = new THREE.Mesh(pauldronGeo, wireAccentMat);
    pauldronRightWire.position.set(1.15, 1.05, 0.1);
    pauldronRightWire.rotation.z = -Math.PI / 4;
    shoulderGroup.add(pauldronRightWire);

    // Upper Arm Stems
    const armGeo = new THREE.CylinderGeometry(0.18, 0.15, 0.8, 12);
    const armLeft = new THREE.Mesh(armGeo, carbonChassisMat);
    armLeft.position.set(-1.15, 0.5, 0.05);
    armLeft.rotation.z = -Math.PI / 16;
    shoulderGroup.add(armLeft);

    const armRight = new THREE.Mesh(armGeo, carbonChassisMat);
    armRight.position.set(1.15, 0.5, 0.05);
    armRight.rotation.z = Math.PI / 16;
    shoulderGroup.add(armRight);

    // Shoulder Conduit Glow Strips
    const conduitGeo = new THREE.TorusGeometry(0.18, 0.02, 8, 24);
    const conduitLeft = new THREE.Mesh(conduitGeo, cyanEmissiveMat);
    conduitLeft.position.set(-1.15, 0.75, 0.05);
    conduitLeft.rotation.x = Math.PI / 2;
    shoulderGroup.add(conduitLeft);

    const conduitRight = new THREE.Mesh(conduitGeo, violetEmissiveMat);
    conduitRight.position.set(1.15, 0.75, 0.05);
    conduitRight.rotation.x = Math.PI / 2;
    shoulderGroup.add(conduitRight);

    // --- C. NECK ASSEMBLY ---
    const neckGroup = new THREE.Group();
    neckGroup.position.set(0, 1.25, 0.1);
    torsoGroup.add(neckGroup);

    const neckBase = new THREE.CylinderGeometry(0.24, 0.28, 0.35, 16);
    const neckBaseMesh = new THREE.Mesh(neckBase, carbonChassisMat);
    neckGroup.add(neckBaseMesh);

    // Cervical Pistons
    const neckPistonGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.35, 8);
    const np1 = new THREE.Mesh(neckPistonGeo, chromePistonMat);
    np1.position.set(-0.16, 0, 0.1);
    neckGroup.add(np1);

    const np2 = new THREE.Mesh(neckPistonGeo, chromePistonMat);
    np2.position.set(0.16, 0, 0.1);
    neckGroup.add(np2);

    // --- D. HEAD & HELMET (INDIVIDUALLY ROTATABLE FOR CURSOR TRACKING!) ---
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.35, 0);
    neckGroup.add(headGroup);

    // Cranium / Helmet Base (Faceted Cyber Helmet)
    const craniumGeo = new THREE.BoxGeometry(0.95, 1.0, 1.05);
    const craniumMesh = new THREE.Mesh(craniumGeo, titaniumArmorMat);
    craniumMesh.position.set(0, 0.15, -0.05);
    headGroup.add(craniumMesh);

    // Angular Top Crown Fin
    const crownGeo = new THREE.ConeGeometry(0.18, 0.8, 4);
    const crown = new THREE.Mesh(crownGeo, titaniumArmorMat);
    crown.rotation.x = -Math.PI / 2.5;
    crown.position.set(0, 0.72, -0.2);
    headGroup.add(crown);

    // Aerodynamic Rear Head Casing
    const rearHeadGeo = new THREE.BoxGeometry(0.75, 0.65, 0.6);
    const rearHead = new THREE.Mesh(rearHeadGeo, carbonChassisMat);
    rearHead.position.set(0, 0.2, -0.6);
    headGroup.add(rearHead);

    // Curved Cyber Visor (Eye Plate)
    const visorGeo = new THREE.CylinderGeometry(0.52, 0.52, 0.42, 24, 1, false, Math.PI * 0.1, Math.PI * 0.8);
    const visorMesh = new THREE.Mesh(visorGeo, visorGlassMat);
    visorMesh.position.set(0, 0.18, 0.18);
    visorMesh.rotation.y = -Math.PI / 2;
    headGroup.add(visorMesh);

    // Dual Optic Sensors (Glowing Cyber Eyes behind Visor)
    const eyeGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const eyeLeft = new THREE.Mesh(eyeGeo, cyanEmissiveMat);
    eyeLeft.position.set(-0.22, 0.2, 0.44);
    headGroup.add(eyeLeft);

    const eyeRight = new THREE.Mesh(eyeGeo, cyanEmissiveMat);
    eyeRight.position.set(0.22, 0.2, 0.44);
    headGroup.add(eyeRight);

    // Optic Sensor Light
    const opticLight = new THREE.PointLight(0x00f0ff, 2.2, 3);
    opticLight.position.set(0, 0.2, 0.65);
    headGroup.add(opticLight);

    // Side Ear Communication Pods
    const earGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.18, 16);
    const earLeft = new THREE.Mesh(earGeo, chromePistonMat);
    earLeft.position.set(-0.56, 0.15, -0.05);
    earLeft.rotation.z = Math.PI / 2;
    headGroup.add(earLeft);

    const earRingLeft = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.02, 8, 20), cyanEmissiveMat);
    earRingLeft.position.set(-0.66, 0.15, -0.05);
    earRingLeft.rotation.y = Math.PI / 2;
    headGroup.add(earRingLeft);

    const earRight = new THREE.Mesh(earGeo, chromePistonMat);
    earRight.position.set(0.56, 0.15, -0.05);
    earRight.rotation.z = Math.PI / 2;
    headGroup.add(earRight);

    const earRingRight = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.02, 8, 20), violetEmissiveMat);
    earRingRight.position.set(0.66, 0.15, -0.05);
    earRingRight.rotation.y = Math.PI / 2;
    headGroup.add(earRingRight);

    // Tapered Jaw / Chin Armor
    const chinGeo = new THREE.BoxGeometry(0.48, 0.35, 0.45);
    const chin = new THREE.Mesh(chinGeo, titaniumArmorMat);
    chin.position.set(0, -0.3, 0.32);
    chin.rotation.x = Math.PI / 10;
    headGroup.add(chin);

    // Mouth Vent Grill Lines
    for (let i = 0; i < 3; i++) {
      const ventGeo = new THREE.BoxGeometry(0.25 - i * 0.04, 0.025, 0.02);
      const vent = new THREE.Mesh(ventGeo, cyanEmissiveMat);
      vent.position.set(0, -0.22 - i * 0.05, 0.53);
      headGroup.add(vent);
    }

    // 5. Interactive Mouse Tracking State
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

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 540;
      height = container.clientHeight || 560;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // 6. Animation Loop: Natural Gaze Tracking & Breathing
    const clock = new THREE.Clock();

    const renderLoop = () => {
      animationFrameId = requestAnimationFrame(renderLoop);

      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      // Realistic Gaze & Head Tracking (Clamped)
      headGroup.rotation.y = mouseX * 0.55; // Yaw towards cursor
      headGroup.rotation.x = -mouseY * 0.35 + Math.sin(elapsed * 1.8) * 0.02; // Pitch towards cursor + subtle breathing nod
      headGroup.rotation.z = mouseX * 0.08; // Subtle curious head tilt

      // Torso subtly follows head
      torsoGroup.rotation.y = mouseX * 0.18;
      torsoGroup.rotation.x = -mouseY * 0.12;

      // Idle Breathing Hover
      robotRoot.position.y = -0.6 + Math.sin(elapsed * 1.6) * 0.06;

      // Arc Reactor Energy Pulse
      const corePulse = Math.sin(elapsed * 3.5) * 0.15 + 1.0;
      reactorCore.scale.set(corePulse, corePulse, corePulse);
      reactorLight.intensity = (Math.sin(elapsed * 4) * 0.6 + 2.4) * (isHovered ? 1.4 : 1.0);

      // Optic Sensor Glow Breathing
      opticLight.intensity = (Math.sin(elapsed * 3) * 0.4 + 2.0) * (isHovered ? 1.3 : 1.0);

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

      // Dispose geometries & materials
      chestCoreGeo.dispose();
      pecGeo.dispose();
      reactorRingGeo.dispose();
      reactorCoreGeo.dispose();
      collarGeo.dispose();
      pauldronGeo.dispose();
      armGeo.dispose();
      conduitGeo.dispose();
      neckBase.dispose();
      neckPistonGeo.dispose();
      craniumGeo.dispose();
      crownGeo.dispose();
      rearHeadGeo.dispose();
      visorGeo.dispose();
      eyeGeo.dispose();
      earGeo.dispose();
      chinGeo.dispose();

      titaniumArmorMat.dispose();
      carbonChassisMat.dispose();
      chromePistonMat.dispose();
      visorGlassMat.dispose();
      cyanEmissiveMat.dispose();
      violetEmissiveMat.dispose();
      wireAccentMat.dispose();

      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion]);

  if (reducedMotion || !webglSupported) {
    return (
      <div
        className={`robot-3d-fallback flex flex-col items-center justify-center p-8 rounded-3xl ${className}`}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '480px',
          background: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.12) 0%, rgba(139, 92, 246, 0.05) 50%, #07080b 80%)',
          border: '1px solid rgba(0, 240, 255, 0.25)',
        }}
      >
        <div className="w-40 h-40 rounded-full border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_35px_rgba(0,240,255,0.4)] mb-4">
          <div className="w-24 h-24 rounded-full bg-cyan-400/20 border border-cyan-300 flex items-center justify-center">
            <span className="font-mono text-cyan-300 font-bold text-xs uppercase tracking-widest">
              AI ROBOT
            </span>
          </div>
        </div>
        <p className="font-mono text-xs text-slate-400 uppercase tracking-widest text-center">
          [ 3D NEURAL ROBOT // ACTIVE AGENT ]
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`robot-3d-canvas-container relative w-full h-full min-h-[480px] lg:min-h-[560px] flex items-center justify-center cursor-crosshair ${className}`}
      aria-label="Interactive 3D AI Robot Character"
    />
  );
}

