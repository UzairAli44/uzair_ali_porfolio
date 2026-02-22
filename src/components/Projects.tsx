"use client";

import Image from "next/image";

type Project = {
  title: string;
  role?: string;
  description: string;
  stack: string[];
  href: string;
  gradient: string;
  icon: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  category?: string;
  stats?: string[];
};

const projects: Project[] = [
  {
    title: "Sibme",
    role: "Work as a Participant",
    description: "Comprehensive professional development and coaching platform for educators. Enhances instructional practices through video reflection, collaboration, and AI-driven insights.",
    stack: ["React", "Node.js", "Video", "AI"],
    href: "#",
    gradient: "from-amber-200 to-amber-100",
    icon: "🎓",
    image: "projects/sibme.webp",
    imageAlt: "Sibme platform",
    featured: true,
    category: "Full-Stack",
    stats: ["70% Time Saved", "100+ Users"],
  },
  {
    title: "AI-Driven Arabic Telephony Solution",
    description: "Intelligent Arabic voice bot for real estate. Automates cold calls and culturally-aware dialogue to identify high-quality leads.",
    stack: ["AI", "Voice", "NLP", "Node.js"],
    href: "#",
    gradient: "from-amber-200 to-amber-100",
    icon: "🏠",
    image: "projects/Arabic.png",
    category: "Voice AI",
  },
  {
    title: "Unified AI Cost Estimator",
    description: "Harmonizes outputs from Claude, Perplexity, and other AI models into one reliable source for construction budgeting.",
    stack: ["AI", "Claude", "APIs", "Node.js"],
    href: "#",
    gradient: "from-blue-200 to-blue-100",
    icon: "📐",
    image: "projects/Cost estimation.png",
    imageAlt: "AI cost estimator",
    category: "AI",
  },
  {
    title: "Dental AI Concierge",
    description: "English-language AI voice assistant for dental practices. Automates outreach, lead generation, and the full appointment lifecycle.",
    stack: ["AI", "Voice", "Node.js", "Automation"],
    href: "#",
    gradient: "from-cyan-200 to-cyan-100",
    icon: "🦷",
    image: "projects/Medical Voice Agent.png",
    imageAlt: "Dental AI Concierge",
    category: "Voice AI",
  },
  {
    title: "Qanalyzer",
    description: "AI-powered text conversion tool that transforms raw data into actionable insights.",
    stack: ["AI", "React", "Next.js", "Data"],
    href: "#",
    gradient: "from-violet-200 to-violet-100",
    icon: "✨",
    image: "projects/qanalyzer.png",
    imageAlt: "Qanalyzer",
    category: "AI",
  },
  {
    title: "FitFlow – Exercise Explorer",
    description: "React-based fitness app that lets users discover exercises by body part. Powered by RapidAPI and YouTube.",
    stack: ["React", "RapidAPI", "YouTube API"],
    href: "#",
    gradient: "from-rose-200 to-rose-100",
    icon: "💪",
    image: "projects/fittness_app.png",
    imageAlt: "FitFlow",
    category: "Frontend",
  },
  {
    title: "Weather App",
    description: "Modern weather app built with React 19. Search any city via GeoDB and OpenWeather.",
    stack: ["React 19", "GeoDB", "OpenWeather"],
    href: "#",
    gradient: "from-sky-200 to-sky-100",
    icon: "🌤️",
    image: "projects/Weather_App.png",
    imageAlt: "Weather app",
    category: "Frontend",
  },
  {
    title: "Urban Galleria",
    description: "Online furniture store for modern home decor. Browse categories and smooth cart-to-checkout.",
    stack: ["React", "Next.js", "E-commerce"],
    href: "#",
    gradient: "from-stone-200 to-stone-100",
    icon: "🛋️",
    image: "projects/furniture.png",
    imageAlt: "Urban Galleria",
    category: "E-commerce",
  },
  {
    title: "Home Restaurant",
    description: "Restaurant website and ordering platform. Browse menu and place orders from home.",
    stack: ["React", "Node.js", "Food"],
    href: "#",
    gradient: "from-orange-200 to-orange-100",
    icon: "🍽️",
    image: "projects/restuarent.png",
    imageAlt: "Home Restaurant",
    category: "E-commerce",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-surfaceElevated">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-mono text-sm uppercase tracking-wider mb-2">My Work</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle mb-12">Transforming ideas into high-impact intelligent systems</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group reveal flex flex-col rounded-xl bg-surfaceElevated border border-white/10 overflow-hidden hover:border-accent/30 transition-all"
            >
              <div className="relative w-full aspect-video shrink-0 overflow-hidden bg-surface">
                {project.image ? (
                  <Image
                    src={`/${project.image}`}
                    alt={project.imageAlt ?? project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <span className="text-5xl opacity-80" aria-hidden>{project.icon}</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {project.featured && (
                    <span className="text-xs font-mono uppercase tracking-wider px-2 py-1 rounded bg-accent/10 text-accent border border-accent/20">
                      Featured
                    </span>
                  )}
                  {project.category && (
                    <span className="text-xs font-mono uppercase tracking-wider text-muted">
                      {project.category}
                    </span>
                  )}
                </div>
                <h3 className="font-display font-semibold text-white group-hover:text-accent transition-colors mb-2">
                  {project.title}
                </h3>
                {project.role && (
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">{project.role}</p>
                )}
                <p className="text-sm text-gray-300 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                {project.stats && project.stats.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.stats.map((stat) => (
                      <span key={stat} className="text-xs font-medium text-accent">
                        {stat}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
