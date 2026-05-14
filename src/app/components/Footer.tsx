"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const footerLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Education",
    href: "/education",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/Sriharshini-Manda",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/sriharshini-manda",
  },
  {
    icon: FaEnvelope,
    href: "mailto:manda.sriharshini@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#09090b] px-6 pb-10 pt-24 text-white">
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[20px] h-[280px] w-[280px] rounded-full bg-[#7c3aed]/20 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-80px] h-[320px] w-[320px] rounded-full bg-[#2563eb]/20 blur-[120px]" />

      <div className="absolute left-[45%] top-[10%] h-[180px] w-[180px] rounded-full bg-[#93c5fd]/10 blur-[100px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="flex flex-col gap-14 border-b border-white/10 pb-14 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex rounded-full border border-[#93c5fd]/20 bg-white/5 px-5 py-2 backdrop-blur-md">
              <span className="text-sm font-medium tracking-wide text-[#93c5fd]">
                Let’s Build Something Intelligent
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-black leading-tight text-[#f8fafc] md:text-5xl">
              Designing The Future
              <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                {" "}
                With AI & Innovation
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-[#a1a1aa]">
              Passionate about creating intelligent systems, immersive user
              experiences, and scalable digital products powered by modern
              AI technologies and full stack development.
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
            }}
            className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111111]/80 p-8 backdrop-blur-xl"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/10 via-[#2563eb]/5 to-[#93c5fd]/10 opacity-80 blur-2xl" />

            {/* Hover Border */}
            <div className="absolute inset-0 rounded-[30px] border border-transparent transition-all duration-500 group-hover:border-[#93c5fd]/20 group-hover:shadow-[0_0_50px_rgba(96,165,250,0.12)]" />

            <div className="relative z-10">
              <p className="text-sm uppercase tracking-[0.25em] text-[#93c5fd]">
                Available For
              </p>

              <h3 className="mt-4 text-3xl font-black text-[#f8fafc]">
                AI Projects
                <br />
                Full Stack Development
                <br />
                Collaboration
              </h3>

              <Link
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(96,165,250,0.45)]"
              >
                Let’s Connect

                <FaArrowUp className="rotate-45" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-12 py-14 lg:flex-row lg:items-center lg:justify-between">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-4xl font-black text-transparent">
              Sriharshini
            </h2>

            <p className="mt-4 max-w-md text-[#a1a1aa]">
              AI Engineer • Full Stack Developer • GenAI Enthusiast
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-5"
          >
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="rounded-xl border border-transparent px-4 py-2 text-sm font-medium text-[#d4d4d8] transition-all duration-300 hover:border-[#93c5fd]/20 hover:bg-white/5 hover:text-[#93c5fd]"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#d4d4d8] backdrop-blur-md transition-all duration-300 hover:border-[#93c5fd]/30 hover:bg-white/10 hover:text-[#93c5fd]"
                  >
                    <Icon size={20} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 border-t border-white/10 pt-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left"
        >
          {/* Copyright */}
          <p className="text-sm text-[#71717a]">
            © Sriharshini Manda. All rights reserved.
          </p>

          {/* Built With */}
          {/* <div className="flex items-center justify-center gap-2 text-sm text-[#71717a] lg:justify-end">
            <span>Built with</span>

            <FaHeart className="text-[#93c5fd]" />

            <span>Next.js • Tailwind CSS • Framer Motion</span>
          </div> */}
        </motion.div>

        {/* Floating Scroll Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute bottom-10 right-6 md:right-10"
        >
          <Link
            href="#home"
            className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]/80 backdrop-blur-xl transition-all duration-300 hover:border-[#93c5fd]/30 hover:bg-white/10"
          >
            <FaArrowUp className="text-[#93c5fd] transition-transform duration-300 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}