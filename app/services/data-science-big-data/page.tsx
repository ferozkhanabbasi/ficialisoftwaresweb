"use client";
import { motion } from "framer-motion";
import { DatabaseZap } from "lucide-react";
import ContactUsButton from "@/components/ContactUsButton";

export const dynamic = "force-static";

export default function DataSciencePage() {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-violet-900/20 flex items-center justify-center">
            <DatabaseZap className="w-10 h-10 text-violet-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Data Science & Big Data Engineering
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform raw data into actionable insights with advanced analytics
            and scalable big data solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Data Science", "Big Data", "Analytics", "Data Engineering"].map(
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

        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Our Data Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Predictive Analytics
                </h3>
                <p className="text-gray-300">
                  Forecast trends and behaviors using advanced statistical
                  models and machine learning algorithms.
                </p>
              </div>
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Big Data Processing
                </h3>
                <p className="text-gray-300">
                  Handle massive datasets with distributed computing frameworks
                  like Hadoop and Spark.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Data Visualization
                </h3>
                <p className="text-gray-300">
                  Create compelling dashboards and reports that make complex
                  data understandable.
                </p>
              </div>
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  ETL Pipeline Development
                </h3>
                <p className="text-gray-300">
                  Build robust data pipelines for efficient data extraction,
                  transformation, and loading.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Python",
              "R",
              "Apache Spark",
              "Hadoop",
              "Tableau",
              "Power BI",
              "Snowflake",
              "Databricks",
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

        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Unlock Your Data&apos;s Potential
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Turn your data into a competitive advantage with our comprehensive
            data science and analytics solutions.
          </p>
          <ContactUsButton />
        </motion.section>
      </div>
    </div>
  );
}
