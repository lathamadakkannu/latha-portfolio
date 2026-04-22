"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Send, Mail, MapPin, Phone, Sparkles } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "lathamadakkannu@gmail.com",
      color: "bg-blue-500/10 text-blue-500 dark:text-blue-400",
      borderColor: "border-blue-500/20 dark:border-blue-500/30",
      delay: 0.1
    },
    {
      icon: <Phone size={22} />,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      color: "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400",
      borderColor: "border-emerald-500/20 dark:border-emerald-500/30",
      delay: 0.2
    },
    {
      icon: <MapPin size={22} />,
      label: "Location",
      value: "Tenkasi, Tamil Nadu",
      color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      borderColor: "border-amber-500/20 dark:border-amber-500/30",
      delay: 0.3
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Cinematic Background Auroras */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-violet-600/20 rounded-full blur-[160px] pointer-events-none -z-10"
      />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's transform your ideas into exceptional digital reality."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20 items-start">
          {/* Left Side: Contact Info Details */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] border border-gray-200 dark:border-white/10 relative overflow-hidden group shadow-2xl"
            >
              <h3 className="text-2xl font-black mb-6 leading-tight text-gray-900 dark:text-white">
                Let's build <span className="text-primary italic">something extraordinary.</span>
              </h3>
              <p className="text-gray-600 dark:text-muted-foreground/80 text-lg leading-relaxed font-medium mb-8">
                I'm open to collaborations and new opportunities. Reach out and let's start a conversation.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: info.delay }}
                    className="flex items-center gap-6 group/item"
                  >
                    <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover/item:scale-110 group-hover/item:rotate-6 border ${info.borderColor}`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase  text-gray-500 dark:text-muted-foreground mb-1">{info.label}</h4>
                      <p className="text-sm font-black break-all text-gray-700 dark:text-white/80 group-hover/item:text-primary transition-colors">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-1000" />
            </motion.div>
          </div>

          {/* Right Side: Cinematic Glass Portal Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/90 dark:bg-white/5 backdrop-blur-3xl border border-gray-200 dark:border-white/10 p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden group/form"
          >
            {/* Form Glow Effect */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 dark:text-muted-foreground ml-3">Full Name</label>
                  <div className="relative group/input mt-1">
                    <input
                      type="text"
                      id="name"
                      required
                      maxLength={50}
                      placeholder="Your Name"
                      className="w-full p-3 rounded-[18px] border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 focus:ring-0 focus:border-primary focus:outline-none transition-all duration-500 placeholder:text-gray-400 dark:placeholder:text-muted-foreground/20 font-bold text-gray-900 dark:text-white"
                    />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary group-focus-within/input:w-1/2 transition-all duration-700 rounded-full" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 dark:text-muted-foreground ml-3">Email Address</label>
                  <div className="relative group/input mt-1">
                    <input
                      type="email"
                      id="email"
                      required
                      maxLength={100}
                      placeholder="your.email@example.com"
                      className="w-full p-3 rounded-[18px] border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 focus:ring-0 focus:border-primary focus:outline-none transition-all duration-500 placeholder:text-gray-400 dark:placeholder:text-muted-foreground/20 font-bold text-gray-900 dark:text-white"
                    />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary group-focus-within/input:w-1/2 transition-all duration-700 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 dark:text-muted-foreground ml-3">Your Message</label>
                <div className="relative group/input mt-1">
                  <textarea
                    id="message"
                    rows={4}
                    required
                    maxLength={800}
                    placeholder="Describe your vision..."
                    className="w-full p-3 rounded-[18px] border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 focus:ring-0 focus:border-primary focus:outline-none transition-all duration-500 resize-none placeholder:text-gray-400 dark:placeholder:text-muted-foreground/20 font-bold text-gray-900 dark:text-white"
                  />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary group-focus-within/input:w-1/2 transition-all duration-700 rounded-full" />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-4 py-7 px-10 bg-primary text-white font-black text-lg rounded-[3rem] hover:shadow-[0_20px_60px_-10px] hover:shadow-primary/50 transition-all duration-700 disabled:opacity-70 group/btn relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  {!isSubmitting && <Send size={22} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shine" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}