"use client";

const services = [
  {
    title: "Agentic AI & LLMs",
    description: "Building intelligent multi-agent systems, conversational AI, and LLM-powered applications using LangChain, OpenAI, and custom frameworks.",
  },
  {
    title: "Backend Development",
    description: "Creating robust RESTful APIs and scalable backend systems using Node.js, Express with optimized database architectures.",
  },
  {
    title: "Voice & WhatsApp Agents",
    description: "Designing conversational AI assistants for voice calls and WhatsApp using Twilio and advanced NLP models.",
  },
  {
    title: "Workflow Automation",
    description: "Streamlining business operations with N8N, Zapier integrations that reduce manual work and boost efficiency.",
  },
  {
    title: "Vector Databases & RAG",
    description: "Implementing semantic search and retrieval systems with custom RAG architectures for intelligent data access.",
  },
  {
    title: "Cloud & DevOps",
    description: "Deploying and scaling applications with Docker, Kubernetes, and CI/CD pipelines for production-ready solutions.",
  },
];

export default function WhatIDo() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-mono text-sm uppercase tracking-wider mb-2">What I Do</p>
        <h2 className="section-title">
          Full-Stack AI & Automation<br />Solutions
        </h2>
        <p className="section-subtitle mb-12 max-w-2xl">
          Delivering scalable, intelligent solutions across the entire technology stack
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="reveal p-6 rounded-xl bg-surfaceElevated border border-white/10 hover:border-accent/30 transition-all"
            >
              <h3 className="font-display font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
