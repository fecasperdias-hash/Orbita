import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function OrbitalGlobe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 3.2;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    const globeGeo = new THREE.SphereGeometry(1, 64, 64);
    const globeMat = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0x0a1628, specular: 0x5AC8FA, shininess: 80, transparent: true, opacity: 0.92 });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);
    const wireMat = new THREE.MeshBasicMaterial({ color: 0x0071E3, wireframe: true, transparent: true, opacity: 0.08 });
    const wireGlobe = new THREE.Mesh(globeGeo, wireMat);
    wireGlobe.scale.setScalar(1.001);
    scene.add(wireGlobe);
    const glowGeo = new THREE.SphereGeometry(1.15, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x5AC8FA, transparent: true, opacity: 0.04, side: THREE.BackSide });
    scene.add(new THREE.Mesh(glowGeo, glowMat));
    const createRing = (radius, tilt, color, opacity) => {
      const curve = new THREE.EllipseCurve(0, 0, radius, radius * 0.35, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(120).map(p => new THREE.Vector3(p.x, p.y, 0));
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
      const ring = new THREE.Line(geo, mat);
      ring.rotation.x = tilt;
      ring.rotation.y = Math.PI * 0.15;
      scene.add(ring);
      return ring;
    };
    const ring1 = createRing(1.5, Math.PI * 0.2, 0x0071E3, 0.35);
    const ring2 = createRing(1.85, Math.PI * 0.5, 0x5AC8FA, 0.2);
    const ring3 = createRing(2.2, Math.PI * 0.35, 0xAF52DE, 0.15);
    const dotGeo = new THREE.SphereGeometry(0.045, 8, 8);
    const dots = [];
    const addDot = (ring, angle, color) => {
      const mat = new THREE.MeshBasicMaterial({ color });
      const dot = new THREE.Mesh(dotGeo, mat);
      dot.userData = { ring, angle };
      scene.add(dot);
      dots.push(dot);
    };
    addDot(ring1, 0, 0x0071E3);
    addDot(ring1, Math.PI, 0x5AC8FA);
    addDot(ring2, Math.PI * 0.5, 0xAF52DE);
    addDot(ring2, Math.PI * 1.5, 0x0071E3);
    addDot(ring3, Math.PI * 0.25, 0x5AC8FA);
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dirLight = new THREE.DirectionalLight(0x5AC8FA, 0.8);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);
    const rimLight = new THREE.DirectionalLight(0xAF52DE, 0.3);
    rimLight.position.set(-5, -3, -3);
    scene.add(rimLight);
    let mouseX = 0, mouseY = 0;
    const handleMouse = (e) => {
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.5;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.5;
    };
    window.addEventListener('mousemove', handleMouse);
    let frame;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      globe.rotation.y += 0.002;
      wireGlobe.rotation.y += 0.002;
      ring1.rotation.z += 0.003;
      ring2.rotation.z -= 0.002;
      ring3.rotation.z += 0.0015;
      dots.forEach((dot, i) => {
        const speed = [0.003, 0.003, -0.002, -0.002, 0.0015][i];
        dot.userData.angle += speed;
        const { ring, angle } = dot.userData;
        const r = [1.5, 1.5, 1.85, 1.85, 2.2][i];
        const pos = new THREE.Vector3(r * Math.cos(angle), r * 0.35 * Math.sin(angle), 0);
        pos.applyEuler(ring.rotation);
        dot.position.copy(pos);
      });
      globe.rotation.x += (mouseY * 0.3 - globe.rotation.x) * 0.02;
      camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.02;
      renderer.render(scene, camera);
    };
    animate();
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth, h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('resize', handleResize);
      if (mount && renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" style={{ minHeight: 480 }} />;
}
