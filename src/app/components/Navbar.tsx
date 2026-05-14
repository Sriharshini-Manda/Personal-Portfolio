"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Education", href: "/education" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full px-4 py-4">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#151515]/70 px-6 py-4 backdrop-blur-xl shadow-[0_0_30px_rgba(96,165,250,0.12)]"
      >
        {/* Logo */}
        <Link href="/">
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
            <h1 className="bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-[#e5e7eb] bg-clip-text text-2xl font-bold tracking-wide text-transparent">
              Sriharshini
            </h1>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Link
                href={item.href}
                className="group relative text-sm font-medium text-[#e5e7eb] transition-colors duration-300 hover:text-[#93c5fd]"
              >
                {item.name}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-[#a78bfa] to-[#60a5fa] transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}

          {/* Resume Button */}
          <motion.a
            whileHover={{
              scale: 1.04,
              boxShadow: "0px 0px 20px rgba(96,165,250,0.35)",
            }}
            whileTap={{ scale: 0.96 }}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#93c5fd]/20 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] px-5 py-2 text-sm font-semibold text-white transition-all duration-300"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-lg border border-white/10 p-2 text-white md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 flex max-w-7xl flex-col gap-4 rounded-2xl border border-white/10 bg-[#151515]/90 p-6 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-[#e5e7eb] transition-colors duration-300 hover:text-[#93c5fd]"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] px-4 py-3 text-center font-semibold text-white"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}