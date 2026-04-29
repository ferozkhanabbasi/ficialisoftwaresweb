"use client";
import { motion } from "framer-motion";
import { Bot, CheckCircle } from "lucide-react";
import ContactUsButton from "@/components/ContactUsButton";

export const dynamic = "force-static";

export default function AIMachineLearningPage() {
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
            <Bot className="w-10 h-10 text-violet-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI & Machine Learning Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with intelligent AI systems that automate
            processes, enhance decision-making, and deliver predictive insights.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Machine Learning",
              "Predictive Analytics",
              "AI Automation",
              "Custom Models",
            ].map((keyword, idx) => (
              <span
                key={idx}
                className="px-4 py-2 text-sm bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/20"
              >
                {keyword}
              </span>
            ))}
          </div>
        </motion.div>

        {/* What We Do */}
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Custom ML Models
                </h3>
                <p className="text-gray-300">
                  Develop tailored machine learning models that solve your
                  specific business challenges, from recommendation systems to
                  fraud detection.
                </p>
              </div>
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  AI Automation
                </h3>
                <p className="text-gray-300">
                  Automate repetitive tasks and workflows using intelligent AI
                  systems that learn and adapt to your processes.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Predictive Analytics
                </h3>
                <p className="text-gray-300">
                  Harness the power of data with advanced predictive models that
                  forecast trends and optimize decision-making.
                </p>
              </div>
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  AI Integration
                </h3>
                <p className="text-gray-300">
                  Seamlessly integrate AI capabilities into your existing
                  systems and applications for enhanced functionality.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "Keras",
              "Jupyter",
              "Pandas",
              "NumPy",
              "MLflow",
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

        {/* Case Studies */}
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                E-commerce Recommendation Engine
              </h3>
              <p className="text-gray-300 mb-4">
                Increased conversion rates by 35% with personalized product
                recommendations powered by collaborative filtering.
              </p>
              <div className="flex items-center gap-2 text-violet-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">35% conversion increase</span>
              </div>
            </div>
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Fraud Detection System
              </h3>
              <p className="text-gray-300 mb-4">
                Reduced fraudulent transactions by 60% using anomaly detection
                and behavioral analysis.
              </p>
              <div className="flex items-center gap-2 text-violet-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">60% fraud reduction</span>
              </div>
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
            Ready to Harness AI Power?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how AI and machine learning can transform your
            business. Our experts are ready to help you unlock the potential of
            your data.
          </p>
          <ContactUsButton />
        </motion.section>
      </div>
    </div>
  );
}
