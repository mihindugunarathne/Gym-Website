"use client";

import { motion } from "framer-motion";
import { pricingPlans } from "@/app/data/pricing";
import SectionTitle from "@/app/components/ui/SectionTitle";

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-dark-brown py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Membership Plans" titleLight="Invest In" titleGold="Yourself" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative p-8 flex flex-col transition-all duration-300 group cursor-pointer ${
                plan.featured
                  ? "bg-charcoal border-2 border-gold md:scale-105 shadow-2xl shadow-gold/10"
                  : "bg-charcoal/50 border border-white/10 hover:border-2 hover:border-gold hover:bg-charcoal hover:shadow-2xl hover:shadow-gold/10 hover:md:-translate-y-2"
              }`}
            >
              {/* Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-dark font-heading font-bold text-xs px-4 py-1 tracking-widest uppercase whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="font-heading font-bold text-sm text-off-white/60 uppercase tracking-widest mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`font-heading font-bold text-3xl transition-colors duration-300 ${
                    plan.featured ? "text-gold" : "text-off-white group-hover:text-gold"
                  }`}>
                    {plan.price}
                  </span>
                  <span className="font-body text-off-white/40 text-sm">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="border-t border-white/10 pt-6 mb-8 flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#CC9900" strokeWidth="2.5" className="w-4 h-4 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="font-body text-off-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center font-heading font-bold text-sm py-3 tracking-widest uppercase transition-colors duration-200 ${
                  plan.featured
                    ? "bg-gold hover:bg-gold-hover text-dark"
                    : "border border-gold text-gold group-hover:bg-gold group-hover:text-dark"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
