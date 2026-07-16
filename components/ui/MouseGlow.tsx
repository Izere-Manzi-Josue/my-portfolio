"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function MouseGlow() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const glow =
    resolvedTheme === "dark"
      ? "rgba(59,130,246,0.10)"
      : "rgba(99,102,241,0.10)";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition-all duration-300"
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
