"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import aboutGym from "@/app/assets/about-gym.jpg";
import SectionTitle from "@/app/components/ui/SectionTitle";

const features = [
  {
    id: 1,
    title: "Expert Trainers",
    description: "Our certified coaches bring years of experience, helping you hit personal records safely and effectively.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Best Equipment",
    description: "State-of-the-art machines and free weights — everything you need for a complete, effective workout.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Nutrition Plans",
    description: "Tailored meal plans by expert dietitians — designed to fuel your workouts and accelerate your results.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-off-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <SectionTitle
              eyebrow="Who We Are"
              titleLight="More Than A Gym."
              titleGold="A Lifestyle."
              dark
              centered={false}
            />
            <p className="font-body text-dark/70 text-base leading-relaxed mb-8 -mt-8">
              At FitLife Gym, we believe fitness is more than just lifting
              weights — it&apos;s a full transformation of mind, body, and
              spirit. Our state-of-the-art facility provides everything you need
              to reach your goals, backed by a passionate community and
              world-class coaches.
            </p>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={aboutGym}
                alt="Inside FitLife Gym"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column — cards stagger from right */}
          <div className="space-y-4 lg:pt-20">
            {features.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-dark p-6 flex items-start gap-5 hover:bg-charcoal transition-colors duration-300"
              >
                <div className="text-gold mt-1 shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-off-white uppercase tracking-wider mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-off-white/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
