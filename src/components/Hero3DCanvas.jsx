import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 4, 11);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create Architectural Topological Grid
    const width = 24;
    const height = 24;
    const segmentsX = 48;
    const segmentsY = 48;
    const geometry = new THREE.PlaneGeometry(width, height, segmentsX, segmentsY);
    geometry.rotateX(-Math.PI / 2.2);

    // Initial position attributes for sine wave calculation
    const positionAttr = geometry.attributes.position;
    const originalPositions = new Float32Array(positionAttr.array);

    // Materials: subtle wireframe and points
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xc5a880,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });

    const mesh = new THREE.Mesh(geometry, wireMaterial);
    scene.add(mesh);

    // Particle nodes at grid vertices
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.05,
      transparent: true,
      opacity: 0.45,
    });
    const points = new THREE.Points(geometry, pointsMaterial);
    scene.add(points);

    // Mouse physics
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 2;
      mouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation
      targetX += (mouseX * 1.2 - targetX) * 0.04;
      targetY += (mouseY * 0.8 - targetY) * 0.04;

      camera.position.x = targetX * 1.5;
      camera.position.y = 4 + targetY * -0.8;
      camera.lookAt(0, 0, 0);

      // Subtle topographical displacement
      const arr = positionAttr.array;
      for (let i = 0; i < arr.length; i += 3) {
        const ox = originalPositions[i];
        const oz = originalPositions[i + 2];
        const wave1 = Math.sin(ox * 0.4 + elapsedTime * 0.7) * 0.35;
        const wave2 = Math.cos(oz * 0.4 + elapsedTime * 0.5) * 0.35;
        const ripple = Math.sin(Math.sqrt(ox * ox + oz * oz) * 0.5 - elapsedTime * 0.9) * 0.2;
        arr[i + 1] = wave1 + wave2 + ripple;
      }
      positionAttr.needsUpdate = true;

      mesh.rotation.y = elapsedTime * 0.03;
      points.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      wireMaterial.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none z-0 opacity-60 overflow-hidden" 
      aria-hidden="true"
    />
  );
}
