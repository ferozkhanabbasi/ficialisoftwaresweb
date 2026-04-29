"use client";

import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <section
      id="about"
      className="py-16 2xl:py-20 bg-white/3 border-t border-white/6"
    >
      <div className="max-w-6xl mx-auto px-4">
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
            <h3>Ficiali - Smarter Systems for Faster Growth</h3>
            <br />
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Ficiali is a global technology partner specializing in AI
              engineering, cloud transformation, enterprise software
              development, and team augmentation. We go beyond traditional
              technology services; designing solutions that are intelligent,
              scalable, and built for long-term impact.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              At Ficiali, we combine deep technical expertise with strategic
              thinking to help organizations navigate complex digital
              challenges. From early-stage startups to large enterprises, we
              partner closely with our clients to turn ambitious ideas into
              production-ready systems that drive real business outcomes.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              With a strong focus on Agentic AI, large language models (LLMs),
              vector databases, and autonomous systems, Ficiali enables
              businesses to move faster, operate smarter, and stay ahead in an
              increasingly competitive landscape. We design and deploy AI
              systems that are not only powerful, but also reliable, secure, and
              aligned with real-world use cases.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our capabilities span across the entire product lifecycle—from
              ideation and architecture to development, deployment, and
              continuous optimization. Whether it’s building AI-native
              applications, modernizing legacy systems, or scaling cloud
              infrastructure, we ensure every solution is engineered for
              performance, resilience, and future growth.
            </p>
            <br />
            <p className="text-gray-300 text-sm leading-relaxed">
              We also provide flexible team augmentation services, embedding
              highly skilled engineers, AI specialists, and product experts
              directly into client teams. This allows organizations to scale
              efficiently while maintaining speed, quality, and full control
              over their roadmap.
            </p>
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
                src="/team.png"
                alt="Team ficiali"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Services Overview */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 70,
            mass: 1,
            delay: 0.3,
          }}
          className="mb-20"
        >
          <h3 className="text-xl font-semibold text-white mb-8 text-center">
            AI, LLM, and Intelligent Automation Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/3 border border-white/6 rounded-2xl p-6">
              <h4 className="text-lg font-medium text-white mb-4">
                Agentic AI Systems
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• AI Agents (CrewAI, LangGraph, AutoGen)</li>
                <li>• Large Language Models (LLMs)</li>
                <li>• Retrieval-Augmented Generation (RAG)</li>
                <li>• LangChain</li>
                <li>• LlamaIndex</li>
              </ul>
            </div>
            <div className="bg-white/3 border border-white/6 rounded-2xl p-6">
              <h4 className="text-lg font-medium text-white mb-4">
                Computer Vision
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Object Recognition</li>
                <li>• Object Tracking</li>
                <li>• Image Classification</li>
                <li>• Face Recognition</li>
                <li>• Image Segmentation</li>
                <li>• Image Restoration</li>
                <li>• Scene Reconstruction</li>
                <li>• Object Detection</li>
              </ul>
            </div>
            <div className="bg-white/3 border border-white/6 rounded-2xl p-6">
              <h4 className="text-lg font-medium text-white mb-4">
                Data Science & Big Data
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Hadoop</li>
                <li>• MongoDB</li>
                <li>• Amazon EMR</li>
                <li>• Apache Flink</li>
                <li>• Snowflake</li>
                <li>• Apache Drill</li>
              </ul>
            </div>
            <div className="bg-white/3 border border-white/6 rounded-2xl p-6">
              <h4 className="text-lg font-medium text-white mb-4">
                Machine Learning & Deep Learning
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Image Recognition & Object Detection</li>
                <li>• Amazon Rekognition</li>
                <li>• Google Cloud Vision API</li>
                <li>• Microsoft Azure Computer Vision</li>
                <li>• TensorFlow Object Detection API</li>
                <li>• OpenCV</li>
                <li>• PyTorch / torchvision</li>
              </ul>
            </div>
            <div className="bg-white/3 border border-white/6 rounded-2xl p-6">
              <h4 className="text-lg font-medium text-white mb-4">
                Vector Databases & AI
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • Vector Databases (Pinecone, Chroma, Weaviate, Milvus,
                  Qdrant)
                </li>
                <li>• Embeddings & Fine-tuning</li>
                <li>• Knowledge Base AI Assistants</li>
                <li>• NLP (Natural Language Processing)</li>
              </ul>
            </div>
            <div className="bg-white/3 border border-white/6 rounded-2xl p-6">
              <h4 className="text-lg font-medium text-white mb-4">
                Mobile Development
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Android Studio</li>
                <li>• React Native</li>
                <li>• Flutter</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CEO */}

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
            Founder & CEO of Ficiali
          </motion.p>
        </div>
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
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Feroz Khan is an experienced AI engineer and the Founder & CEO of
              Ficiali, a global technology company focused on building advanced
              Agentic AI systems, intelligent automation solutions, and scalable
              enterprise software. With a strong foundation in computer science
              and years of hands-on engineering experience, he specializes in
              designing autonomous systems that combine reasoning, planning, and
              real-world tool execution to solve complex business problems.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              His expertise lies in developing cutting-edge AI agents and
              multi-agent systems using leading frameworks such as CrewAI,
              LangGraph, AutoGen, SmolAgents, and Eliza-style architectures.
              These systems are capable of goal-driven reasoning, long-term
              memory, tool usage, and collaborative workflows—enabling fully
              autonomous AI solutions for research, operations, customer
              engagement, and software development.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Under his leadership, Ficiali leverages modern AI ecosystems
              including OpenAI, Claude, Mistral, and HuggingFace, along with
              vector databases like Pinecone, Weaviate, FAISS, and Qdrant. The
              company builds production-grade systems using FastAPI, Streamlit,
              Docker, and cloud-native architectures, delivering scalable
              AI-powered applications tailored for enterprise and startup needs.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Feroz Khan has also worked extensively across machine learning,
              deep learning, and full-stack SaaS development, building solutions
              in areas such as computer vision, predictive analytics,
              automation, and AI-driven platforms. His mission with Ficiali is
              to transform cutting-edge AI research into practical, high-impact
              systems that drive measurable business value and redefine how
              organizations operate in the age of intelligent automation.
            </p>
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
                src="/feroz_khan.jpeg"
                alt="Feroz Khan"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
