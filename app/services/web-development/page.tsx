"use client";
import { motion } from "framer-motion";
import { MonitorSmartphone } from "lucide-react";
import ContactUsButton from "@/components/ContactUsButton";

export const dynamic = "force-static";

export default function WebDevelopmentPage() {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-violet-900/20 flex items-center justify-center">
            <MonitorSmartphone className="w-10 h-10 text-violet-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Web Application Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Build high-performance, scalable web applications that deliver
            exceptional user experiences and drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Web Development", "React", "Next.js", "Full-Stack"].map(
              (keyword, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 text-sm bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/20"
                >
                  {keyword}
                </span>
              ),
            )}
          </div>
        </motion.div>

        {/* Services */}
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">What We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  SaaS Platforms
                </h3>
                <p className="text-gray-300">
                  Scalable software-as-a-service applications with multi-tenant
                  architecture and subscription management.
                </p>
              </div>
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  E-commerce Solutions
                </h3>
                <p className="text-gray-300">
                  Custom online stores with advanced features like inventory
                  management, payment processing, and analytics.
                </p>
              </div>
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Progressive Web Apps
                </h3>
                <p className="text-gray-300">
                  Web applications that work offline and provide native app-like
                  experiences across all devices.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Enterprise Applications
                </h3>
                <p className="text-gray-300">
                  Complex business applications with advanced features,
                  integrations, and enterprise-grade security.
                </p>
              </div>
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Content Management Systems
                </h3>
                <p className="text-gray-300">
                  Custom CMS solutions with intuitive admin interfaces and
                  flexible content modeling.
                </p>
              </div>
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Real-time Applications
                </h3>
                <p className="text-gray-300">
                  Live collaboration tools, chat applications, and real-time
                  dashboards with WebSocket integration.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Python",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "AWS",
              "Docker",
            ].map((tech, idx) => (
              <div
                key={idx}
                className="p-4 bg-white/3 border border-white/6 rounded-xl text-center"
              >
                <span className="text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Performance Metrics */}
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Performance & Quality
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-violet-400 mb-2">
                99.9%
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Uptime</h3>
              <p className="text-gray-300 text-sm">
                Reliable application performance
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-violet-400 mb-2">
                &lt;2s
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Load Time
              </h3>
              <p className="text-gray-300 text-sm">
                Fast loading across devices
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-violet-400 mb-2">
                100%
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Responsive
              </h3>
              <p className="text-gray-300 text-sm">
                Perfect on all screen sizes
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-violet-400 mb-2">A+</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Lighthouse
              </h3>
              <p className="text-gray-300 text-sm">Performance optimization</p>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s transform your ideas into powerful web applications that
            users love and businesses rely on.
          </p>
          <ContactUsButton />
        </motion.section>
      </div>
    </div>
  );
}
