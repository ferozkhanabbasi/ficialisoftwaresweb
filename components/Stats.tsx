"use client";

import { motion } from "framer-motion";
import { AwardIcon, UsersIcon, ZapIcon, GlobeIcon } from "lucide-react";

const stats = [
  {
    icon: <UsersIcon className="w-6 h-6" />,
    value: "15+",
    label: "Team Members",
  },
  {
    icon: <AwardIcon className="w-6 h-6" />,
    value: "150+",
    label: "Projects Delivered",
  },
  {
    icon: <GlobeIcon className="w-6 h-6" />,
    value: "20+",
    label: "Countries Served",
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    value: "96%",
    label: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
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
          className="rounded-2xl p-6 bg-white/3 border border-white/6 text-center"
        >
          <div className="w-12 h-12 rounded-lg bg-violet-900/20 flex items-center justify-center mx-auto mb-4 text-violet-400">
            {stat.icon}
          </div>
          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
