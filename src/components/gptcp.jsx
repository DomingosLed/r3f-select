import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber'


const Gptcp = () => {
  const [mesh, setMesh] = useState();

  // Use a ref to store the mesh reference
  const meshRef = useRef();

  // Function to set the mesh reference in the state
  const saveMesh = (mesh) => {
    debugger
    setMesh(mesh);
    console.log(mesh)
  };

  return (
    <Canvas>
      {/* Your 3D scene components */}
      <mesh ref={meshRef} onClick={() => saveMesh(meshRef.current)}>
        {/* Your mesh geometry, material, etc. */}
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </Canvas>
  );
};

export default Gptcp;
