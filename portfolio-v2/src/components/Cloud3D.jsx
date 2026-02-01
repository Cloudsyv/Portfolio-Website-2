import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CloudModel from "./CloudModel";

export default function Cloud3D() {
  return (
    <Canvas shadows camera={{ position: [0, 3, 6] }}>
      <ambientLight intensity={0.3} />
      <directionalLight castShadow position={[5, 5, 5]} />

      <Suspense fallback={null}>
        <CloudModel />
      </Suspense>

      <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -1.5, 0]}>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.25} />
      </mesh>
    </Canvas>
  );
}
