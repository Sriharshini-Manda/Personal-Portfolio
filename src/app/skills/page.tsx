"use client";

import { motion } from "framer-motion";

import {
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDatabase,
  FaCode,
  FaServer,
  FaBrain,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiTailwindcss,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiHuggingface,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: FaCode,
    description:
      "Strong programming fundamentals focused on scalable application development and problem solving.",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "C++", icon: SiCplusplus },
    ],
  },

  {
    title: "AI & GenAI",
    icon: FaBrain,
    description:
      "Developing intelligent systems using modern LLMs, AI frameworks, and automation workflows.",
    skills: [
      { name: "Gemini API", icon: FaReact },
      { name: "Llama 3", icon: FaDatabase },
      { name: "Ollama", icon: FaDatabase },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "Agentic AI", icon: FaBrain },
    ],
  },

  {
    title: "Frontend & Backend",
    icon: FaServer,
    description:
      "Building scalable full stack applications with modern UI systems and backend architectures.",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Flask", icon: SiFlask },
      { name: "REST APIs", icon: FaServer },
    ],
  },

  {
    title: "Databases",
    icon: FaDatabase,
    description:
      "Experience designing, managing, and integrating relational and NoSQL database systems.",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
    title: "Data Analytics",
    icon: FaDatabase,
    description:
      "Using analytics and visualization tools to extract insights and support data-driven decisions.",
    skills: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Power BI", icon: FaDatabase },
      { name: "Tableau", icon: FaDatabase },
      { name: "SQL", icon: FaDatabase },
    ],
  },

  {
    title: "Developer Tools",
    icon: FaGitAlt,
    description:
      "Efficient development workflows using modern tools, notebooks, version control, and IDEs.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Jupyter", icon: SiJupyter },
      { name: "VS Code", icon: FaCode },
    ],
  },
];

const marqueeSkills = [
  "Python",
  "GenAI",
  "Machine Learning",
  "Full Stack",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Flask",
  "REST APIs",
  "Gemini API",
  "Llama 3",
  "Agentic AI",
  "GitHub",
  "Data Analytics",
];

export default function SkillsPage() {
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
        <div className="mx-auto max-w-7xl">
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
            className="mx-auto max-w-4xl text-center"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex rounded-full border border-[#93c5fd]/20 bg-white/5 px-5 py-2 backdrop-blur-md">
              <span className="text-sm font-medium tracking-wide text-[#93c5fd]">
                Technical Skills & Expertise
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[0.95] text-[#f8fafc] sm:text-6xl md:text-7xl">
              Technologies
              <br />

              <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                Powering
              </span>

              <br />
              Innovation
            </h1>

            {/* Description */}
            <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-[#a1a1aa] md:text-xl">
              Combining AI, full stack engineering, modern backend systems,
              and data analytics to build scalable, intelligent, and impactful
              digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infinite Marquee */}
      <section className="relative z-10 overflow-hidden border-y border-white/10 bg-white/5 py-6 backdrop-blur-xl">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
            <div
              key={index}
              className="mx-8 flex items-center gap-3 text-lg font-semibold text-[#d4d4d8]"
            >
              <div className="h-2 w-2 rounded-full bg-[#93c5fd]" />

              {skill}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Skills Grid */}
      <section className="relative z-10 px-6 py-28">
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
                Expertise Areas
              </span>
            </div>

            <h2 className="text-4xl font-black text-[#f8fafc] md:text-6xl">
              Building With
              <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                {" "}
                Modern Technologies
              </span>
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category, index) => {
              const MainIcon = category.icon;

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

                  {/* Floating Blur */}
                  <div className="absolute right-[-40px] top-[-40px] h-28 w-28 rounded-full bg-[#93c5fd]/10 blur-3xl transition-all duration-500 group-hover:bg-[#93c5fd]/20" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white shadow-lg">
                      <MainIcon size={28} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-8 text-3xl font-black text-[#f8fafc]">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-5 leading-relaxed text-[#a1a1aa]">
                      {category.description}
                    </p>

                    {/* Skills */}
                    <div className="mt-8 flex flex-wrap gap-4">
                      {category.skills.map((skill, idx) => {
                        const Icon = skill.icon;

                        return (
                          <motion.div
                            key={idx}
                            whileHover={{
                              scale: 1.06,
                              y: -4,
                            }}
                            className="group/skill flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-[#93c5fd]/30 hover:bg-white/10"
                          >
                            <Icon
                              size={18}
                              className="text-[#93c5fd] transition-transform duration-300 group-hover/skill:rotate-6"
                            />

                            <span className="text-sm font-medium text-[#f8fafc]">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
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

            <div className="relative z-10">
              {/* Heading */}
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#93c5fd]">
                  Future-Focused Engineering
                </p>

                <h2 className="mt-4 text-4xl font-black text-[#f8fafc] md:text-6xl">
                  Passionate About
                  <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                    {" "}
                    AI & Scalable Systems
                  </span>
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#a1a1aa]">
                  Continuously learning and building with modern AI
                  technologies, intelligent automation systems, backend
                  architectures, and immersive user experiences.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    number: "15+",
                    label: "Technologies",
                  },

                  {
                    number: "10+",
                    label: "Certifications",
                  },

                  {
                    number: "2+",
                    label: "Internships",
                  },

                  {
                    number: "AI",
                    label: "Focused",
                  },
                ].map((stat, index) => (
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