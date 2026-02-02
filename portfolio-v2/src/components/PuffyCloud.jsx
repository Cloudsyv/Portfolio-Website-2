"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Cloud } from "@react-three/drei";

export default function PuffyCloud({
  position = [0, 0, 0],
  seed = 1,
  color = "rgb(255,255,255)",
}) {
  const group = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.position.y = position[1] + Math.sin(t * 0.4) * 0.3;
      group.current.rotation.y = t * 0.02;
    }
  });

  return (
    <group ref={group} position={position}>
      <Cloud
        seed={seed}
        bounds={[-3, -3, -3]}
        volume={[4, 5, 4]}
        growth={3}
        segments={35}
        speed={0.1}
        opacity={0.9}
        color={color}
      />
      <Cloud
        seed={seed + 1}
        position={[0, 0, 0]}
        bounds={[6, 2, 1]}
        volume={7}
        growth={3}
        segments={30}
        speed={0.2}
        opacity={0.9}
        color={color}
      />
      <Cloud
        seed={seed + 2}
        position={[3, 3, 3]}
        bounds={[3, 3, 6]}
        volume={7}
        growth={3}
        segments={30}
        speed={0.3}
        opacity={0.9}
        color={color}
      />

      {/*<pointLight color="#bcdcff" intensity={0.3} distance={10} />*/}
    </group>
  );
}
