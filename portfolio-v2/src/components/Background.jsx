"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const clouds = Array.from({ length: 12 }).map((_, i) => ({
  top: `${Math.random() * 100}%`,
  size: 200 + Math.random() * 300,
  duration: 120 + Math.random() * 80,
  opacity: 0.4 + Math.random() * 0.4,
  delay: Math.random() * 200,
  startX: -100 + Math.random() * 200,
}));

export default function Background() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const progress = Math.min(scrollY / 1200, 1);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Sky */}
      <div
        className="absolute inset-0 transition-colors duration-300"
        style={{
          background: `linear-gradient(
            to bottom,
            rgb(${240 - progress * 120}, ${240 - progress * 120}, ${240 - progress * 120}),
            rgb(${240 - progress * 200}, ${245 - progress * 200}, ${250 - progress * 200})
          )`,
        }}
      />

      {/* Clouds layer */}
      {clouds.map((cloud, i) => (
        <div
          key={i}
          className="absolute cloud-move"
          style={{
            top: cloud.top,
            width: cloud.size,
            height: cloud.size,
            opacity: cloud.opacity,
            animationDuration: `${cloud.duration}s`,
            left: `${cloud.startX}vw`,
            //animationDelay: `${cloud.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
