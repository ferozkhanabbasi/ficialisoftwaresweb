"use client";
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import ContactUsButton from "@/components/ContactUsButton";

export const dynamic = "force-static";

export default function AgenticAILLMPage() {
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
            <BrainCircuit className="w-10 h-10 text-violet-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Agentic AI & LLM Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Build next-generation AI agents and chatbots powered by Large
            Language Models that can reason, learn, and act autonomously.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["LLMs", "LangChain", "RAG", "AI Agents"].map((keyword, idx) => (
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
                  Conversational AI
                </h3>
                <p className="text-gray-300">
                  Create intelligent chatbots and virtual assistants that
                  understand context and provide natural, helpful responses.
                </p>
              </div>
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Autonomous Agents
                </h3>
                <p className="text-gray-300">
                  Develop AI agents that can perform complex tasks autonomously,
                  from data analysis to workflow automation.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  RAG Systems
                </h3>
                <p className="text-gray-300">
                  Implement Retrieval-Augmented Generation for accurate,
                  context-aware responses using your proprietary data.
                </p>
              </div>
              <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Knowledge Assistants
                </h3>
                <p className="text-gray-300">
                  Build specialized AI assistants that provide expert-level
                  knowledge and support for specific domains.
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
            Technologies & Frameworks
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "LangChain",
              "LangGraph",
              "LlamaIndex",
              "OpenAI",
              "Anthropic",
              "Hugging Face",
              "Pinecone",
              "Weaviate",
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

        {/* Use Cases */}
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Customer Support
              </h3>
              <p className="text-gray-300">
                24/7 intelligent support agents that handle inquiries, provide
                solutions, and escalate complex issues.
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Content Creation
              </h3>
              <p className="text-gray-300">
                AI-powered content assistants that help generate, edit, and
                optimize written and visual content.
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Data Analysis
              </h3>
              <p className="text-gray-300">
                Autonomous agents that analyze complex datasets, generate
                insights, and create actionable reports.
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
            Transform Your Operations with AI Agents
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how autonomous AI agents can revolutionize your business
            processes. Let&apos;s build the future together.
          </p>
          <ContactUsButton />
        </motion.section>
      </div>
    </div>
  );
}
