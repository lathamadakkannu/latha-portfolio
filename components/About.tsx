"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function About() {
  const experiences = [
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Frontend Developer",
      organization: "SVJ Technologies",
      description: "Specializing in developing and maintaining web applications with a focus on responsive static and dynamic front-end design.",
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Training Program",
      organization: "Zoho",
      description: "Completed comprehensive training on 'Front-End Development'.",
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "ReactJs Training",
      organization: "Fabevy",
      description: "In-depth training program titled 'Front-End Development using ReactJs'.",
    },
  ];

  const education = [
    {
      degree: "B.E (ECE)",
      institution: "JP College of Engineering",
      year: "2019 - 2023",
      result: "Percentage: 83%",
    },
    {
      degree: "HSC",
      institution: "Govt.Hr.Sec.School, Surandai",
      year: "2018 - 2019",
      result: "Percentage: 69%",
    },
    {
      degree: "SSLC",
      institution: "Govt.Hr.Sec.School, Surandai",
      year: "2016 - 2017",
      result: "Percentage: 87%",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="My professional journey and educational background." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Creative Stepper Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-12 relative"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-black flex items-center gap-3 ">
              <span className="p-2 bg-primary/10 rounded-2xl shadow-inner"><Briefcase size={24} className="text-primary" /></span>
              Professional Journey
            </motion.h3>

            <div className="relative border-l-2 border-primary/10 ml-8 space-y-8 py-4">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="relative pl-12 group"
                >
                  {/* Glowing Node */}
                  <div className="absolute -left-[11px] top-8 w-5 h-5 rounded-full bg-background border-2 border-primary shadow-[0_0_20px_rgba(59,130,246,0.5)] group-hover:scale-125 group-hover:shadow-primary transition-all duration-500 z-10" />
                  
                  <div className="relative p-6 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 overflow-hidden hover:border-primary/40 hover:bg-white/10 transition-all duration-700 shadow-2xl">


                    {/* Inner Sweep Animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      style={{ skewX: -20 }}
                    />

                    <div className="flex flex-col md:flex-row gap-8 relative z-10">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                        {exp.icon}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h4 className="text-lg font-black group-hover:text-primary transition-colors">{exp.title}</h4>
                        </div>
                        <p className="text-primary font-black text-xs uppercase tracking-[0.3em] bg-primary/5 inline-block px-4 py-1.5 rounded-full border border-primary/10 mb-6">
                          {exp.organization}
                        </p>
                        <p className="text-muted-foreground/80 text-base leading-relaxed font-medium">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold flex items-center gap-3 pb-6">
              <span className="p-2 bg-primary/10 rounded-lg"><GraduationCap size={24} className="text-primary" /></span>
              Education History
            </motion.h3>
            <div className="relative border-l border-primary/20 ml-6 space-y-8 py-0">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="relative pl-10"
                >
                  <div className="absolute -left-[6px] top-6 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10" />
                  <div className="p-8 bg-white/5 dark:bg-black/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 hover:border-primary/30 transition-all duration-500 shadow-xl group">
                    <span className="text-xs font-black text-primary p-2 bg-primary/10 rounded-lg uppercase tracking-widest">{edu.year}</span>
                    <h4 className="text-xl font-black mt-4 group-hover:text-primary transition-colors">{edu.degree}</h4>
                    <p className="text-foreground font-bold mt-1">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm mt-4 leading-relaxed">{edu.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
