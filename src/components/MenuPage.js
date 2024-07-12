// src/components/MenuPage.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const MenuPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Add ambient and directional light
    const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // strong white light
    directionalLight.position.set(5, 10, 7).normalize();
    scene.add(directionalLight);

    // Load the GLTF model
    const loader = new GLTFLoader();
    loader.load('../assets/drinks/coffee3.glb', (gltf) => {
      const model = gltf.scene;
      model.position.set(0, 0, -3); // Adjust position to fit the view
      model.scale.set(0.5, 0.5, 0.5); // Scale down the model
      scene.add(model);

      // Rotate the model for effect
      const animate = () => {
        requestAnimationFrame(animate);
        model.rotation.y += 0.01; // Rotate around Y-axis
        renderer.render(scene, camera);
      };
      animate();
    }, undefined, (error) => {
      console.error('An error happened:', error);
    });

    // Set up the camera position
    camera.position.z = 5;

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default MenuPage;
