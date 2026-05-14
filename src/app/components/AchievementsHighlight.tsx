"use client";

import { motion } from "framer-motion";
import { type Variants } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaCertificate,
  FaArrowRight,
} from "react-icons/fa";

const achievements = [
  {
    icon: FaTrophy,
    title: "National Rank 28",
    subtitle: "NAIO - TalentSprint & Accenture",
    description:
      "Secured National Rank 28 in a nationwide AI and innovation assessment showcasing technical excellence and analytical problem-solving.",
    gradient: "from-[#7c3aed] to-[#2563eb]",
  },
  {
    icon: FaMedal,
    title: "State Rank 3",
    subtitle: "Maharashtra Ranking",
    description:
      "Achieved Maharashtra State Rank 3 with outstanding performance in advanced AI and innovation-focused evaluations.",
    gradient: "from-[#2563eb] to-[#06b6d4]",
  },
  {
    icon: FaCertificate,
    title: "10+ Certifications",
    subtitle: "AI, ML & Full Stack Development",
    description:
      "Certified in GenAI, Machine Learning, SQL, Agile, GitHub, Java, Data Analytics, and Full Stack technologies.",
    gradient: "from-[#9333ea] to-[#3b82f6]",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function AchievementsHighlight() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[#09090b] px-6 py-28 text-white"
    >
      {/* Background Effects */}
      <div className="absolute left-[-120px] top-[80px] h-[340px] w-[340px] rounded-full bg-[#7c3aed]/20 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-[#2563eb]/20 blur-[120px]" />

      <div className="absolute left-[40%] top-[20%] h-[200px] w-[200px] rounded-full bg-[#93c5fd]/10 blur-[100px]" />

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
          <div className="mb-6 inline-flex items-center rounded-full border border-[#93c5fd]/20 bg-white/5 px-5 py-2 backdrop-blur-md">
            <span className="text-sm font-medium tracking-wide text-[#93c5fd]">
              Achievements & Recognition
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-black leading-tight text-[#f8fafc] md:text-6xl">
            Excellence Through
            <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
              {" "}
              Innovation
            </span>
          </h2>

          {/* Description */}
          <p className="mt-7 text-lg leading-relaxed text-[#a1a1aa] md:text-xl">
            A journey fueled by continuous learning, AI innovation, and
            real-world development experiences that transform ideas into
            impactful digital solutions.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111111]/80 p-8 backdrop-blur-xl"
              >
                {/* Animated Glow */}
                <motion.div
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 blur-2xl`}
                />

                {/* Hover Border Glow */}
                <div className="absolute inset-0 rounded-[30px] border border-transparent transition-all duration-500 group-hover:border-[#93c5fd]/20 group-hover:shadow-[0_0_50px_rgba(96,165,250,0.12)]" />

                {/* Top Blur Circle */}
                <div className="absolute right-[-40px] top-[-40px] h-28 w-28 rounded-full bg-[#93c5fd]/10 blur-3xl transition-all duration-500 group-hover:bg-[#93c5fd]/20" />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 6,
                    scale: 1.08,
                  }}
                  className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.gradient} text-white shadow-lg`}
                >
                  <Icon size={28} />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-3xl font-black text-[#f8fafc]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-[#93c5fd]">
                    {item.subtitle}
                  </p>

                  <p className="mt-6 leading-relaxed text-[#a1a1aa]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Button */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="relative z-10 mt-8 flex items-center gap-3 text-sm font-semibold text-[#93c5fd]"
                >
                  <span>Explore More</span>

                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.div>

                {/* Floating Animated Dot */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                  className="absolute bottom-6 right-6 h-3 w-3 rounded-full bg-[#93c5fd]"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-3"
        >
          {[
            {
              number: "28",
              label: "National Rank",
            },
            {
              number: "3",
              label: "State Rank",
            },
            {
              number: "10+",
              label: "Professional Certifications",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.04,
              }}
              className="rounded-2xl border border-white/5 bg-[#111111]/70 p-6 text-center transition-all duration-300 hover:border-[#93c5fd]/20"
            >
              <h3 className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-5xl font-black text-transparent">
                {stat.number}
              </h3>

              <p className="mt-3 text-sm uppercase tracking-widest text-[#a1a1aa]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}