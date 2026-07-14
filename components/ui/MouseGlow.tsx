"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const glow =
    resolvedTheme === "dark"
      ? "rgba(59,130,246,0.10)" // Blue glow
      : "rgba(99,102,241,0.10)"; // Softer indigo glow

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-all duration-300"
      style={{
        background: `radial-gradient(
          450px circle at ${position.x}px ${position.y}px,
          ${glow},
          transparent 100%
        )`,
      }}
    />
  );
}
