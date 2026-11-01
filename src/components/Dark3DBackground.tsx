import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Dark3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
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
    scene.fog = new THREE.FogExp2(0x07080b, 0.035);

    let width = window.innerWidth;
    let height = window.innerHeight;

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x07080b, 0);

    container.appendChild(renderer.domElement);

    // 2. Ambient & Subtle Colored Lighting
    const ambientLight = new THREE.AmbientLight(0x0a1020, 1.2);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f0ff, 2.0, 35);
    cyanLight.position.set(-12, 8, 5);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0x8b5cf6, 2.5, 35);
    violetLight.position.set(12, -8, 5);
    scene.add(violetLight);

    // 3. Floating Neural Particle Field
    const particleCount = 280;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x00f0ff);
    const colorViolet = new THREE.Color(0x8b5cf6);
    const colorWhite = new THREE.Color(0x94a3b8);

    for (let i = 0; i < particleCount; i++) {
      // Distribute in a spherical cloud around origin
      const radius = 12 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi) - 4;

      // Color variation between cyan, violet, and muted slate
      const pick = Math.random();
      const c = pick < 0.45 ? colorCyan : pick < 0.8 ? colorViolet : colorWhite;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture creation via offscreen canvas
    const particleCanvas = document.createElement('canvas');
    particleCanvas.width = 32;
    particleCanvas.height = 32;
    const ctx = particleCanvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.6)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(particleCanvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.35,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.6,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 4. Distant Floating Geometric Polyhedra
    const polyGroup = new THREE.Group();
    const polyMaterialWire = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const polyMaterialViolet = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });

    // 4 floating geometric nodes at various depths
    const ico1 = new THREE.Mesh(new THREE.IcosahedronGeometry(2.2, 0), polyMaterialWire);
    ico1.position.set(-14, 5, -8);
    polyGroup.add(ico1);

    const ico2 = new THREE.Mesh(new THREE.OctahedronGeometry(2.8, 0), polyMaterialViolet);
    ico2.position.set(15, -6, -10);
    polyGroup.add(ico2);

    const torus1 = new THREE.Mesh(new THREE.TorusGeometry(3.5, 0.08, 8, 24), polyMaterialWire);
    torus1.position.set(12, 8, -12);
    polyGroup.add(torus1);

    const torus2 = new THREE.Mesh(new THREE.TorusGeometry(4.0, 0.06, 8, 30), polyMaterialViolet);
    torus2.position.set(-12, -9, -14);
    polyGroup.add(torus2);

    scene.add(polyGroup);

    // 5. Parallax & Smooth Animation State
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;
    let targetScrollY = 0;
    let isVisible = true;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const onVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibilityChange);

    // 6. Animation Loop with Smooth Damping
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;
      scrollY += (targetScrollY - scrollY) * 0.05;

      // Rotate particle cloud gently
      particles.rotation.y = elapsed * 0.03 + mouseX * 0.2;
      particles.rotation.x = mouseY * 0.15;

      // Rotate distant geometric polyhedra
      ico1.rotation.x = elapsed * 0.12;
      ico1.rotation.y = elapsed * 0.15;
      ico2.rotation.y = elapsed * -0.1;
      ico2.rotation.z = elapsed * 0.08;
      torus1.rotation.x = elapsed * 0.08;
      torus1.rotation.y = elapsed * 0.06;
      torus2.rotation.x = elapsed * -0.05;
      torus2.rotation.z = elapsed * 0.09;

      // Camera parallax based on mouse and scroll
      camera.position.x = mouseX * 1.5;
      camera.position.y = -mouseY * 1.2 - (scrollY * 0.002);
      camera.lookAt(0, -scrollY * 0.0015, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);

      geometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      polyMaterialWire.dispose();
      polyMaterialViolet.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion]);

  if (reducedMotion || !webglSupported) {
    return (
      <div
        className="fixed inset-0 pointer-events-none z-0 dark-3d-bg-fallback"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #0d1322 0%, #07080b 70%)',
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 dark-3d-bg-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.75,
      }}
      aria-hidden="true"
    />
  );
}

