import React, { useState, useEffect } from "react";

const rotatingWords = [
  { text: "Frontend Developer", icon: "👨‍💻" },
  { text: "React Enthusiast", icon: "⚛️" },
  { text: "Mobile App Creator", icon: "📱" },
  { text: "Tailwind Designer", icon: "🎨" },
  { text: "Code Lover", icon: "💻" },
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
        setFade(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const current = rotatingWords[index];

  return (
    <div className="h-10 sm:h-12 md:h-14 flex items-center justify-center overflow-visible relative">
      <h3
        className={`flex items-center gap-2 transition-opacity duration-500 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          {current.text}
        </span>
        <span className="text-xl sm:text-2xl md:text-3xl">{current.icon}</span>
      </h3>
    </div>
  );
}
