"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, titleLight, titleGold, dark = false, centered = true }) {
  return (
    <motion.div
      className={`mb-16 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {eyebrow && (
        <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading font-bold uppercase leading-tight">
        <span className={`block text-4xl md:text-5xl ${dark ? "text-dark" : "text-off-white"}`}>
          {titleLight}
        </span>
        <span className="block text-4xl md:text-5xl text-gold">{titleGold}</span>
      </h2>
    </motion.div>
  );
}
