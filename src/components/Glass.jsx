// Glass.jsx
import React from 'react';
import { Box } from '@react-three/drei';

const Glass = () => {
  return (
    <Box args={[0.9, 0.9, 0.05]} position={[0, 0, 0.06]}>
      <meshStandardMaterial transparent opacity={0.5} color="lightblue" />
    </Box>
  );
};

export default Glass;
