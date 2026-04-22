"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ExternalLink, Code } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Swiggy Clone Website",
    description: "A fully responsive Swiggy clone built with HTML, CSS, and JavaScript. Features restaurant listings, cart functionality, and modern UI design.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    tags: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://lathamadakkannu.github.io/swiggy/",
  },
  {
    id: 2,
    title: "Rehoboth Infrastructure",
    description: "A professional construction & development company website showcasing family house developments, commercial buildings, sports centers, and office towers with a modern UI design.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop", // Consider replacing with a screenshot of your actual site
    tags: ["HTML5", "CSS3", "UI Design"],
    liveUrl: "https://lathamadakkannu.github.io/Rehoboth-Infrastructure/index.html",
  },
  {
    id: 3,
    title: "Education Platform",
    description: "A modern web application built using Next.js (React-based framework) that allows users to explore courses with a smooth and responsive interface. Integrated Redux Toolkit for efficient state management and implemented dynamic routing for a better user experience.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    tags: ["Next.js", "React", "Redux Toolkit", "Sass"],
    liveUrl: "https://education-platform-six-brown.vercel.app/",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with smooth animations and interactive components.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["ReactJs", "NextJs", "Framer Motion"],
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Educational Portal",
    description: "Responsive web application designed to manage student activities and course content effectively.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    tags: ["HTML5", "CSS3", "ReactJs"],
    liveUrl: "#",
  },
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    },
  },
};

export function Projects() {
  // Function to handle card click (navigate to live URL)
  const handleCardClick = (liveUrl: string) => {
    if (liveUrl && liveUrl !== "#") {
      window.open(liveUrl, "_blank");
    }
  };

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of my recent work that I'm proud of."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                y: -15,
                transition: { duration: 0.4 }
              }}
              className="bg-white/5 dark:bg-black/5 backdrop-blur-3xl group rounded-[2.5rem] overflow-hidden border border-white/10 dark:border-white/5 shadow-2xl hover:shadow-primary/30 hover:border-primary/20 transition-all duration-500 cursor-pointer"
              onClick={() => handleCardClick(project.liveUrl)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
                  {project.liveUrl !== "#" && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform duration-300 shadow-xl"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={24} />
                    </Link>
                  )}
                 
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-10 line-clamp-2 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-background/50 backdrop-blur-md rounded-xl text-[10px] font-black text-primary uppercase tracking-[0.2em] border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}