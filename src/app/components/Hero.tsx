"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax background movement
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#09090b] px-6 pb-20 pt-32 text-white flex items-center"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: y1 }} className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[#7c3aed]/10 blur-[140px]" />
        <motion.div style={{ y: y2 }} className="absolute bottom-[-5%] right-[-5%] h-[500px] w-[500px] rounded-full bg-[#2563eb]/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        
        {/* Left Content */}
        <motion.div variants={staggerContainer} initial="initial" animate="animate">
          <motion.div variants={fadeInUp} className="mb-8 w-fit">
            <div className="relative flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#93c5fd] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#93c5fd]"></span>
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#93c5fd]">Open for Collaborations</p>
            </div>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl font-extrabold tracking-tight text-[#f8fafc] sm:text-7xl lg:text-8xl">
            Building 
            <span className="block italic font-light text-[#a1a1aa]">Intelligent</span>
            <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">Digital</span> Experiences
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            Hi, I&apos;m <span className="text-white font-medium">Sriharshini</span>. I specialize in weaving GenAI intelligence into seamless, high-performance full-stack applications.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="#projects" className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:scale-105">
              <span>View Projects</span>
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#contact" className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold transition-all hover:bg-white/10">
              Get in touch
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-4">
            {[
              { icon: <FaGithub />, href: "https://github.com/Sriharshini-Manda" },
              { icon: <FaLinkedin />, href: "https://linkedin.com/in/sriharshini-manda" },
              { icon: <FaEnvelope />, href: "mailto:manda.sriharshini@gmail.com" }
            ].map((social, i) => (
              <Link key={i} href={social.href} target="_blank" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-white/5 text-zinc-400 transition-all hover:border-[#93c5fd]/50 hover:text-[#93c5fd] hover:scale-110">
                {social.icon}
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Visuals (Fixed Overlapping) */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative flex items-center justify-center lg:justify-end">
          <div className="relative">
            
            {/* Background Glow behind everything */}
            <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb] opacity-10 blur-3xl" />
            
            {/* Main Image Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-2xl"
            >
              <div className="relative h-[450px] w-[320px] overflow-hidden rounded-[22px]">
                <Image
                  src="/profile/profile2.png"
                  alt="Sriharshini"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Floating Card 1 - Shifted and Elevated */}
            <motion.div
              animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-16 top-16 z-30 hidden lg:block"
            >
              <div className="rounded-2xl border border-white/20 bg-zinc-900/90 p-4 shadow-2xl backdrop-blur-2xl transition-transform hover:scale-110">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Current Focus</p>
                </div>
                <h3 className="mt-1 text-sm font-bold text-white">LLM Architectures</h3>
              </div>
            </motion.div>

            {/* Floating Card 2 - Shifted and Elevated */}
            <motion.div
              animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-10 bottom-12 z-30 hidden lg:block"
            >
              <div className="rounded-2xl border border-white/20 bg-zinc-900/90 p-4 shadow-2xl backdrop-blur-2xl transition-transform hover:scale-110">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#93c5fd]">Innovation</p>
                <h3 className="mt-1 text-sm font-bold text-white">Agentic Systems</h3>
              </div>
            </motion.div>

            {/* Subtle Rotating Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 z-10 rounded-full border border-white/5 border-dashed"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}