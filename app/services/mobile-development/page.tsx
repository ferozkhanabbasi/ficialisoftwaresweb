"use client";
import { motion } from "framer-motion";
import { Smartphone, CheckCircle } from "lucide-react";
import ContactUsButton from "@/components/ContactUsButton";

export const dynamic = "force-static";

export default function MobileDevelopmentPage() {
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
            <Smartphone className="w-10 h-10 text-violet-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Mobile App Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Deliver seamless mobile experiences with native and cross-platform
            app development that users love.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Mobile Apps", "Flutter", "React Native", "iOS/Android"].map(
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

        {/* Platform Options */}
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Development Approaches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/3 border border-white/6 rounded-2xl text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Native iOS
              </h3>
              <p className="text-gray-300 mb-6">
                Swift/SwiftUI development for premium iOS experiences with
                maximum performance and platform integration.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• App Store optimization</div>
                <div>• iOS-specific features</div>
                <div>• Maximum performance</div>
              </div>
            </div>
            <div className="p-8 bg-white/3 border border-white/6 rounded-2xl text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Native Android
              </h3>
              <p className="text-gray-300 mb-6">
                Kotlin/Java development for Android devices with Google Play
                Store optimization and Material Design.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Play Store optimization</div>
                <div>• Android features</div>
                <div>• Device compatibility</div>
              </div>
            </div>
            <div className="p-8 bg-white/3 border border-white/6 rounded-2xl text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Cross-Platform
              </h3>
              <p className="text-gray-300 mb-6">
                Flutter/React Native for cost-effective development with single
                codebase for iOS and Android.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Single codebase</div>
                <div>• Cost-effective</div>
                <div>• Faster development</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            App Features We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Offline functionality",
              "Push notifications",
              "In-app purchases",
              "Social integration",
              "GPS & location services",
              "Biometric authentication",
              "Real-time messaging",
              "AR/VR experiences",
              "IoT device integration",
              "Advanced animations",
              "Payment processing",
              "Analytics integration",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-4 bg-white/3 border border-white/6 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Success Stories */}
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            App Launch Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Fitness Tracking App
              </h3>
              <p className="text-gray-300 mb-4">
                Cross-platform fitness app with 500K+ downloads and 4.8-star
                rating across iOS and Android stores.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-violet-400">500K+ downloads</span>
                <span className="text-gray-400">Flutter development</span>
              </div>
            </div>
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                E-commerce Mobile App
              </h3>
              <p className="text-gray-300 mb-4">
                Native iOS/Android apps with AR product visualization,
                increasing conversion rates by 40%.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-violet-400">40% conversion increase</span>
                <span className="text-gray-400">Native development</span>
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
            Bring Your App Idea to Life
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            From concept to app store launch, we deliver mobile experiences that
            users can&apos;t put down.
          </p>
          <ContactUsButton />
        </motion.section>
      </div>
    </div>
  );
}
