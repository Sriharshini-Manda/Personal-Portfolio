"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaArrowRight,
  FaRobot,
  FaMicrophone,
  FaBrain,
  FaDatabase,
} from "react-icons/fa";

const featuredProjects = [
  {
    title: "Enhanzo",
    category: "AI Recommendation System",
    description:
      "An intelligent AI-powered café recommendation platform that uses survey-based behavioral analysis and personalized recommendation workflows to deliver tailored user experiences.",
    longDescription:
      "Designed using GenAI concepts, data collection workflows, and intelligent recommendation logic to create personalized café suggestions based on user preferences and behavioral insights.",
    image: "/projects/enhanzo.png",
    icon: FaBrain,
    technologies: [
      "Flask",
      "GenAI",
      "Agentic AI",
      "Python",
      "MongoDB",
    ],
    github: "https://github.com/Sriharshini-Manda/enhanzo",
    gradient: "from-[#7c3aed] to-[#2563eb]",
  },

  {
    title: "AI Voice Assistant",
    category: "Desktop Automation System",
    description:
      "A smart AI voice assistant capable of automating essential PC tasks using voice commands and contextual AI-driven interactions.",
    longDescription:
      "Integrated Gemini API and local LLM inference with Ollama to build an intelligent desktop assistant capable of task automation, contextual responses, and productivity enhancement.",
    image: "/projects/voice-assistant.png",
    icon: FaMicrophone,
    technologies: [
      "Python",
      "Gemini API",
      "Ollama",
      "LLM",
      "Automation",
    ],
    github:
      "https://github.com/Sriharshini-Manda/Gemini-supported-Desktop-AI-voice-Assistant",
    gradient: "from-[#2563eb] to-[#06b6d4]",
  },
];

const additionalProjects = [
  {
    title: "Hackathon Portal",
    description:
      "Developed and deployed a scalable hackathon portal for event registrations, participant management, and backend operations.",
    icon: FaDatabase,
  },

  {
    title: "AI Workflow Systems",
    description:
      "Experimented with Agentic AI workflows, automation pipelines, and intelligent task execution systems.",
    icon: FaRobot,
  },

  {
    title: "Backend API Systems",
    description:
      "Built scalable REST API systems and backend architectures for modern web applications.",
    icon: FaBrain,
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative overflow-hidden bg-[#09090b] text-white">
      {/* Background Effects */}
      <div className="absolute left-[-120px] top-[100px] h-[320px] w-[320px] rounded-full bg-[#7c3aed]/20 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-80px] h-[340px] w-[340px] rounded-full bg-[#2563eb]/20 blur-[120px]" />

      <div className="absolute left-[45%] top-[20%] h-[180px] w-[180px] rounded-full bg-[#93c5fd]/10 blur-[100px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Hero Section */}
      <section className="relative z-10 px-6 pb-20 pt-36">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mx-auto max-w-4xl"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex rounded-full border border-[#93c5fd]/20 bg-white/5 px-5 py-2 backdrop-blur-md">
              <span className="text-sm font-medium tracking-wide text-[#93c5fd]">
                Featured Projects
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
              Digital Products
            </h1>

            {/* Description */}
            <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-[#a1a1aa] md:text-xl">
              A collection of AI-driven systems, full stack applications,
              backend architectures, and intelligent automation projects
              focused on solving real-world challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex rounded-full border border-[#93c5fd]/20 bg-white/5 px-5 py-2 backdrop-blur-md">
              <span className="text-sm font-medium tracking-wide text-[#93c5fd]">
                Real World Development
              </span>
            </div>

            <h2 className="text-4xl font-black text-[#f8fafc] md:text-6xl">
              Featured
              <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                {" "}
                Case Studies
              </span>
            </h2>
          </motion.div>

          {/* Project Cards */}
          <div className="mt-20 space-y-16">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    index % 2 !== 0 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image Section */}
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className={`group relative ${
                      index % 2 !== 0 ? "lg:col-start-2" : ""
                    }`}
                  >
                    {/* Glow */}
                    <div
                      className={`absolute inset-0 rounded-[36px] bg-gradient-to-r ${project.gradient} opacity-20 blur-[80px]`}
                    />

                    {/* Card */}
                    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#111111]/80 p-4 backdrop-blur-xl">
                      <div className="relative h-[420px] overflow-hidden rounded-[28px]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />

                        {/* Floating Icon */}
                        <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#111111]/80 backdrop-blur-xl">
                          <Icon size={28} className="text-[#93c5fd]" />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    whileHover={{
                      y: -4,
                    }}
                    className={`${
                      index % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    {/* Category */}
                    <div className="inline-flex rounded-full border border-[#93c5fd]/20 bg-white/5 px-5 py-2 backdrop-blur-md">
                      <span className="text-sm font-medium tracking-wide text-[#93c5fd]">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-8 text-5xl font-black leading-tight text-[#f8fafc]">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-6 text-lg leading-relaxed text-[#a1a1aa]">
                      {project.description}
                    </p>

                    <p className="mt-6 leading-relaxed text-[#71717a]">
                      {project.longDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mt-8 flex flex-wrap gap-4">
                      {project.technologies.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{
                            scale: 1.06,
                            y: -3,
                          }}
                          className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-[#f8fafc] backdrop-blur-md transition-all duration-300 hover:border-[#93c5fd]/30 hover:bg-white/10"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-5">
                      <Link
                        href={project.github}
                        target="_blank"
                        className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(96,165,250,0.45)]"
                      >
                        <FaGithub />

                        View Project

                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>

                      <button className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-[#f8fafc] backdrop-blur-md transition-all duration-300 hover:border-[#93c5fd]/30 hover:bg-white/10">
                        Live Preview
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Projects */}
      <section className="relative z-10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex rounded-full border border-[#93c5fd]/20 bg-white/5 px-5 py-2 backdrop-blur-md">
              <span className="text-sm font-medium tracking-wide text-[#93c5fd]">
                Additional Work
              </span>
            </div>

            <h2 className="text-4xl font-black text-[#f8fafc] md:text-6xl">
              More
              <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                {" "}
                Innovation
              </span>
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {additionalProjects.map((project, index) => {
              const Icon = project.icon;

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
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]/80 p-8 backdrop-blur-xl"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/10 via-[#2563eb]/5 to-[#93c5fd]/10 opacity-70 blur-2xl" />

                  {/* Hover Border */}
                  <div className="absolute inset-0 rounded-[32px] border border-transparent transition-all duration-500 group-hover:border-[#93c5fd]/20 group-hover:shadow-[0_0_50px_rgba(96,165,250,0.12)]" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white shadow-lg">
                      <Icon size={26} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-8 text-3xl font-black text-[#f8fafc]">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-5 leading-relaxed text-[#a1a1aa]">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <motion.div
                    animate={{
                      x: [0, 20, 0],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute bottom-6 right-6 h-2 w-16 rounded-full bg-gradient-to-r from-[#7c3aed] via-[#2563eb] to-[#93c5fd]"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="relative z-10 px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/10 via-[#2563eb]/5 to-[#93c5fd]/10" />

            <div className="relative z-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#93c5fd]">
                Future Focused Development
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#f8fafc] md:text-6xl">
                Building The Next Generation Of
                <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                  {" "}
                  Intelligent Systems
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#a1a1aa]">
                Passionate about AI innovation, backend engineering,
                intelligent automation, and creating immersive digital
                experiences that solve real-world challenges.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}