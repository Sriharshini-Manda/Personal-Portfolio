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
} from "react-icons/fa";

import { type Variants } from "framer-motion";

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
    title: "Programming",
    description:
      "Strong foundation in software development, problem solving, and object-oriented programming.",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "C++", icon: SiCplusplus },
    ],
  },

  {
    title: "AI & GenAI",
    description:
      "Building intelligent systems using modern AI tools, LLMs, and agentic workflows.",
    skills: [
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "Gemini API", icon: FaReact },
      { name: "Llama 3", icon: FaDatabase },
      { name: "Ollama", icon: FaDatabase },
    ],
  },

  {
    title: "Frontend & Backend",
    description:
      "Developing scalable applications with modern UI systems and backend architectures.",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Flask", icon: SiFlask },
    ],
  },

  {
    title: "Databases",
    description:
      "Experience designing and managing structured and NoSQL database systems.",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
    title: "Data Analytics",
    description:
      "Transforming raw data into meaningful insights using analytics and visualization tools.",
    skills: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Tableau", icon: FaDatabase },
    ],
  },

  {
    title: "Developer Tools",
    description:
      "Efficient workflows using version control, notebooks, and modern development environments.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Jupyter", icon: SiJupyter },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#09090b] px-6 py-28 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[80px] h-[320px] w-[320px] rounded-full bg-[#7c3aed]/20 blur-[120px]" />

      <div className="absolute bottom-[-100px] right-[-80px] h-[320px] w-[320px] rounded-full bg-[#2563eb]/20 blur-[120px]" />

      <div className="absolute left-[40%] top-[20%] h-[180px] w-[180px] rounded-full bg-[#93c5fd]/10 blur-[100px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex rounded-full border border-[#93c5fd]/20 bg-white/5 px-5 py-2 backdrop-blur-md">
            <span className="text-sm font-medium tracking-wide text-[#93c5fd]">
              Technical Expertise
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-black leading-tight text-[#f8fafc] md:text-6xl">
            Technologies That Power
            <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
              {" "}
              Innovation
            </span>
          </h2>

          {/* Description */}
          <p className="mt-7 text-lg leading-relaxed text-[#a1a1aa] md:text-xl">
            Combining AI, backend engineering, analytics, and modern
            development tools to build intelligent and scalable digital
            experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111111]/80 p-8 backdrop-blur-xl"
            >
              {/* Animated Glow */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/10 via-[#2563eb]/5 to-[#93c5fd]/10 blur-2xl"
              />

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-[30px] border border-transparent transition-all duration-500 group-hover:border-[#93c5fd]/20 group-hover:shadow-[0_0_50px_rgba(96,165,250,0.12)]" />

              {/* Floating Blur */}
              <div className="absolute right-[-40px] top-[-40px] h-28 w-28 rounded-full bg-[#93c5fd]/10 blur-3xl transition-all duration-500 group-hover:bg-[#93c5fd]/20" />

              {/* Title */}
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-[#f8fafc]">
                  {category.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#a1a1aa]">
                  {category.description}
                </p>
              </div>

              {/* Skills */}
              <div className="relative z-10 mt-8 flex flex-wrap gap-4">
                {category.skills.map((skill, idx) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={idx}
                      whileHover={{
                        scale: 1.08,
                        y: -4,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                      }}
                      className="group/skill flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-[#93c5fd]/30 hover:bg-white/10"
                    >
                      <Icon
                        size={20}
                        className="text-[#93c5fd] transition-transform duration-300 group-hover/skill:rotate-6"
                      />

                      <span className="text-sm font-medium text-[#f8fafc]">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
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
          ))}
        </motion.div>

        {/* Bottom Premium Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/10 via-[#2563eb]/5 to-[#93c5fd]/10" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Left Content */}
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#93c5fd]">
                Future-Focused Development
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight text-[#f8fafc] md:text-5xl">
                Building Intelligent Systems
                <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                  {" "}
                  With Modern Technologies
                </span>
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-[#a1a1aa]">
                Passionate about AI-driven applications, scalable backend
                systems, immersive user interfaces, and data-powered
                solutions that solve real-world problems.
              </p>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-5">
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
                    scale: 1.05,
                  }}
                  className="rounded-2xl border border-white/10 bg-[#111111]/70 p-6 text-center backdrop-blur-md"
                >
                  <h4 className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-4xl font-black text-transparent">
                    {stat.number}
                  </h4>

                  <p className="mt-2 text-xs uppercase tracking-widest text-[#a1a1aa]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}