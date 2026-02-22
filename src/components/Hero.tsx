"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 pb-28 text-center overflow-hidden bg-surface"
    >
      {/* Warm golden radial glow from bottom-center, dark at top and corners */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 140% 100% at 50% 110%, rgba(255, 213, 0, 0.35) 0%, rgba(255, 193, 7, 0.2) 25%, rgba(255, 152, 0, 0.08) 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-surfaceElevated/80 backdrop-blur-sm mb-8 animate-fade-in opacity-0 shadow-[0_0_15px_rgba(255,255,255,0.08)]"
          style={{ animationFillMode: "forwards" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-neonGreen opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neonGreen" />
          </span>
          <span className="text-white text-sm font-medium">Full Stack Developer & Generative AI</span>
        </div>

        <h1
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto mb-6 animate-slide-up opacity-0 leading-tight"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <span className="text-white">Transforming Ideas Into Intelligent Systems </span>
          <span className="text-accent text-glow-yellow">That Drive Results</span>
        </h1>

        <p
          className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 animate-slide-up opacity-0"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Specializing in full-stack web apps, generative AI, and backend architectures — I craft cutting-edge solutions that streamline operations and amplify business outcomes.
        </p>

        <div
          className="flex flex-wrap gap-3 justify-center animate-slide-up opacity-0"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-gray-900 font-semibold hover:bg-accentDim transition-colors text-sm"
          >
            Book a Discovery Call
          </a>
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors text-sm"
          >
            Explore Portfolio
          </Link>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-gray-300 font-medium hover:border-neonGreen/50 hover:text-white transition-colors text-sm"
          >
            Message on WhatsApp
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-gray-300 font-medium hover:border-accent/50 hover:text-accent transition-colors text-sm"
          >
            Resume
          </a>
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-gray-300 font-medium hover:border-accent/50 hover:text-accent transition-colors text-sm"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
