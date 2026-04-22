"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

import { Code2, Layers, FileCode, Cpu, Zap, Heart, Languages, Sparkles, Laptop, Flag, Globe2 } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    skills: ["NextJs", "ReactJs", "TypeScript", "JavaScript", "React Native (Expo Only)", "Tailwind CSS", "SASS", "Bootstrap", "HTML5", "CSS3"],
  },
  {
    title: "Personal Attributes",
    skills: ["Quick Learner", "Adaptability", "Honesty"],
  },
  {
    title: "Languages",
    skills: ["Tamil", "English"],
  },
];

const skillIcons: Record<string, React.ReactNode> = {
  "NextJs": <Zap size={20} />,
  "ReactJs": <Cpu size={20} />,
  "TypeScript": <FileCode size={20} className="text-blue-400" />,
  "JavaScript": <FileCode size={20} />,
  "React Native (Expo Only)": <Laptop size={20} className="text-cyan-400" />,
  "Tailwind CSS": <Sparkles size={20} className="text-sky-400" />,
  "SASS": <Layers size={20} className="text-pink-400" />,
  "Bootstrap": <Layers size={20} className="text-purple-400" />,
  "HTML5": <Code2 size={20} />,
  "CSS3": <Layers size={20} />,

  "Quick Learner": <Zap size={20} className="text-amber-400" />,
  "Adaptability": <Sparkles size={20} className="text-violet-400" />,
  "Honesty": <Heart size={20} className="text-rose-400" />,

  // ✅ Better language icons
  "Tamil": <Flag size={20} className="text-orange-400" />,
  "English": <Globe2 size={20} className="text-blue-400" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <SectionHeading 
          title="Skills & Attributes" 
          subtitle="My technical toolkit and personal strengths." 
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 space-y-8"
        >
          {/* Technical Skills - High Density Grid */}
          <motion.div
            variants={itemVariants}
            className="group relative p-8 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 hover:border-primary/40 transition-all duration-700 shadow-2xl overflow-hidden text-center sm:text-left"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <div className="p-2.5 bg-primary/10 rounded-xl text-primary"><Cpu size={20} /></div>
              <h3 className="text-xl font-black tracking-widest">Technical Expertise</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skillCategories[0].skills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl flex flex-col items-center gap-3 text-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group/skill"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary group-hover/skill:scale-110 group-hover/skill:rotate-6 transition-all duration-500">
                    {skillIcons[skill] || <Code2 size={18} />}
                  </div>
                  <span className="font-bold text-xs">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Row: Attributes & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Attributes */}
            <motion.div
              variants={itemVariants}
              className="p-8 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 hover:border-violet-400/40 transition-all duration-700 shadow-2xl relative overflow-hidden group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2.5 bg-violet-500/10 rounded-xl text-violet-400"><Sparkles size={20} /></div>
                <h3 className="text-xl font-black tracking-widest">Attributes</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillCategories[1].skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 px-4 py-2.5 bg-white/[0.03] rounded-xl border border-white/5 hover:bg-white/[0.08] transition-all">
                    <span className="text-violet-400">{skillIcons[skill]}</span>
                    <span className="font-bold text-xs">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              variants={itemVariants}
              className="p-8 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 hover:border-emerald-400/40 transition-all duration-700 shadow-2xl relative overflow-hidden group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400"><Languages size={20} /></div>
                <h3 className="text-xl font-black tracking-widest">Languages</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillCategories[2].skills.map((skill) => (
                  <div key={skill} className="p-3 bg-white/[0.03] rounded-xl border border-white/5 text-center hover:bg-emerald-400/20 transition-all">
                    <span className="font-bold text-xs">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
