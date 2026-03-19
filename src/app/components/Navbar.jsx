"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/app/assets/logo.jpg";

const navLinks = ["Home", "About", "Services", "Trainers", "Pricing", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/95 shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <Image src={logo} alt="FitLife Gym" width={38} height={38} className="rounded-full object-cover" />
            <span className="font-heading text-xl font-bold text-gold tracking-widest">FIT GYM</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-sm text-off-white/80 hover:text-gold transition-colors duration-200 tracking-wider uppercase"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden lg:block bg-gold hover:bg-gold-hover text-dark font-heading font-bold text-sm px-6 py-3 tracking-widest uppercase transition-colors duration-200"
          >
            Join Now
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-off-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="lg:hidden bg-dark-brown border-t border-gold/20 px-4 py-6 space-y-1"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block font-body text-off-white/80 hover:text-gold transition-colors py-3 uppercase tracking-wider text-sm border-b border-white/5 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="block bg-gold text-dark font-heading font-bold text-center py-3 tracking-widest uppercase mt-4"
            onClick={() => setIsOpen(false)}
          >
            Join Now
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
