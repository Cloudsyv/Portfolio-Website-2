"use client";
import { useEffect, useState } from "react";

export default function Background() {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    const newClouds = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      top: Math.floor(Math.random() * 80) + "%",
      width: Math.floor(Math.random() * 200) + 150 + "px",
      duration: Math.floor(Math.random() * 40) + 40 + "s",
      delay: Math.floor(Math.random() * -60) + "s",
      opacity: (Math.random() * 0.4 + 0.1).toFixed(2),
      blur: Math.random() > 0.5 ? "blur(2px)" : "none",
    }));

    setClouds(newClouds);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute animate-cloud"
          style={{
            top: cloud.top,
            width: cloud.width,
            opacity: cloud.opacity,
            filter: cloud.blur,
            animationDuration: cloud.duration,
            animationDelay: cloud.delay,
          }}
        >
          <img src="/Cloud.png" alt="" className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}
