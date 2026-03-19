"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import heroBg from "@/app/assets/hero-bg.jpg";

const headingLines = [
  { text: "Transform Your", color: "text-off-white" },
  { text: "Body.", color: "text-off-white" },
  { text: "Transform Your", color: "text-gold" },
  { text: "Life.", color: "text-gold" },
];

const stats = [
  { value: 5000, suffix: "+", label: "Members" },
  { value: 50, suffix: "+", label: "Classes" },
  { value: 12, suffix: "+", label: "Years" },
  { value: 4.9, suffix: "", label: "Rating", decimal: true },
];

function Counter({ value, suffix, decimal }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(decimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value, decimal]);

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src={heroBg} alt="Gym interior" fill sizes="100vw" className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-dark/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-heading font-bold uppercase leading-none mb-8">
            {headingLines.map((line, i) => (
              <motion.span
                key={i}
                className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide ${line.color}`}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              >
                {line.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="font-body text-off-white/70 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Push your limits, build strength, and achieve the body you&apos;ve
            always dreamed of — with expert guidance and world-class facilities.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <a
              href="#contact"
              className="bg-gold hover:bg-gold-hover text-dark font-heading font-bold px-10 py-4 text-sm tracking-widest uppercase transition-colors duration-200"
            >
              Join Now
            </a>
            <a
              href="#about"
              className="border-2 border-off-white text-off-white hover:border-gold hover:text-gold font-heading font-bold px-10 py-4 text-sm tracking-widest uppercase transition-colors duration-200"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 border-t border-white/10 bg-dark/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`text-center py-2 ${i < stats.length - 1 ? "border-r border-white/10" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
            >
              <div className="font-heading text-3xl font-bold text-gold tracking-wider">
                <Counter value={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
              </div>
              <div className="font-body text-off-white/60 text-sm tracking-wider mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
