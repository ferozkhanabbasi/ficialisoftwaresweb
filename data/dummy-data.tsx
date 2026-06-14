import {
  Bot,
  BrainCircuit,
  CloudCheck,
  DatabaseZap,
  Fullscreen,
  MonitorCheck,
  MonitorSmartphone,
  ScreenShare,
  ShoppingCart,
  Smartphone,
  UploadIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";

export const servicesData = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI & Machine Learning Solutions",
    desc: "Design and deploy AI systems that automate processes and deliver predictive insights.",
    keywords: ["Machine Learning", "AI Automation"],
    slug: "ai-machine-learning",
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "Agentic AI & LLM Development",
    desc: "Build next-generation AI agents and chatbots powered by Large Language Models.",
    keywords: ["LLMs", "LangChain", "RAG", "AI Agents"],
    slug: "agentic-ai-llm",
  },
  {
    icon: <Fullscreen className="w-6 h-6" />,
    title: "Computer Vision & Image Processing",
    desc: "Create advanced computer vision solutions for object detection and image analysis.",
    keywords: ["Object Detection", "Image Processing"],
    slug: "computer-vision",
  },
  {
    icon: <DatabaseZap className="w-6 h-6" />,
    title: "Data Science & Big Data Engineering",
    desc: "Transform raw data into actionable insights with advanced analytics and big data solutions.",
    keywords: ["Analytics", "Data Engineering"],
    slug: "data-science-big-data",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    title: "Web Application Development",
    desc: "Develop high-performance, scalable web applications tailored to your business needs.",
    keywords: ["Frontend", "Backend", "Deployment"],
    slug: "web-development",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile App Development",
    desc: "Deliver seamless mobile experiences with cross-platform app development.",
    keywords: ["Android", "iOS", "Cross-Platform"],
    slug: "mobile-development",
  },
];

export const plansData = [
  {
    id: "starter",
    name: "Starter",
    price: "$499",
    desc: "Best for early-stage startups.",
    credits: "One-time",
    features: [
      "Project discovery & planning",
      "UI/UX design",
      "Basic website development",
      "1 revision round",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Growth",
    price: "$1,499",
    desc: "Growing teams and businesses.",
    credits: "Monthly",
    features: [
      "Everything in Starter",
      "Advanced UI/UX design",
      "Custom development",
      "Performance optimization",
      "Priority support",
    ],
    popular: true,
  },
  {
    id: "ultra",
    name: "Scale",
    price: "$3,999",
    desc: "For brands ready to scale fast.",
    credits: "Custom",
    features: [
      "Everything in Growth",
      "Dedicated project manager",
      "Ongoing optimization",
      "Marketing & growth support",
      "Chat + Email support",
    ],
  },
];

export const faqData = [
  {
    question: "What types of AI solutions do you build?",
    answer:
      "We specialize in AI & machine learning, LLM/agentic AI development, computer vision, and data science & big data engineering. Every solution is tailored to your specific business use case.",
  },
  {
    question: "Do you work with startups or only large enterprises?",
    answer:
      "We work with startups, scale-ups, and large enterprises across 30+ countries. Our engagement models are flexible, whether you need MVP development or enterprise-scale AI systems.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Timelines vary by complexity — AI/ML projects typically take 4-12 weeks, web/mobile apps 6-16 weeks, and enterprise solutions 3-6 months. We provide a detailed timeline after discovery.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Yes, we provide ongoing support including model monitoring, performance optimization, security updates, and feature enhancements. We offer monthly maintenance packages tailored to your needs.",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "We follow industry best practices for data security, including encryption at rest and in transit, secure API design, and compliance with GDPR and other regional data protection standards.",
  },
  {
    question: "Do you develop fintech and financial technology solutions?",
    answer:
      "Yes, we specialize in fintech solutions including payment processing systems, blockchain integration, regulatory compliance platforms, and secure financial applications. Our team has extensive experience with financial regulations like PCI DSS, SOC 2, and regional financial compliance standards.",
  },
  {
    question:
      "What experience do you have with agentic AI and autonomous systems?",
    answer:
      "We have deep expertise in building agentic AI systems using frameworks like LangChain and LangGraph. Our experience includes developing autonomous customer service agents, intelligent workflow automation, decision-making systems, and self-learning AI agents that can operate independently while maintaining safety and reliability standards.",
  },
  {
    question: "How do you approach cybersecurity in software development?",
    answer:
      "Security is integrated throughout our development lifecycle. We implement secure coding practices, conduct regular security audits, penetration testing, and vulnerability assessments. Our solutions include encryption, secure authentication, access controls, and compliance with industry standards like ISO 27001 and NIST frameworks.",
  },
];

export const teamData = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    bio: "Passionate about building innovative software solutions that drive business growth.",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b332c1b6?q=80&w=400&auto=format&fit=crop",
    bio: "Expert in AI/ML and full-stack development with 10+ years of experience.",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    bio: "Specializes in cloud architecture and scalable web applications.",
  },
  {
    name: "Sarah Wilson",
    role: "UX/UI Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    bio: "Creates intuitive and beautiful user experiences that users love.",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "Home", url: "/#" },
      { name: "Services", url: "/#services" },
      { name: "Blog", url: "/blog" },
      { name: "About Us", url: "/about-us" },
      { name: "Contact Us", url: "/#contact-us" },
    ],
  },
  {
    title: "Social Media",
    links: [
      { name: "Clutch", url: "https://clutch.co/profile/ficiali" },
      { name: "LinkedIn", url: "https://pk.linkedin.com/company/ficiali" },
      { name: "Facebook", url: "https://www.facebook.com/ficiali/" },
      { name: "Instagram", url: "https://www.instagram.com/ficiali_official/" },
    ],
  },
];
