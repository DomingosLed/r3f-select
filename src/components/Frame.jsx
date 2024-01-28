// Frame.jsx
import React from 'react';
import { Box } from '@react-three/drei';

const Frame = () => {
  return (
    <Box args={[1, 1, 0.1]} position={[0, 0, 0]}>
      <meshStandardMaterial color="brown" />
    </Box>
  );
};

export default Frame;
