import { useEffect, useRef } from "react";
import * as THREE from "three";

const TechCube = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 2.5;

    // Create cube with tech labels
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    
    // Create canvas textures for each face with tech icons/text
    const createCanvasTexture = (text: string, bgColor: string) => {
      const canvas = document.createElement("canvas");
      canvas.width = 512;
      canvas.height = 512;
      
      const ctx = canvas.getContext("2d");
      if (!ctx) return new THREE.Texture();

      // Background
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, 512, 512);

      // Border
      ctx.strokeStyle = "#00d9ff";
      ctx.lineWidth = 4;
      ctx.strokeRect(10, 10, 492, 492);

      // Text
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 64px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 256, 256);

      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const materials = [
      new THREE.MeshPhongMaterial({ map: createCanvasTexture("💻", "#1a1a2e") }),
      new THREE.MeshPhongMaterial({ map: createCanvasTexture("🤖", "#16213e") }),
      new THREE.MeshPhongMaterial({ map: createCanvasTexture("⚙️", "#0f3460") }),
      new THREE.MeshPhongMaterial({ map: createCanvasTexture("🚀", "#1a1a2e") }),
      new THREE.MeshPhongMaterial({ map: createCanvasTexture("✨", "#16213e") }),
      new THREE.MeshPhongMaterial({ map: createCanvasTexture("🧠", "#0f3460") }),
    ];

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Lighting
    const light1 = new THREE.PointLight(0x00d9ff, 0.8);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x00d9ff, 0.4);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate cube
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.008;
      
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      materials.forEach((material) => material.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-80 rounded-lg overflow-hidden"
      style={{ background: "linear-gradient(135deg, rgba(0,217,255,0.1) 0%, rgba(0,0,0,0.2) 100%)" }}
    />
  );
};

export default TechCube;
