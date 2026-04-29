"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Innovation First",
    desc: "We push boundaries and explore cutting-edge technologies to deliver solutions that stand ahead of the curve.",
  },
  {
    title: "Client Partnership",
    desc: "We don't just build products — we build relationships. Your success is our success, and we're invested in every milestone.",
  },
  {
    title: "Transparency",
    desc: "Clear communication, honest timelines, and full visibility into our process. No surprises, just progress.",
  },
  {
    title: "Excellence in Execution",
    desc: "From code to design, we hold ourselves to the highest standards. Quality is never compromised, no matter the scale.",
  },
];

export default function CoreValues() {
  return (
    <div className="pt-20 2xl:pt-32 max-w-6xl mx-auto px-4">
      <motion.h3
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 70,
          mass: 1,
          delay: 0.1,
        }}
        className="text-xl md:text-2xl font-semibold text-white text-center mb-10"
      >
        Our Core Values
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {values.map((value, i) => (
          <motion.div
            key={i}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              mass: 1,
              delay: 0.1 + i * 0.1,
            }}
            className="rounded-2xl p-6 bg-white/3 border border-white/6 hover:border-white/15 hover:-translate-y-1 transition-all duration-300"
          >
            <h4 className="text-lg font-semibold text-white mb-2">
              {value.title}
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {value.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
