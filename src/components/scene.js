import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Scene = () => {
  const containerRef = useRef();

  useEffect(() => {
    // 3D scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Load 3D object
    const loader = new GLTFLoader();
    loader.load('../assets/3d/scene.gltf', (gltf) => {
      const model = gltf.scene;

      // Modify the position, scale, or other properties of the model if needed
      model.position.set(x, y, z);
      model.scale.set(scaleX, scaleY, scaleZ);

      // Add the model to the scene
      scene.add(model);
    });

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      // Update object transformations or animations here
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default Scene;
