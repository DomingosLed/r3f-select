// Window.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Frame from './Frame';
import Rim from './Rim';
import Glass from './Glass';

const Window = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Add your window components */}
      <Frame />
      <Rim />
      <Glass />
    </Canvas>
  );
};

export default Window;
