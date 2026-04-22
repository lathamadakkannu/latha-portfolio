"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Briefcase, Mail, MapPin, Phone, ExternalLink, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-8">
            <Link href="#home" className="text-4xl font-black tracking-tighter group inline-block">
              LA<span className="text-primary tracking-normal group-hover:tracking-widest transition-all duration-500">THA</span>
            </Link>
            <p className="text-muted-foreground/80 text-base max-w-sm leading-relaxed font-medium">
              Frontend Developer specializing in building modern, high-performance,
              and user-friendly web applications. Let's create something extraordinary together.
            </p>

          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-foreground/50">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground font-black hover:text-primary transition-all flex items-center gap-3 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-foreground/50">Get In Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-sm text-muted-foreground group cursor-default">
                <div className="p-2.5 bg-primary/5 rounded-xl text-primary"><Mail size={16} /></div>
                <span className="font-bold group-hover:text-foreground transition-colors group-hover:underline underline-offset-4 decoration-primary/30">lathamadakkannu@gmail.com</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-muted-foreground group cursor-default">
                <div className="p-2.5 bg-primary/5 rounded-xl text-primary"><Phone size={16} /></div>
                <span className="font-bold group-hover:text-foreground transition-colors">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-muted-foreground group cursor-default">
                <div className="p-2.5 bg-primary/5 rounded-xl text-primary"><MapPin size={16} /></div>
                <span className="font-bold group-hover:text-foreground transition-colors">Tenkasi, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="flex items-center gap-2 group cursor-default">
            <span className="text-xs font-black tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">MADE BY</span>
            <span className="text-xs font-black tracking-widest text-primary">LATHA</span>
          </div>

          <p className="text-[10px] font-black tracking-[0.2em] text-muted-foreground/40 uppercase">
            © {new Date().getFullYear()} Latha. All rights reserved.
          </p>




        </div>
      </div>
    </footer>
  );
}
