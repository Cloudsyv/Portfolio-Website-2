import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  Clouds,
  Environment,
  ContactShadows,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import PuffyCloud from "./PuffyCloud";

export default function Cloud3D() {
  return (
    <Canvas>
      <ambientLight intensity={0.6} />

      <PerspectiveCamera
        makeDefault
        position={[0, -4, 18]}
        fov={90}
        onUpdate={(cam) => cam.lookAt(0, 0, 0)}
      />

      <OrbitControls
        autoRotate
        autoRotateSpeed={1}
        enableZoom={false}
        enablePan={true}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />

      {/* Key light */}
      <spotLight
        position={[0, 40, 2]}
        angle={0.5}
        intensity={1500}
        penumbra={1}
      />

      {/* Rim light */}
      <spotLight
        position={[-20, 0, -8]}
        color="#88aaff"
        angle={0.3}
        intensity={400}
      />

      <Suspense fallback={null}>
        <Clouds>
          <PuffyCloud seed={10} position={[0, 0, 0]} />
          {/*<PuffyCloud seed={20} position={[10, 2, -5]} />
          <PuffyCloud seed={30} position={[-10, 1, -8]} />*/}
        </Clouds>

        <Environment preset="city" />
      </Suspense>

      <ContactShadows
        position={[0, -10, 0]}
        scale={50}
        blur={2.5}
        opacity={1}
        far={40}
        frames={1}
      />
    </Canvas>
  );
}
