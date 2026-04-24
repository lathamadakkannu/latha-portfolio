"use client";

import React from "react";
import { useScroll, useTransform, AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { AmbientBackground } from "./AmbientBackground";
import { Download, ArrowRight, Code2, Sparkles, Terminal, Laptop, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SPECIALTIES = [
  "Frontend Developer",
  "UI/UX Enthusiast",
  "React Specialist",
  "Next.js Expert",
  "React Native (Expo)",
];

const ORBIT_ICONS = [
  { icon: <Code2 size={24} />, pos: "top-0 -left-6", delay: 0 },
  { icon: <Terminal size={24} />, pos: "bottom-12 -right-8", delay: 1 },
  { icon: <Laptop size={24} />, pos: "top-12 -right-10", delay: 2 },
  { icon: <Sparkles size={24} />, pos: "bottom-0 -left-10", delay: 3 },
];

export function Hero() {
  const [specialtyIndex, setSpecialtyIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax Values
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const blobRotation = useTransform(scrollYProgress, [0, 1], [0, 120]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSpecialtyIndex((prev) => (prev + 1) % SPECIALTIES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden"
    >
      <AmbientBackground />

      {/* Parallax Background Text */}
      <motion.div
        style={{ x: bgTextX, y: "-20%" }}
        className="absolute top-1/4 left-0 w-full text-[15vw] font-black text-foreground/[0.03] pointer-events-none select-none whitespace-nowrap z-0 tracking-tighter"
      >
        DEVELOPER
      </motion.div>

      {/* Parallax Background Blobs */}
      <motion.div
        style={{ rotate: blobRotation }}
        className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        style={{ rotate: blobRotation }}
        className="absolute bottom-[-10%] left-[-10%] w-[900px] h-[900px] bg-violet-500/10 rounded-full blur-[100px] -z-10"
      />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        {/* Text Content */}
        <motion.div style={{ y: textY, opacity: textOpacity }} className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-lg md:text-xl font-medium text-muted-foreground/60 tracking-tight block">
              I am
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mt-2">
              <span className="bg-gradient-to-br from-primary via-violet-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                Latha
              </span>
            </h1>
          </motion.div>

          <div className="h-10 md:h-10 mb-3 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={SPECIALTIES[specialtyIndex]}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.6, ease: "circOut" as const }}
                className="text-sm md:text-sm font-bold bg-white/10 backdrop-blur-md px-6 py-2 rounded-2xl border border-white/5 inline-block text-foreground/90 whitespace-nowrap"
              >
                {SPECIALTIES[specialtyIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-xl text-muted-foreground/80 mb-12 max-w-2xl leading-relaxed font-medium"
          >
            I am a Frontend Developer focused on building clean, responsive, and user-friendly web and mobile interfaces. I specialize in React, Next.js, and React Native (Expo only).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start mb-12"
          >
            <Link
              href="#projects"
              className="group flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-black text-lg hover:shadow-[0_0_50px_-5px] hover:shadow-primary/50 transition-all duration-500 scale-100 hover:scale-105 active:scale-95"
            >
              Check My Work
              <ArrowRight size={24} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <a
              href="/Latha_Resume.pdf"
              download="Latha_Resume.pdf"
              className="group flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-2xl text-foreground rounded-2xl font-black text-lg hover:bg-white/10 transition-all duration-500 border border-white/10 shadow-xl active:scale-95"
            >
              Resume
              <Download size={22} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Social Links - Below the buttons */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center gap-4 justify-center lg:justify-start mb-12"
          >
            <a
              href="https://github.com/lathamadakkannu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 flex items-center justify-center shadow-xl group"
              aria-label="GitHub"
            >
              <FaGithub size={20} className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
            </a>

            <a
              href="https://www.linkedin.com/in/latha-m-95a954301"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 flex items-center justify-center shadow-xl group"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
            </a>

            <a
              href="mailto:lathamadakkannu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 flex items-center justify-center shadow-xl group"
              aria-label="Email"
            >
              <FaEnvelope size={20} className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
            </a>
          </motion.div>

        </motion.div>

        {/* Profile Image Section - Modern Circular Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" as const }}
          className="flex-1 flex justify-center lg:justify-end relative"
        >
          <div className="relative p-6 md:p-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] group">
            {/* Orbiting Icons */}
            {ORBIT_ICONS.map((item, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "easeInOut"
                }}
                className={`absolute ${item.pos} z-20 w-14 h-14 bg-background/80 backdrop-blur-2xl border border-white/10 rounded-xl flex items-center justify-center text-primary shadow-2xl hidden md:flex`}
              >
                {item.icon}
              </motion.div>
            ))}

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_40px_-10px] shadow-primary/20"
            >
              <div className="absolute inset-0 z-10 border-[8px] border-white/10 rounded-full pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop"
                alt="Latha - Frontend Developer"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
            
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
        }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed right-8 bottom-8 p-5 bg-primary text-white rounded-2xl shadow-2xl z-50 group cursor-pointer"
      >
        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        <div className="absolute inset-0 rounded-2xl border border-white/20 animate-pulse" />
      </motion.button>


      {/* Creative Section Divider */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg className="relative block w-[calc(100%+1.3px)] h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-background"></path>
        </svg>
      </div>
    </section>
  );
}