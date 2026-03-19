"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import contactBg from "@/app/assets/contact-bg.jpg";
import SectionTitle from "@/app/components/ui/SectionTitle";

const contactInfo = [
  {
    label: "Address",
    value: "123 Fitness Street, Colombo 05, Sri Lanka",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </>
    ),
  },
  {
    label: "Hours",
    value: "Mon–Sat: 5:00 AM – 10:00 PM  ·  Sun: 7:00 AM – 6:00 PM",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    label: "Phone",
    value: "+94 11 234 5678",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    ),
  },
];

const inputClass =
  "w-full bg-charcoal text-off-white font-body text-sm px-4 py-3 border focus:outline-none placeholder:text-off-white/30 transition-colors";

function validate(formData) {
  const errors = {};
  if (!formData.name.trim() || formData.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";
  if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    errors.email = "Please enter a valid email address.";
  if (!formData.message.trim() || formData.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function ContactSection() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (sendError) setSendError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSending(true);
    setSendError(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch {
      setSendError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-off-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Get In Touch"
          titleLight="Start Your"
          titleGold="Journey Today"
          dark
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info + Image — slides from left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/3] mb-8 overflow-hidden">
              <Image
                src={contactBg}
                alt="FitLife Gym"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="bg-dark p-3 shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#CC9900"
                      strokeWidth="1.5"
                      className="w-5 h-5"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-dark uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="font-body text-dark/60 text-sm mt-1 leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form — slides from right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-dark p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="text-gold mb-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-16 h-16 mx-auto"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl text-off-white uppercase tracking-wider mb-3">
                  Message Sent!
                </h3>
                <p className="font-body text-off-white/60 text-sm mb-8 max-w-xs">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setSendError(null); }}
                  className="bg-gold hover:bg-gold-hover text-dark font-heading font-bold px-8 py-3 text-sm tracking-widest uppercase transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="bg-dark p-8 space-y-5">
                <h3 className="font-heading font-bold text-xl text-off-white uppercase tracking-wider mb-1">
                  Send Us A Message
                </h3>

                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className={inputClass}
                    style={{ borderColor: errors.name ? "#ef4444" : "rgba(255,255,255,0.1)" }}
                  />
                  {errors.name && (
                    <p className="text-red-400 font-body text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    className={inputClass}
                    style={{ borderColor: errors.email ? "#ef4444" : "rgba(255,255,255,0.1)" }}
                  />
                  {errors.email && (
                    <p className="text-red-400 font-body text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number (optional)"
                    className={inputClass}
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message *"
                    rows={5}
                    className={`${inputClass} resize-none`}
                    style={{ borderColor: errors.message ? "#ef4444" : "rgba(255,255,255,0.1)" }}
                  />
                  {errors.message && (
                    <p className="text-red-400 font-body text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {sendError && (
                  <p className="text-red-400 font-body text-xs text-center">{sendError}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gold hover:bg-gold-hover disabled:opacity-60 disabled:cursor-not-allowed text-dark font-heading font-bold py-4 text-sm tracking-widest uppercase transition-colors duration-200"
                >
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
