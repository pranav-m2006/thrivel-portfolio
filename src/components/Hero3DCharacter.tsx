import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import ArchFrame from './ArchFrame';

interface Hero3DCharacterProps {
  fallbackImage?: string;
  enableScrollParallax?: boolean;
}

export default function Hero3DCharacter({
  fallbackImage = '/images/pranav.jpg',
  enableScrollParallax = true,
}: Hero3DCharacterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [viewMode, setViewMode] = useState<'3d' | 'photo'>('3d');
  const [webglSupported, setWebglSupported] = useState(true);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Three.js Interactive 3D Developer Character Scene
  useEffect(() => {
    if (viewMode !== '3d' || reducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    // Verify WebGL availability
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

    let isDisposed = false;
    let animationFrameId: number;

    // Dimensions
    const width = container.clientWidth || 440;
    const height = container.clientHeight || 480;

    // 1. Scene, Camera & Transparent Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 50);
    camera.position.set(2.6, 2.0, 4.2);
    camera.lookAt(0, 0.35, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // Transparent background seamlessly blending into #FBF7F0 ivory
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 2. Lighting System (Harmonized with Warm Editorial Palette)
    // Warm key light
    const keyLight = new THREE.DirectionalLight(0xFFF6ED, 1.5);
    keyLight.position.set(3, 5, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    // Soft cool-tinted fill light from opposite angle
    const fillLight = new THREE.DirectionalLight(0xE5EEF8, 0.7);
    fillLight.position.set(-3, 3, 2);
    scene.add(fillLight);

    // Terracotta warm rim light from back-right
    const rimLight = new THREE.DirectionalLight(0xC63D2F, 1.0);
    rimLight.position.set(2, 2, -3);
    scene.add(rimLight);

    // Soft ambient hemisphere
    const hemiLight = new THREE.HemisphereLight(0xFBF7F0, 0xEAD8C3, 0.6);
    scene.add(hemiLight);

    // Laptop screen emissive blue-cyan point light
    const laptopGlowLight = new THREE.PointLight(0x70C5E8, 1.6, 2.4);
    laptopGlowLight.position.set(0, 0.85, 0.45);
    scene.add(laptopGlowLight);

    // 3. Materials Palette (Curated to match portfolio tones)
    const matSkin = new THREE.MeshStandardMaterial({
      color: 0xC88E6D, // Warm natural Indian skin tone matching Pranav's photograph
      roughness: 0.65,
      metalness: 0.05,
    });

    const matHair = new THREE.MeshStandardMaterial({
      color: 0x161210, // Dark styled hair
      roughness: 0.85,
      metalness: 0.05,
    });

    const matSweater = new THREE.MeshStandardMaterial({
      color: 0x1E1A18, // Deep obsidian developer hoodie
      roughness: 0.82,
      metalness: 0.02,
    });

    const matTerracottaAccent = new THREE.MeshStandardMaterial({
      color: 0xC63D2F, // Signature Terracotta red trim
      roughness: 0.75,
      metalness: 0.08,
    });

    const matDesk = new THREE.MeshStandardMaterial({
      color: 0xE8DDD0, // Warm coastal sandstone desk
      roughness: 0.88,
      metalness: 0.02,
    });

    const matDeskWoodTrim = new THREE.MeshStandardMaterial({
      color: 0xBA987A, // Warm oak desk edge
      roughness: 0.75,
      metalness: 0.04,
    });

    const matLaptopBody = new THREE.MeshStandardMaterial({
      color: 0x383430, // Space gray aluminum laptop
      roughness: 0.35,
      metalness: 0.75,
    });

    // Create an animated procedural Code Screen canvas texture
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 320;
    const screenCtx = screenCanvas.getContext('2d');
    const screenTexture = new THREE.CanvasTexture(screenCanvas);

    const drawCodeLines = (timeOffset: number) => {
      if (!screenCtx) return;
      screenCtx.fillStyle = '#0F141C'; // IDE dark background
      screenCtx.fillRect(0, 0, 512, 320);

      // Window top bar
      screenCtx.fillStyle = '#1A222D';
      screenCtx.fillRect(0, 0, 512, 30);
      screenCtx.fillStyle = '#FF5F56';
      screenCtx.beginPath();
      screenCtx.arc(18, 15, 5, 0, Math.PI * 2);
      screenCtx.fill();
      screenCtx.fillStyle = '#FFBD2E';
      screenCtx.beginPath();
      screenCtx.arc(34, 15, 5, 0, Math.PI * 2);
      screenCtx.fill();
      screenCtx.fillStyle = '#27C93F';
      screenCtx.beginPath();
      screenCtx.arc(50, 15, 5, 0, Math.PI * 2);
      screenCtx.fill();

      // Syntax-highlighted code lines
      const colors = ['#C63D2F', '#569CD6', '#4EC9B0', '#DCDCAA', '#9CDCFE', '#CE9178'];
      const linesCount = 14;
      for (let i = 0; i < linesCount; i++) {
        const y = 50 + i * 18;
        const indent = (i % 4) * 24 + 20;
        const width = 80 + ((i * 37 + Math.floor(timeOffset * 4)) % 220);
        screenCtx.fillStyle = colors[i % colors.length];
        screenCtx.fillRect(indent, y, width, 8);
      }
      screenTexture.needsUpdate = true;
    };
    drawCodeLines(0);

    const matScreen = new THREE.MeshBasicMaterial({
      map: screenTexture,
    });

    // Master Character & Studio Group
    const characterStudioGroup = new THREE.Group();
    scene.add(characterStudioGroup);

    // 4. Check for custom GLB model in /models/character.glb
    const proceduralGroup = new THREE.Group();
    characterStudioGroup.add(proceduralGroup);

    const loader = new GLTFLoader();
    loader.load(
      '/models/character.glb',
      (gltf) => {
        if (isDisposed) return;
        proceduralGroup.visible = false;
        const customModel = gltf.scene;
        customModel.scale.set(1.2, 1.2, 1.2);
        customModel.position.set(0, -0.6, 0);
        customModel.traverse((node) => {
          if ((node as THREE.Mesh).isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });
        characterStudioGroup.add(customModel);
      },
      undefined,
      () => {
        // No custom GLB found — seamlessly proceed with bespoke 3D developer character
      }
    );

    // =========================================================================
    // 5. Procedural 3D Software Engineer Character & Ergonomic Workstation
    // =========================================================================

    // Floor Soft Plinth / Contact Shadow Disk
    const plinthGeo = new THREE.CylinderGeometry(1.9, 2.05, 0.1, 48);
    const matPlinth = new THREE.MeshStandardMaterial({
      color: 0xEAD8C3,
      roughness: 0.95,
      metalness: 0.01,
    });
    const plinth = new THREE.Mesh(plinthGeo, matPlinth);
    plinth.position.y = -0.95;
    plinth.receiveShadow = true;
    proceduralGroup.add(plinth);

    // Subtle dark terracotta pedestal ring
    const ringGeo = new THREE.TorusGeometry(1.95, 0.025, 16, 64);
    const ring = new THREE.Mesh(ringGeo, matTerracottaAccent);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.9;
    proceduralGroup.add(ring);

    // --- Workstation Desk ---
    const deskTopGeo = new THREE.BoxGeometry(2.1, 0.09, 1.15);
    const deskTop = new THREE.Mesh(deskTopGeo, matDesk);
    deskTop.position.set(0, 0.1, 0.2);
    deskTop.castShadow = true;
    deskTop.receiveShadow = true;
    proceduralGroup.add(deskTop);

    // Desk Wood Trim
    const deskTrimGeo = new THREE.BoxGeometry(2.14, 0.04, 0.05);
    const deskTrim = new THREE.Mesh(deskTrimGeo, matDeskWoodTrim);
    deskTrim.position.set(0, 0.08, 0.78);
    proceduralGroup.add(deskTrim);

    // Desk Legs (Minimalist Architectural Trestles)
    const legGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.0, 16);
    const matLegs = new THREE.MeshStandardMaterial({ color: 0x302A26, roughness: 0.7, metalness: 0.5 });
    
    const legPositions = [
      [-0.92, -0.42, -0.25],
      [0.92, -0.42, -0.25],
      [-0.92, -0.42, 0.65],
      [0.92, -0.42, 0.65],
    ];
    legPositions.forEach(([x, y, z]) => {
      const leg = new THREE.Mesh(legGeo, matLegs);
      leg.position.set(x, y, z);
      leg.castShadow = true;
      proceduralGroup.add(leg);
    });

    // --- Laptop Setup ---
    const laptopBaseGeo = new THREE.BoxGeometry(0.68, 0.02, 0.48);
    const laptopBase = new THREE.Mesh(laptopBaseGeo, matLaptopBody);
    laptopBase.position.set(0, 0.16, 0.28);
    laptopBase.castShadow = true;
    laptopBase.receiveShadow = true;
    proceduralGroup.add(laptopBase);

    // Laptop Display Lid & Screen
    const laptopLidGroup = new THREE.Group();
    laptopLidGroup.position.set(0, 0.17, 0.05);
    laptopLidGroup.rotation.x = -0.25; // Ergonomic 105° tilt
    proceduralGroup.add(laptopLidGroup);

    const lidGeo = new THREE.BoxGeometry(0.68, 0.44, 0.016);
    const lid = new THREE.Mesh(lidGeo, matLaptopBody);
    lid.position.set(0, 0.22, 0);
    lid.castShadow = true;
    laptopLidGroup.add(lid);

    const screenGeo = new THREE.PlaneGeometry(0.64, 0.40);
    const screenMesh = new THREE.Mesh(screenGeo, matScreen);
    screenMesh.position.set(0, 0.22, 0.01);
    laptopLidGroup.add(screenMesh);

    // Developer Terracotta Coffee Mug on the right
    const mugGeo = new THREE.CylinderGeometry(0.065, 0.06, 0.12, 16);
    const mug = new THREE.Mesh(mugGeo, matTerracottaAccent);
    mug.position.set(0.68, 0.21, 0.35);
    mug.castShadow = true;
    proceduralGroup.add(mug);

    // --- The Software Engineer Character ---
    const characterGroup = new THREE.Group();
    characterGroup.position.set(0, 0, -0.32);
    proceduralGroup.add(characterGroup);

    // Torso / Developer Hoodie
    const torsoGeo = new THREE.CylinderGeometry(0.32, 0.36, 0.72, 24);
    const torso = new THREE.Mesh(torsoGeo, matSweater);
    torso.position.set(0, 0.52, 0);
    torso.castShadow = true;
    torso.receiveShadow = true;
    characterGroup.add(torso);

    // Hoodie Red Collar Trim
    const collarGeo = new THREE.TorusGeometry(0.18, 0.03, 12, 32);
    const collar = new THREE.Mesh(collarGeo, matTerracottaAccent);
    collar.rotation.x = Math.PI / 2;
    collar.position.set(0, 0.88, 0.02);
    characterGroup.add(collar);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.11, 0.13, 0.14, 20);
    const neck = new THREE.Mesh(neckGeo, matSkin);
    neck.position.set(0, 0.95, 0);
    neck.castShadow = true;
    characterGroup.add(neck);

    // Head Group (Smoothly tilts and follows cursor)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.14, 0);
    characterGroup.add(headGroup);

    // Head / Face
    const headGeo = new THREE.SphereGeometry(0.24, 32, 32);
    headGeo.scale(0.92, 1.05, 0.96);
    const head = new THREE.Mesh(headGeo, matSkin);
    head.castShadow = true;
    headGroup.add(head);

    // Styled Hair (Matching Pranav's portrait)
    const hairTopGeo = new THREE.SphereGeometry(0.26, 28, 28);
    hairTopGeo.scale(0.96, 0.9, 1.02);
    const hairTop = new THREE.Mesh(hairTopGeo, matHair);
    hairTop.position.set(0, 0.09, -0.02);
    headGroup.add(hairTop);

    // Hair front quiff / sweep
    const quiffGeo = new THREE.CylinderGeometry(0.08, 0.18, 0.22, 16);
    const quiff = new THREE.Mesh(quiffGeo, matHair);
    quiff.rotation.z = -0.3;
    quiff.position.set(0.04, 0.22, 0.12);
    headGroup.add(quiff);

    // Minimalist Modern Glasses
    const matGlasses = new THREE.MeshStandardMaterial({ color: 0x1A1412, roughness: 0.2, metalness: 0.8 });
    const lensL = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.012, 8, 24), matGlasses);
    lensL.position.set(-0.09, 0.02, 0.22);
    headGroup.add(lensL);

    const lensR = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.012, 8, 24), matGlasses);
    lensR.position.set(0.09, 0.02, 0.22);
    headGroup.add(lensR);

    const bridge = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.06, 8), matGlasses);
    bridge.rotation.z = Math.PI / 2;
    bridge.position.set(0, 0.02, 0.225);
    headGroup.add(bridge);

    // --- Arms & Typing Hands ---
    // Left Arm & Forearm
    const leftArmGeo = new THREE.CylinderGeometry(0.085, 0.08, 0.42, 16);
    const leftArm = new THREE.Mesh(leftArmGeo, matSweater);
    leftArm.position.set(-0.36, 0.52, 0.14);
    leftArm.rotation.set(0.85, 0.1, -0.35);
    leftArm.castShadow = true;
    characterGroup.add(leftArm);

    const leftForearmGeo = new THREE.CylinderGeometry(0.075, 0.065, 0.38, 16);
    const leftForearm = new THREE.Mesh(leftForearmGeo, matSweater);
    leftForearm.position.set(-0.24, 0.24, 0.36);
    leftForearm.rotation.set(1.4, 0.2, -0.2);
    leftForearm.castShadow = true;
    characterGroup.add(leftForearm);

    // Left Hand (over laptop keyboard)
    const leftHandGeo = new THREE.SphereGeometry(0.065, 16, 16);
    leftHandGeo.scale(1.2, 0.7, 1.4);
    const leftHand = new THREE.Mesh(leftHandGeo, matSkin);
    leftHand.position.set(-0.16, 0.19, 0.52);
    leftHand.castShadow = true;
    characterGroup.add(leftHand);

    // Right Arm & Forearm
    const rightArmGeo = new THREE.CylinderGeometry(0.085, 0.08, 0.42, 16);
    const rightArm = new THREE.Mesh(rightArmGeo, matSweater);
    rightArm.position.set(0.36, 0.52, 0.14);
    rightArm.rotation.set(0.85, -0.1, 0.35);
    rightArm.castShadow = true;
    characterGroup.add(rightArm);

    const rightForearmGeo = new THREE.CylinderGeometry(0.075, 0.065, 0.38, 16);
    const rightForearm = new THREE.Mesh(rightForearmGeo, matSweater);
    rightForearm.position.set(0.24, 0.24, 0.36);
    rightForearm.rotation.set(1.4, -0.2, 0.2);
    rightForearm.castShadow = true;
    characterGroup.add(rightForearm);

    // Right Hand (over laptop keyboard)
    const rightHandGeo = new THREE.SphereGeometry(0.065, 16, 16);
    rightHandGeo.scale(1.2, 0.7, 1.4);
    const rightHand = new THREE.Mesh(rightHandGeo, matSkin);
    rightHand.position.set(0.16, 0.19, 0.52);
    rightHand.castShadow = true;
    characterGroup.add(rightHand);

    // --- Floating Ambient Code Particles / Glyphs ---
    const particlesGroup = new THREE.Group();
    proceduralGroup.add(particlesGroup);

    const glyphGeos = [
      new THREE.BoxGeometry(0.035, 0.035, 0.035),
      new THREE.OctahedronGeometry(0.032),
      new THREE.TetrahedronGeometry(0.036),
    ];
    const matGlyphCyan = new THREE.MeshBasicMaterial({ color: 0x58C4DC });
    const matGlyphRed = new THREE.MeshBasicMaterial({ color: 0xC63D2F });
    const matGlyphSand = new THREE.MeshBasicMaterial({ color: 0xE8D5BF });

    const glyphMeshes: { mesh: THREE.Mesh; seed: number; baseY: number }[] = [];
    for (let i = 0; i < 9; i++) {
      const geo = glyphGeos[i % glyphGeos.length];
      const mat = i % 3 === 0 ? matGlyphRed : i % 2 === 0 ? matGlyphCyan : matGlyphSand;
      const mesh = new THREE.Mesh(geo, mat);
      const angle = (i / 9) * Math.PI * 2;
      const radius = 0.95 + (i % 3) * 0.25;
      mesh.position.set(
        Math.cos(angle) * radius,
        0.5 + (i * 0.16),
        Math.sin(angle) * radius * 0.7
      );
      particlesGroup.add(mesh);
      glyphMeshes.push({ mesh, seed: i * 1.5, baseY: mesh.position.y });
    }

    // =========================================================================
    // 6. Interaction, Mouse Parallax & Animation Loop
    // =========================================================================
    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;
    let isHeroVisible = true;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Stop animation when user leaves the hero section to keep performance optimal
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isHeroVisible = entry.isIntersecting;
      });
    }, { threshold: 0.1 });
    heroObserver.observe(container);

    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Only run calculations when visible in viewport
      if (!isHeroVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp damping for mouse parallax
      targetRotY += (mouseX * 0.32 - targetRotY) * 0.05;
      targetRotX += (mouseY * 0.18 - targetRotX) * 0.05;

      // Studio overall gentle orienting
      characterStudioGroup.rotation.y = 0.24 + targetRotY;
      characterStudioGroup.rotation.x = -0.04 + targetRotX * 0.5;

      // Subtle breathing motion on torso and shoulders
      const breathing = Math.sin(elapsedTime * 2.2) * 0.012;
      torso.position.y = 0.52 + breathing;
      neck.position.y = 0.95 + breathing;

      // Head smoothly follows cursor + subtle idle nod
      headGroup.rotation.y = targetRotY * 0.8 + Math.sin(elapsedTime * 1.5) * 0.03;
      headGroup.rotation.x = -targetRotX * 0.6 + Math.sin(elapsedTime * 2.2) * 0.015;

      // Typing animation on hands
      const typeSpeed = elapsedTime * 9.5;
      leftHand.position.y = 0.19 + Math.abs(Math.sin(typeSpeed)) * 0.018;
      rightHand.position.y = 0.19 + Math.abs(Math.cos(typeSpeed + 0.8)) * 0.018;

      // Update animated code on screen every ~6 frames
      if (Math.floor(elapsedTime * 6) % 2 === 0) {
        drawCodeLines(elapsedTime);
      }

      // Floating code particles gentle drift
      glyphMeshes.forEach(({ mesh, seed, baseY }) => {
        mesh.position.y = baseY + Math.sin(elapsedTime * 1.8 + seed) * 0.06;
        mesh.rotation.y += 0.015;
        mesh.rotation.x += 0.01;
      });

      // Laptop screen light gentle flicker
      laptopGlowLight.intensity = 1.45 + Math.sin(elapsedTime * 7.5) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      isDisposed = true;
      window.removeEventListener('mousemove', handleMouseMove);
      heroObserver.disconnect();
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      screenTexture.dispose();
      plinthGeo.dispose();
      ringGeo.dispose();
      deskTopGeo.dispose();
      deskTrimGeo.dispose();
      legGeo.dispose();
      laptopBaseGeo.dispose();
      lidGeo.dispose();
      screenGeo.dispose();
      mugGeo.dispose();
      torsoGeo.dispose();
      collarGeo.dispose();
      neckGeo.dispose();
      headGeo.dispose();
      hairTopGeo.dispose();
      quiffGeo.dispose();
      leftArmGeo.dispose();
      leftForearmGeo.dispose();
      leftHandGeo.dispose();
      rightArmGeo.dispose();
      rightForearmGeo.dispose();
      rightHandGeo.dispose();

      matSkin.dispose();
      matHair.dispose();
      matSweater.dispose();
      matTerracottaAccent.dispose();
      matDesk.dispose();
      matDeskWoodTrim.dispose();
      matLaptopBody.dispose();
      matScreen.dispose();
      matPlinth.dispose();
      matGlasses.dispose();
      matLegs.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [viewMode, reducedMotion]);

  const isPhotoView = reducedMotion || !webglSupported || viewMode === 'photo';

  return (
    <div className={`hero-visual-card ${!isPhotoView ? 'hero-3d-character-wrapper' : ''}`}>
      {/* Visual Switcher Bar */}
      <div className="hero-view-switch-bar">
        <button
          type="button"
          className={`hero-switch-btn ${viewMode === '3d' ? 'is-active' : ''}`}
          onClick={() => setViewMode('3d')}
          title="Interactive 3D Cartoon Developer Character"
          aria-label="Switch to 3D Developer Character"
        >
          <span>✨ 3D Character</span>
        </button>
        <button
          type="button"
          className={`hero-switch-btn ${viewMode === 'photo' ? 'is-active' : ''}`}
          onClick={() => setViewMode('photo')}
          title="Authentic Portrait Photograph"
          aria-label="Switch to Authentic Photo Portrait"
        >
          <span>👤 Photo Portrait</span>
        </button>
      </div>

      {isPhotoView ? (
        <ArchFrame
          imageSrc={fallbackImage}
          altText="Pranav M — Frontend Developer and AI/ML Practitioner sitting with laptop"
          caption="Pranav M — Student & Developer"
          badgeText="Frontend × AI/ML"
          enableParallax={enableScrollParallax}
        />
      ) : (
        /* 3D WebGL Canvas Stage */
        <div
          className="hero-3d-canvas-container"
          ref={containerRef}
          role="img"
          aria-label="Interactive 3D cartoon software engineer character working at laptop with glowing screen"
        />
      )}
    </div>
  );
}
