"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Briefcase, Mail, ArrowUp } from "lucide-react";

export function SocialFloating() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed left-6 bottom-0 z-50 hidden lg:flex flex-col items-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-col items-center gap-4"
      >
        <SocialIcon 
          href="https://github.com/lathamadakkannu" 
          icon={<Code2 size={20} />} 
          label="GitHub" 
        />
        <SocialIcon 
          href="https://www.linkedin.com/in/latha-m-95a954301" 
          icon={<Briefcase size={20} />} 
          label="LinkedIn" 
        />
        <SocialIcon 
          href="mailto:lathamadakkannu@gmail.com" 
          icon={<Mail size={20} />} 
          label="Email" 
        />
        <div className="w-[2px] h-32 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent my-2" />
      </motion.div>

      {/* Floating Scroll to Top - Premium Style */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
        }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed right-8 bottom-8 p-5 bg-primary text-white rounded-2xl shadow-2xl z-[60] group cursor-pointer"
      >
        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        {/* Subtle Ring Glow */}
        <div className="absolute inset-0 rounded-2xl border border-white/20 animate-pulse" />
      </motion.button>
    </div>
  );
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <div className="relative group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 flex items-center justify-center shadow-xl group/link"
      >
        <div className="group-hover/link:scale-110 group-hover/link:rotate-6 transition-all duration-500">
          {icon}
        </div>
      </a>
      
      {/* Premium Tooltip */}
      <div className="absolute left-full ml-4 px-3 py-1.5 bg-background border border-border rounded-lg text-xs font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-[-10px] group-hover:translate-x-0 shadow-2xl whitespace-nowrap">
        {label}
        {/* Tooltip Arrow */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-border" />
      </div>
    </div>
  );
}
