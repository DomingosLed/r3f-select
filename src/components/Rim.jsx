// Rim.jsx
import React from 'react';
import { Cylinder } from '@react-three/drei';

const Rim = () => {
  return (
    <Cylinder args={[1, 1, 0.05, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial color="black" />
    </Cylinder>
  );
};

export default Rim;
