"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-float opacity-70" />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet/15 rounded-full blur-[120px] animate-float opacity-60"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[80px] animate-glow-pulse pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm mb-8 animate-fade-in opacity-0"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-accent font-mono text-sm uppercase tracking-widest">
            Full Stack Developer · Generative AI
          </span>
        </div>
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 animate-slide-up opacity-0"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient bg-[length:200%_auto] animate-gradient-shift">
            Uzair Ali
          </span>
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up opacity-0"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          I build modern web applications with Angular, React, Node.js, and
          Next.js, and work with generative AI. From UI to APIs—full stack, end
          to end.
        </p>
        <div
          className="flex flex-wrap gap-4 justify-center animate-slide-up opacity-0"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-surface font-semibold shadow-glow hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            View Projects
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-gray-200 hover:border-accent/50 hover:text-accent hover:bg-accent/5 backdrop-blur-sm transition-all duration-300"
          >
            Get in Touch
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70"
        aria-hidden
      >
        <span className="text-muted text-xs font-mono uppercase tracking-widest">
          Scroll
        </span>
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
