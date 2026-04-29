import { useRef } from "react";
import { servicesData } from "@/data/dummy-data";
import Title from "./Title";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  return (
    <section id="services" className="py-20 2xl:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <Title
          title="Services"
          heading="Comprehensive Software Solutions"
          description="Ficiali offers a full spectrum of software services, from discovery and planning to design, development and growth optimization."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((feature, i) => (
            <motion.div
              ref={(el) => {
                refs.current[i] = el;
              }}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.1 + i * 0.1,
              }}
              key={i}
              onAnimationComplete={() => {
                const card = refs.current[i];
                if (card) {
                  card.classList.add(
                    "transition",
                    "duration-300",
                    "hover:border-white/15",
                    "hover:-translate-y-1",
                  );
                }
              }}
              className="rounded-2xl p-6 bg-white/3 border border-white/6"
            >
              <div className="w-12 h-12 rounded-lg bg-violet-900/20 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {feature.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {feature.keywords?.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/20"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <Link
                href={`/services/${feature.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
              >
                Explore
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
