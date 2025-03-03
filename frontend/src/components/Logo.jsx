import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

function MovingNote() {
  const noteRef = useRef();

  useFrame(() => {
    if (noteRef.current) {
      noteRef.current.position.y = Math.sin(Date.now() * 0.002) * 0.2 + 0.5; 
    }
  });

  return (
    <group ref={noteRef} scale={1.2} position={[0, 0.5, 0]}> 
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial color="gold" metalness={0.5} roughness={0.5} />
      </mesh>
    
      <mesh position={[0.12, 0.4, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.8, 32]} />
        <meshStandardMaterial color="gold" metalness={0.5} roughness={0.5} />
      </mesh>
      
      <mesh position={[0.15, 0.9, 0]} rotation={[0, 0, Math.PI / 5]}>
        <boxGeometry args={[0.45, 0.06, 0.05]} />
        <meshStandardMaterial color="gold" metalness={0.5} roughness={0.5} />
      </mesh>
    </group>
  );
}

function BugNbassLogo() {
  return (
    <div style={{ height: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Canvas style={{ width: "100px" }} camera={{ position: [0, 0, 2.5] }}>
        <ambientLight intensity={1} />
        <pointLight position={[2, 2, 2]} intensity={3} />
        <MovingNote />
      </Canvas>
    </div>
  );
}

export default BugNbassLogo;
