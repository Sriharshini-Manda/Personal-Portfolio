"use client";

import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaSchool,
  FaUniversity,
  FaAward,
  FaBookOpen,
} from "react-icons/fa";

const educationData = [
  {
    year: "2024 - 2026",
    title: "Master of Computer Applications (MCA)",
    institute: "JSPM’s JSCOE, Pune",
    score: "Sem I: 8.04 • Sem II: 7.50 • Sem III: 7.96",
    description:
      "Focused on Artificial Intelligence, Full Stack Development, scalable backend systems, and intelligent software engineering.",
    icon: FaUniversity,
    status: "Ongoing",
  },

  {
    year: "2021 - 2024",
    title: "BBA - Computer Application",
    institute: "Sinhgad College of Commerce (SCOC), Pune",
    score: "Final CGPA: 8.62",
    description:
      "Built a strong foundation in computer applications, programming, databases, analytics, and software development.",
    icon: FaGraduationCap,
    status: "Completed",
  },

  {
    year: "2021",
    title: "Class 12 (CBSE)",
    institute: "The Orbis School, Pune",
    score: "Percentage: 85.4%",
    description:
      "Developed analytical thinking and academic excellence with strong performance in higher secondary education.",
    icon: FaBookOpen,
    status: "Completed",
  },

  {
    year: "2019",
    title: "Class 10 (CBSE)",
    institute: "JSPM’s Jayawant Public School, Pune",
    score: "Percentage: 84%",
    description:
      "Established a strong academic foundation and early interest in technology and innovation.",
    icon: FaSchool,
    status: "Completed",
  },
];

const stats = [
  {
    number: "8.62",
    label: "BBA CGPA",
  },

  {
    number: "85.4%",
    label: "Class 12",
  },

  {
    number: "84%",
    label: "Class 10",
  },

  {
    number: "MCA",
    label: "Ongoing",
  },
];

export default function EducationPage() {
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
                Academic Journey
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[0.95] text-[#f8fafc] sm:text-6xl md:text-7xl">
              Learning Through
              <br />

              <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                Innovation
              </span>

              <br />
              & Growth
            </h1>

            {/* Description */}
            <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-[#a1a1aa] md:text-xl">
              My educational journey reflects a passion for technology,
              problem solving, AI-driven systems, and continuous learning
              through academic excellence and real-world innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
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
                Education Timeline
              </span>
            </div>

            <h2 className="text-4xl font-black text-[#f8fafc] md:text-6xl">
              Timeline Of
              <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                {" "}
                Academic Excellence
              </span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative mt-24">
            {/* Timeline Line */}
            <div className="absolute left-[28px] top-0 h-full w-[2px] bg-gradient-to-b from-[#7c3aed] via-[#2563eb] to-[#93c5fd] md:left-1/2 md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {educationData.map((item, index) => {
                const Icon = item.icon;

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
                      delay: index * 0.15,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className={`relative flex flex-col gap-10 md:flex-row ${
                      index % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Empty Space */}
                    <div className="hidden md:block md:w-1/2" />

                    {/* Timeline Dot */}
                    <div className="absolute left-[28px] top-10 z-20 md:left-1/2 md:-translate-x-1/2">
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                        }}
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-[#93c5fd]/30 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] shadow-[0_0_35px_rgba(96,165,250,0.35)]"
                      >
                        <Icon size={22} className="text-white" />
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}
                      className="ml-20 w-full md:ml-0 md:w-1/2"
                    >
                      <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]/80 p-8 backdrop-blur-xl">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/10 via-[#2563eb]/5 to-[#93c5fd]/10 opacity-70 blur-2xl" />

                        {/* Hover Border */}
                        <div className="absolute inset-0 rounded-[32px] border border-transparent transition-all duration-500 group-hover:border-[#93c5fd]/20 group-hover:shadow-[0_0_50px_rgba(96,165,250,0.12)]" />

                        {/* Floating Blur */}
                        <div className="absolute right-[-40px] top-[-40px] h-28 w-28 rounded-full bg-[#93c5fd]/10 blur-3xl transition-all duration-500 group-hover:bg-[#93c5fd]/20" />

                        {/* Content */}
                        <div className="relative z-10">
                          {/* Year & Status */}
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="rounded-full border border-[#93c5fd]/20 bg-white/5 px-4 py-2 text-sm font-medium text-[#93c5fd]">
                              {item.year}
                            </div>

                            <div className="rounded-full bg-gradient-to-r from-[#7c3aed]/20 to-[#2563eb]/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#93c5fd]">
                              {item.status}
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="mt-8 text-3xl font-black text-[#f8fafc]">
                            {item.title}
                          </h3>

                          {/* Institute */}
                          <p className="mt-3 text-lg font-semibold text-[#93c5fd]">
                            {item.institute}
                          </p>

                          {/* Score */}
                          <div className="mt-5 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
                            <FaAward className="text-[#93c5fd]" />

                            <span className="text-sm font-medium text-[#d4d4d8]">
                              {item.score}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="mt-6 leading-relaxed text-[#a1a1aa]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
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
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/10 via-[#2563eb]/5 to-[#93c5fd]/10" />

            <div className="relative z-10">
              {/* Heading */}
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#93c5fd]">
                  Academic Highlights
                </p>

                <h2 className="mt-4 text-4xl font-black text-[#f8fafc] md:text-6xl">
                  Passion Driven By
                  <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                    {" "}
                    Continuous Learning
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