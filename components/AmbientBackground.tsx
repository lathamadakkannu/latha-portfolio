"use client";

import React from "react";
import { motion } from "framer-motion";

export function AmbientBackground() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] contrast-150 brightness-100 mix-blend-overlay" 
        style={{ backgroundImage: `url("https://res.cloudinary.com/dv5hpvltw/image/upload/v1704185732/noise_zsqmre.png")` }}
      />
      
      {/* Floating Particles Layer - Only render on client to avoid hydration mismatch */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0 
              }}
              animate={{ 
                y: [null, (Math.random() - 0.5) * 200 + "px"],
                x: [null, (Math.random() - 0.5) * 200 + "px"],
                opacity: [0, 0.2, 0],
                rotate: [0, 180],
                scale: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 10 + Math.random() * 15, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute w-24 h-24 border border-primary/20 rounded-full"
            />
          ))}
        </div>
      )}

      {/* Static Atmospheric Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px]" />
    </div>
  );
}
