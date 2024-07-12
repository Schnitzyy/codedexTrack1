import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const CoffeeCup = ({ url, position }) => {
  const [model, setModel] = useState(null);
  const mesh = useRef();
  const loader = new OBJLoader();

  useEffect(() => {
    loader.load(url, (obj) => {
      setModel(obj);
    });
  }, [url]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position}>
      {model && <primitive object={model} ref={mesh} />}
    </group>
  );
};

const CoffeeCups = () => {
  const cupUrls = [
    '/path/to/coffee1.obj',
    '/path/to/coffee2.obj',
    '/path/to/coffee3.obj',
    '/path/to/coffee4.obj',
    '/path/to/coffee5.obj',
  ];

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {cupUrls.concat(cupUrls).map((url, index) => (
        <CoffeeCup
          key={index}
          url={url}
          position={[
            (index % 6) * 2 - 6, // Adjust positioning as needed
            Math.floor(index / 6) * 2 - 6,
            0,
          ]}
        />
      ))}
    </Canvas>
  );
};

export default CoffeeCups;
