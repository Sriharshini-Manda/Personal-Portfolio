"use client";

import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaRocket,
  FaServer,
  FaUsers,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

const experiences = [
  {
    company: "Cerebrospark Innovations Pvt. Ltd.",
    role: "Project Based Intern",
    duration: "Jan 2026 — Mar 2026",
    location: "Pune, India",
    icon: FaRocket,
    gradient: "from-[#7c3aed] to-[#2563eb]",
    description:
      "Worked on real-world drone technology and software solutions while collaborating with cross-functional engineering teams.",
    highlights: [
      "Contributed to real-world industry projects in drone technology.",
      "Worked as a key developer in project execution and implementation.",
      "Gained hands-on experience in system design and development workflows.",
      "Collaborated with manufacturing and design teams.",
      "Enhanced problem-solving and technical decision-making skills.",
    ],
    technologies: [
      "System Design",
      "Software Development",
      "Problem Solving",
      "Cross Functional Collaboration",
    ],
  },

  {
    company: "JSCOE Association for Developing Entrepreneurs (JADE)",
    role: "Full Stack Backend Developer & Event Organizer Intern",
    duration: "Sep 2025 — Present",
    location: "Pune, India",
    icon: FaServer,
    gradient: "from-[#2563eb] to-[#06b6d4]",
    description:
      "Developed and deployed backend systems for hackathon management while coordinating event operations and digital workflows.",
    highlights: [
      "Developed the official Hackathon Portal for JSCOE 2k26.",
      "Configured frontend, backend, and database systems.",
      "Deployed applications on institute servers.",
      "Handled participant and organizer technical queries.",
      "Contributed to event management and social media coordination.",
    ],
    technologies: [
      "Full Stack",
      "Backend Systems",
      "Deployment",
      "Event Operations",
    ],
  },
];

const stats = [
  {
    number: "2+",
    label: "Internships",
  },

  {
    number: "Real",
    label: "Industry Exposure",
  },

  {
    number: "AI",
    label: "Focused Development",
  },

  {
    number: "Full Stack",
    label: "Engineering",
  },
];

export default function ExperiencePage() {
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
                Professional Experience
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[0.95] text-[#f8fafc] sm:text-6xl md:text-7xl">
              Building Through
              <br />

              <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                Real World
              </span>

              <br />
              Innovation
            </h1>

            {/* Description */}
            <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-[#a1a1aa] md:text-xl">
              Hands-on industry experience working on AI-driven systems,
              backend architectures, software deployment, and collaborative
              engineering solutions across real-world environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-7xl space-y-20">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
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
                className="relative"
              >
                {/* Floating Background */}
                <div
                  className={`absolute inset-0 rounded-[40px] bg-gradient-to-r ${experience.gradient} opacity-10 blur-[80px]`}
                />

                {/* Main Container */}
                <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#111111]/80 backdrop-blur-xl">
                  {/* Top Decorative Strip */}
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${experience.gradient}`}
                  />

                  <div className="grid gap-10 p-10 lg:grid-cols-[320px_1fr]">
                    {/* Left Panel */}
                    <div className="relative">
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#7c3aed]/10 via-[#2563eb]/5 to-[#93c5fd]/10 blur-2xl" />

                      <div className="relative rounded-[32px] border border-white/10 bg-[#0f0f11]/90 p-8">
                        {/* Icon */}
                        <motion.div
                          whileHover={{
                            rotate: 8,
                            scale: 1.08,
                          }}
                          className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r ${experience.gradient} shadow-[0_0_35px_rgba(96,165,250,0.25)]`}
                        >
                          <Icon size={34} className="text-white" />
                        </motion.div>

                        {/* Company */}
                        <h2 className="mt-8 text-3xl font-black leading-tight text-[#f8fafc]">
                          {experience.company}
                        </h2>

                        {/* Role */}
                        <p className="mt-4 text-lg font-semibold text-[#93c5fd]">
                          {experience.role}
                        </p>

                        {/* Duration */}
                        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
                          <FaBriefcase className="text-[#93c5fd]" />

                          <span className="text-sm font-medium text-[#d4d4d8]">
                            {experience.duration}
                          </span>
                        </div>

                        {/* Location */}
                        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-[#a1a1aa] backdrop-blur-md">
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    {/* Right Panel */}
                    <div className="relative">
                      {/* Description */}
                      <motion.div
                        whileHover={{
                          y: -4,
                        }}
                        className="rounded-[32px] border border-white/10 bg-[#0f0f11]/90 p-8"
                      >
                        {/* Heading */}
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb]">
                            <FaCode size={22} className="text-white" />
                          </div>

                          <div>
                            <h3 className="text-2xl font-black text-[#f8fafc]">
                              Experience Overview
                            </h3>

                            <p className="text-sm text-[#93c5fd]">
                              Real-world technical exposure
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="mt-8 text-lg leading-relaxed text-[#a1a1aa]">
                          {experience.description}
                        </p>

                        {/* Highlights */}
                        <div className="mt-10 grid gap-5">
                          {experience.highlights.map(
                            (highlight, highlightIndex) => (
                              <motion.div
                                key={highlightIndex}
                                whileHover={{
                                  x: 6,
                                }}
                                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:border-[#93c5fd]/20 hover:bg-white/10"
                              >
                                {/* Dot */}
                                <div className="mt-2 h-3 w-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#93c5fd]" />

                                <p className="leading-relaxed text-[#d4d4d8]">
                                  {highlight}
                                </p>
                              </motion.div>
                            )
                          )}
                        </div>

                        {/* Technologies */}
                        <div className="mt-10">
                          <div className="mb-5 flex items-center gap-3">
                            <FaUsers className="text-[#93c5fd]" />

                            <h4 className="text-lg font-bold text-[#f8fafc]">
                              Key Areas
                            </h4>
                          </div>

                          <div className="flex flex-wrap gap-4">
                            {experience.technologies.map((tech, idx) => (
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
                        </div>

                        {/* CTA */}
                        <motion.div
                          whileHover={{
                            x: 4,
                          }}
                          className="mt-10 flex items-center gap-3 text-sm font-semibold text-[#93c5fd]"
                        >
                          <span>Professional Growth Journey</span>

                          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
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
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            {/* Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/10 via-[#2563eb]/5 to-[#93c5fd]/10" />

            <div className="relative z-10">
              {/* Heading */}
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#93c5fd]">
                  Industry Experience
                </p>

                <h2 className="mt-4 text-4xl font-black text-[#f8fafc] md:text-6xl">
                  Real Experience In
                  <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                    {" "}
                    Modern Development
                  </span>
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#a1a1aa]">
                  Continuously learning through hands-on development,
                  collaborative engineering, intelligent systems, and
                  real-world software innovation.
                </p>
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