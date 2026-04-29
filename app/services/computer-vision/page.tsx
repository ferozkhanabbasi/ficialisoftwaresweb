"use client";
import { motion } from "framer-motion";
import { Fullscreen } from "lucide-react";
import ContactUsButton from "@/components/ContactUsButton";

export const dynamic = "force-static";

export default function ComputerVisionPage() {
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
            <Fullscreen className="w-10 h-10 text-violet-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Computer Vision & Image Processing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Advanced computer vision solutions that enable machines to
            understand and interpret visual information from the world.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Computer Vision",
              "Object Detection",
              "Image Processing",
              "AI Vision",
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

        {/* Applications */}
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Key Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Object Detection
              </h3>
              <p className="text-gray-300">
                Identify and locate objects within images and video streams with
                high accuracy and real-time processing.
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Facial Recognition
              </h3>
              <p className="text-gray-300">
                Advanced facial analysis for security, authentication, and
                personalized user experiences.
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Medical Imaging
              </h3>
              <p className="text-gray-300">
                AI-powered analysis of medical images for diagnosis assistance
                and treatment planning.
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Quality Control
              </h3>
              <p className="text-gray-300">
                Automated inspection systems for manufacturing and quality
                assurance processes.
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Autonomous Vehicles
              </h3>
              <p className="text-gray-300">
                Computer vision systems for self-driving cars and autonomous
                navigation.
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Retail Analytics
              </h3>
              <p className="text-gray-300">
                Customer behavior analysis and inventory management through
                visual data processing.
              </p>
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
            Technologies We Master
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "OpenCV",
              "TensorFlow",
              "PyTorch",
              "YOLO",
              "Detectron2",
              "MediaPipe",
              "OpenVINO",
              "CUDA",
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

        {/* Success Metrics */}
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Measurable Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-violet-400 mb-2">95%</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Accuracy Rate
              </h3>
              <p className="text-gray-300 text-sm">
                Object detection accuracy in production environments
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-violet-400 mb-2">10x</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Faster Processing
              </h3>
              <p className="text-gray-300 text-sm">
                Real-time image processing capabilities
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-violet-400 mb-2">60%</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Cost Reduction
              </h3>
              <p className="text-gray-300 text-sm">
                Automated quality control vs manual inspection
              </p>
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
            See the World Through AI Eyes
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Unlock the power of computer vision for your business. From
            automated inspection to intelligent surveillance, we make visual
            data actionable.
          </p>
          <ContactUsButton />
        </motion.section>
      </div>
    </div>
  );
}
