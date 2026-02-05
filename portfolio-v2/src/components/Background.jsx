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
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Clouds layer
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
      ))}*/}
    </div>
  );
}
