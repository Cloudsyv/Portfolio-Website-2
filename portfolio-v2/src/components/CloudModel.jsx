"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function CloudModel() {
  const meshRef = useRef();
  const { scene } = useGLTF("/cloud.glb");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(t * 0.6) * 0.2;
  });

  return (
    <mesh ref={meshRef} scene={scene} castShadow position={[0, 0, 0]}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}
