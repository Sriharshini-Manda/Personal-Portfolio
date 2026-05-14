"use client";

import { motion } from "framer-motion";

import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaPhoneAlt,
    FaPaperPlane,
    FaMapMarkerAlt,
    FaArrowRight,
} from "react-icons/fa";

const contactInfo = [
    {
        icon: FaEnvelope,
        title: "Email",
        value: "manda.sriharshini@gmail.com",
        href: "mailto:manda.sriharshini@gmail.com",
    },

    {
        icon: FaPhoneAlt,
        title: "Phone",
        value: "+91 9529028617",
        href: "tel:+919529028617",
    },

    {
        icon: FaGithub,
        title: "GitHub",
        value: "github.com/Sriharshini-Manda",
        href: "https://github.com/Sriharshini-Manda",
    },

    {
        icon: FaLinkedin,
        title: "LinkedIn",
        value: "linkedin.com/in/sriharshini-manda",
        href: "https://linkedin.com/in/sriharshini-manda",
    },
];

export default function ContactPage() {
    return (
        <main className="relative overflow-hidden bg-[#09090b] text-white">
            {/* Background Effects */}
            <div className="absolute left-[-120px] top-[100px] h-[320px] w-[320px] rounded-full bg-[#7c3aed]/20 blur-[120px]" />

            <div className="absolute bottom-[-120px] right-[-80px] h-[340px] w-[340px] rounded-full bg-[#2563eb]/20 blur-[120px]" />

            <div className="absolute left-[45%] top-[20%] h-[180px] w-[180px] rounded-full bg-[#93c5fd]/10 blur-[100px]" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Hero Section */}
            {/* <section className="relative z-10 px-6 pb-20 pt-36">
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
                        
                        <div className="mb-6 inline-flex rounded-full border border-[#93c5fd]/20 bg-white/5 px-5 py-2 backdrop-blur-md">
                            <span className="text-sm font-medium tracking-wide text-[#93c5fd]">
                                Let’s Connect
                            </span>
                        </div>

                        
                        <h1 className="text-5xl font-black leading-[0.95] text-[#f8fafc] sm:text-6xl md:text-7xl">
                            Let&apos;s Build
                            <br />

                            <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                                Intelligent
                            </span>

                            <br />
                            Experiences Together
                        </h1>

                        
                        <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-[#a1a1aa] md:text-xl">
                            Open to collaborations, AI projects, full stack development,
                            innovative ideas, and opportunities to create impactful digital
                            solutions powered by modern technologies.
                        </p>
                    </motion.div>
                </div>
            </section> */}

            {/* Contact Section */}
            <section className="relative z-10 px-6 py-28">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_520px]">
                    {/* Left Content */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        viewport={{
                            once: true,
                        }}
                    >
                        {/* Heading */}
                        <div>
                            <div className="mb-6 inline-flex rounded-full border border-[#93c5fd]/20 bg-white/5 px-5 py-2 backdrop-blur-md">
                                <span className="text-sm font-medium tracking-wide text-[#93c5fd]">
                                    Contact Information
                                </span>
                            </div>

                            <h2 className="text-4xl font-black leading-tight text-[#f8fafc] md:text-6xl">
                                Ready To Create
                                <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                                    {" "}
                                    The Future
                                </span>
                            </h2>

                            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#a1a1aa]">
                                Whether it’s AI systems, intelligent automation, backend
                                engineering, or modern digital experiences — I’m always
                                excited to collaborate on meaningful and innovative projects.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="mt-14 grid gap-6">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.a
                                        key={index}
                                        href={item.href}
                                        target="_blank"
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
                                            delay: index * 0.1,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        whileHover={{
                                            y: -6,
                                            scale: 1.02,
                                        }}
                                        className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111111]/80 p-6 backdrop-blur-xl"
                                    >
                                        {/* Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/10 via-[#2563eb]/5 to-[#93c5fd]/10 opacity-70 blur-2xl" />

                                        {/* Hover Border */}
                                        <div className="absolute inset-0 rounded-[30px] border border-transparent transition-all duration-500 group-hover:border-[#93c5fd]/20 group-hover:shadow-[0_0_50px_rgba(96,165,250,0.12)]" />

                                        <div className="relative z-10 flex items-center gap-5">
                                            {/* Icon */}
                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] shadow-[0_0_35px_rgba(96,165,250,0.2)]">
                                                <Icon size={24} className="text-white" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <p className="text-sm uppercase tracking-wider text-[#93c5fd]">
                                                    {item.title}
                                                </p>

                                                <h3 className="mt-2 text-lg font-semibold text-[#f8fafc]">
                                                    {item.value}
                                                </h3>
                                            </div>

                                            {/* Arrow */}
                                            <FaArrowRight className="text-[#93c5fd] transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Location Card */}
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
                                duration: 0.8,
                                delay: 0.3,
                            }}
                            viewport={{
                                once: true,
                            }}
                            className="relative mt-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                        >
                            {/* Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/10 via-[#2563eb]/5 to-[#93c5fd]/10" />

                            <div className="relative z-10 flex items-center gap-5">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb]">
                                    <FaMapMarkerAlt size={24} className="text-white" />
                                </div>

                                <div>
                                    <p className="text-sm uppercase tracking-wider text-[#93c5fd]">
                                        Based In
                                    </p>

                                    <h3 className="mt-2 text-2xl font-black text-[#f8fafc]">
                                        Pune, Maharashtra, India
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#111111]/80 p-8 backdrop-blur-xl"
                    >
                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/10 via-[#2563eb]/5 to-[#93c5fd]/10 blur-2xl" />

                        {/* Hover Border */}
                        <div className="absolute inset-0 rounded-[40px] border border-transparent transition-all duration-500 hover:border-[#93c5fd]/20 hover:shadow-[0_0_50px_rgba(96,165,250,0.12)]" />

                        <div className="relative z-10">
                            {/* Header */}
                            <div>
                                <div className="mb-6 inline-flex rounded-full border border-[#93c5fd]/20 bg-white/5 px-5 py-2 backdrop-blur-md">
                                    <span className="text-sm font-medium tracking-wide text-[#93c5fd]">
                                        Send Message
                                    </span>
                                </div>

                                <h2 className="text-4xl font-black text-[#f8fafc]">
                                    Start A Conversation
                                </h2>

                                <p className="mt-5 leading-relaxed text-[#a1a1aa]">
                                    Have an idea, project, or opportunity? Let’s discuss how
                                    we can build something impactful together.
                                </p>
                            </div>

                            {/* Form */}
                            <form className="mt-10 space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="mb-3 block text-sm font-medium text-[#d4d4d8]">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#71717a] focus:border-[#93c5fd]/30 focus:bg-white/10"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="mb-3 block text-sm font-medium text-[#d4d4d8]">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#71717a] focus:border-[#93c5fd]/30 focus:bg-white/10"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="mb-3 block text-sm font-medium text-[#d4d4d8]">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Project discussion"
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#71717a] focus:border-[#93c5fd]/30 focus:bg-white/10"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="mb-3 block text-sm font-medium text-[#d4d4d8]">
                                        Message
                                    </label>

                                    <textarea
                                        rows={6}
                                        placeholder="Tell me about your project or idea..."
                                        className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#71717a] focus:border-[#93c5fd]/30 focus:bg-white/10"
                                    />
                                </div>

                                {/* Button */}
                                <motion.button
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                    whileTap={{
                                        scale: 0.98,
                                    }}
                                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] px-7 py-5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(96,165,250,0.45)]"
                                >
                                    Send Message

                                    <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
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
                        className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
                    >
                        {/* Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/10 via-[#2563eb]/5 to-[#93c5fd]/10" />

                        <div className="relative z-10 text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#93c5fd]">
                                Future Focused Collaboration
                            </p>

                            <h2 className="mt-4 text-4xl font-black text-[#f8fafc] md:text-6xl">
                                Let&apos;s Build The Next
                                <span className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-white bg-clip-text text-transparent">
                                    {" "}
                                    Intelligent Solution
                                </span>
                            </h2>

                            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#a1a1aa]">
                                Passionate about AI innovation, intelligent systems,
                                automation, backend engineering, and creating impactful
                                digital experiences through modern technologies.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}