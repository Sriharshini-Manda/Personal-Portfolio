"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaBrain,
  FaCode,
  FaRobot,
  FaDatabase,
  FaArrowRight,
} from "react-icons/fa";

const highlights = [
  {
    icon: FaRobot,
    title: "AI & GenAI",
    description:
      "Building intelligent systems using Gemini API, Llama 3, Ollama, Hugging Face, and Agentic AI workflows.",
  },

  {
    icon: FaCode,
    title: "Full Stack Development",
    description:
      "Creating scalable web applications with modern frontend technologies, APIs, and backend architectures.",
  },

  {
    icon: FaDatabase,
    title: "Data Analytics",
    description:
      "Transforming data into meaningful insights using Python, SQL, Tableau, Power BI, and visualization tools.",
  },

  {
    icon: FaBrain,
    title: "Problem Solving",
    description:
      "Passionate about solving real-world challenges through intelligent automation and innovative digital solutions.",
  },
];

const stats = [
  {
    number: "10+",
    label: "Certifications",
  },

  {
    number: "2+",
    label: "Internships",
  },

  {
    number: "15+",
    label: "Technologies",
  },

  {
    number: "AI",
    label: "Focused",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-[#09090b] text-white">
      {/* Background Effects */}
      <div className="absolute left-[-120px] top-[100px] h-[320px] w-[320px] rounded-full bg-[#7c3aed]/20 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-80px] h-[340px] w-[340px] rounded-full bg-[#2563eb]/20 blur-[120px]" />

      <div className="absolute left-[45%] top-[20%] h-[180px] w-[180px] rounded-full bg-[#93c5fd]/10 blur-[100px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Hero Section */}
      <section className="relative z-10 px-6 pb-24 pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex rounded-full border border-[#93c5fd]/20 bg-white/5 px-5 py-2 backdrop-blur-md">
              <span className="text-sm font-medium tracking-wide text-[#93c5fd]">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[0.95] text-[#f8fafc] sm:text-6xl md:text-7xl">
              Building
              <br />

              <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                Intelligent
              </span>

              <br />
              Digital Solutions
            </h1>

            {/* Description */}
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#a1a1aa]">
              Hi, I&apos;m Sriharshini — an MCA student, AI-focused developer,
              and technology enthusiast passionate about creating modern
              digital experiences powered by intelligent systems and scalable
              backend architectures.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#a1a1aa]">
              My journey revolves around AI, GenAI, full stack development,
              automation systems, and real-world software solutions that
              combine creativity, innovation, and impactful problem-solving.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <motion.a
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href="#projects"
                className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(96,165,250,0.45)]"
              >
                Explore Projects

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href="#contact"
                className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-[#f8fafc] backdrop-blur-md transition-all duration-300 hover:border-[#93c5fd]/30 hover:bg-white/10"
              >
                Let&apos;s Connect
              </motion.a>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-r from-[#7c3aed]/20 to-[#2563eb]/20 blur-[120px]" />

            {/* Rotating Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[400px] w-[400px] rounded-full border border-[#93c5fd]/10"
            />

            {/* Main Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]/80 p-3 shadow-[0_0_50px_rgba(96,165,250,0.15)] backdrop-blur-xl"
            >
              <div className="relative h-[500px] w-[360px] overflow-hidden rounded-[24px]">
                <Image
                  src="/profile/profile2.png"
                  alt="Sriharshini"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute left-[-10px] top-[60px] hidden rounded-2xl border border-white/10 bg-[#111111]/80 px-5 py-4 backdrop-blur-xl lg:block"
            >
              <p className="text-sm text-[#a1a1aa]">Focused On</p>

              <h3 className="mt-1 text-lg font-semibold text-[#f8fafc]">
                AI + Full Stack
              </h3>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-[40px] right-[-10px] hidden rounded-2xl border border-white/10 bg-[#111111]/80 px-5 py-4 backdrop-blur-xl lg:block"
            >
              <p className="text-sm text-[#a1a1aa]">
                Currently Exploring
              </p>

              <h3 className="mt-1 text-lg font-semibold text-[#f8fafc]">
                Agentic AI Systems
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex rounded-full border border-[#93c5fd]/20 bg-white/5 px-5 py-2 backdrop-blur-md">
              <span className="text-sm font-medium tracking-wide text-[#93c5fd]">
                What I Do
              </span>
            </div>

            <h2 className="text-4xl font-black text-[#f8fafc] md:text-6xl">
              Transforming Ideas Into
              <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                {" "}
                Intelligent Experiences
              </span>
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.7,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111111]/80 p-8 backdrop-blur-xl"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/10 via-[#2563eb]/5 to-[#93c5fd]/10 opacity-70 blur-2xl" />

                  {/* Hover Border */}
                  <div className="absolute inset-0 rounded-[30px] border border-transparent transition-all duration-500 group-hover:border-[#93c5fd]/20 group-hover:shadow-[0_0_50px_rgba(96,165,250,0.12)]" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white shadow-lg">
                      <Icon size={28} />
                    </div>

                    {/* Content */}
                    <h3 className="mt-8 text-2xl font-black text-[#f8fafc]">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-relaxed text-[#a1a1aa]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/10 via-[#2563eb]/5 to-[#93c5fd]/10" />

            <div className="relative z-10">
              {/* Heading */}
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#93c5fd]">
                  Journey & Growth
                </p>

                <h2 className="mt-4 text-4xl font-black text-[#f8fafc] md:text-5xl">
                  Passion Driven By
                  <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                    {" "}
                    Innovation
                  </span>
                </h2>
              </div>

              {/* Stats */}
              <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -6,
                      scale: 1.03,
                    }}
                    className="rounded-3xl border border-white/10 bg-[#111111]/70 p-8 text-center backdrop-blur-md"
                  >
                    <h3 className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-5xl font-black text-transparent">
                      {stat.number}
                    </h3>

                    <p className="mt-4 text-sm uppercase tracking-widest text-[#a1a1aa]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}