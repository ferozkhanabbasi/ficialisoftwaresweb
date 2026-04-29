"use client";

import { motion } from "framer-motion";
import Stats from "./Stats";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-20 2xl:py-32 bg-white/3 border-t border-white/6"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              mass: 1,
            }}
            className="text-sm font-medium text-violet-400 uppercase tracking-wide mb-3"
          >
            About Us
          </motion.p>
          <motion.h2
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
            className="text-2xl md:text-4xl text-white font-semibold"
          >
            Building the Future of Software
          </motion.h2>
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              mass: 1,
              delay: 0.2,
            }}
            className="max-w-md mx-auto text-sm text-gray-400 my-3"
          >
            We turn ambitious ideas into scalable software. From startups to
            enterprises, we engineer digital products that drive growth.
          </motion.p>
        </div>
        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <motion.div
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
          >
            {/* Our Vision */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                To be the leading force in innovative software solutions that
                empower businesses to thrive in the digital age. We envision a
                world where technology seamlessly integrates with human
                potential, creating limitless possibilities for growth and
                innovation.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                At Ficiali, we believe in harnessing the power of AI, cloud
                computing, and emerging technologies to solve complex business
                challenges. Our vision is to become the trusted partner that
                helps organizations not just adapt to technological change, but
                lead it—building sustainable, scalable solutions that stand the
                test of time and drive meaningful progress across industries.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                To deliver exceptional software products that drive real
                business value. Through cutting-edge technologies, agile
                methodologies, and deep industry expertise, we transform ideas
                into scalable solutions that exceed expectations and create
                lasting impact.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Every project we undertake is guided by our commitment to
                excellence, collaboration, and innovation. We work closely with
                our clients to understand their unique challenges, then apply
                our technical expertise and creative problem-solving to develop
                custom solutions. From startups seeking their first MVP to
                enterprises scaling globally, we ensure that every line of code
                contributes to tangible business outcomes and user satisfaction.
              </p>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              mass: 1,
              delay: 0.2,
            }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-white/6 shadow-xl">
              <img
                // src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1600&auto=format&fit=crop"
                src="/team.png"
                alt="Team ficiali"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
        <Stats />
      </div>
    </section>
  );
}
