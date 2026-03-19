"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { trainers } from "@/app/data/trainers";
import SectionTitle from "@/app/components/ui/SectionTitle";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TrainersSection() {
  return (
    <section id="trainers" className="bg-off-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Our Team" titleLight="Meet Your" titleGold="Trainers" dark />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {trainers.map((trainer) => (
            <motion.div key={trainer.id} variants={cardVariants} className="bg-dark group overflow-hidden">
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-5 border-t-2 border-gold">
                <h3 className="font-heading font-bold text-xl text-off-white uppercase tracking-wider">
                  {trainer.name}
                </h3>
                <p className="font-body text-gold text-sm tracking-wide mt-1">{trainer.specialty}</p>
                <div className="flex items-center gap-1 mt-3">
                  {Array.from({ length: trainer.rating }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="#CC9900" className="w-4 h-4">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="font-body text-off-white/40 text-xs ml-2">{trainer.sessions}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
