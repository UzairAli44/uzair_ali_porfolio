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
  /** Optional: path under /public, e.g. "projects/sibme.png" */
  image?: string;
  imageAlt?: string;
};

// Add screenshots under /public/projects/ (e.g. sibme.png), then set image: "projects/sibme.png"
const projects: Project[] = [
  {
    title: "Sibme",
    role: "Work as a Participant",
    description:
      "Comprehensive professional development and coaching platform for educators. Enhances instructional practices through video reflection, collaboration, and AI-driven insights.",
    stack: ["React", "Node.js", "Video", "AI"],
    href: "#",
    gradient: "from-emerald-500/30 via-accent/20 to-transparent",
    icon: "🎓",
    image: "projects/sibme.webp",
    imageAlt: "Sibme professional development platform",
  },
  {
    title: "AI-Driven Arabic Telephony Solution",
    description:
      "Intelligent Arabic voice bot for real estate. Automates cold calls and culturally-aware dialogue to identify high-quality leads and scale outreach.",
    stack: ["AI", "Voice", "NLP", "Node.js"],
    href: "#",
    gradient: "from-amber-500/30 via-accent/20 to-transparent",
    icon: "🏠",
    image: "projects/Arabic.png",
  },
  {
    title: "Unified AI Cost Estimator",
    description:
      "Harmonizes outputs from Claude, Perplexity, and other AI models into one reliable source for construction budgeting. Consensus-based intelligence with explainable cost forecasts.",
    stack: ["AI", "Claude", "APIs", "Node.js"],
    href: "#",
    gradient: "from-blue-500/30 via-accent/20 to-transparent",
    icon: "📐",
    image: "projects/Cost estimation.png",
    imageAlt: "AI cost estimator interface",
  },
  {
    title: "Dental AI Concierge",
    description:
      "English-language AI voice assistant for dental practices. Automates outreach, lead generation, and the full appointment lifecycle from booking to follow-up.",
    stack: ["AI", "Voice", "Node.js", "Automation"],
    href: "#",
    gradient: "from-cyan-500/30 via-accent/20 to-transparent",
    icon: "🦷",
    image: "projects/Medical Voice Agent.png",
    imageAlt: "Dental AI Concierge voice agent",
  },
  {
    title: "Qanalyzer",
    description:
      "AI-powered text conversion tool that transforms raw data into actionable insights. Streamline analysis and turn content into clear, usable output.",
    stack: ["AI", "React", "Next.js", "Data"],
    href: "#",
    gradient: "from-violet-500/30 via-accent/20 to-transparent",
    icon: "✨",
    image: "projects/qanalyzer.png",
    imageAlt: "Qanalyzer AI text conversion tool",
  },
  {
    title: "FitFlow – Exercise Explorer",
    description:
      "React-based fitness app that lets users discover exercises by body part. Powered by RapidAPI for exercise data and YouTube videos for proper technique—with search and a clean, responsive UI.",
    stack: ["React", "RapidAPI", "YouTube API"],
    href: "#",
    gradient: "from-rose-500/30 via-accent/20 to-transparent",
    icon: "💪",
    image: "projects/fittness_app.png",
    imageAlt: "FitFlow exercise explorer app",
  },
  {
    title: "Weather App",
    description:
      "Modern weather forecasting app built with React 19. Search any city worldwide via GeoDB Cities API and get real-time conditions from OpenWeather—all in a sleek, responsive interface.",
    stack: ["React 19", "GeoDB", "OpenWeather"],
    href: "#",
    gradient: "from-sky-500/30 via-accent/20 to-transparent",
    icon: "🌤️",
    image: "projects/Weather_App.png",
    imageAlt: "Weather app interface",
  },
  {
    title: "Urban Galleria",
    description:
      "Online furniture store for modern home decor and furnishings. Browse categories, product details, and a smooth cart-to-checkout experience.",
    stack: ["Wordpress", "E-commerce", "UI/UX"],
    href: "#",
    gradient: "from-stone-500/30 via-accent/20 to-transparent",
    icon: "🛋️",
    image: "projects/furniture.png",
    imageAlt: "Urban Galleria online furniture store",
  },
  {
    title: "Home Restaurant",
    description:
      "Restaurant website and ordering platform. Browse the menu, place orders, and explore dining options from the comfort of home.",
    stack: ["Wordpress", "E-commerce", "UI/UX"],
    href: "#",
    gradient: "from-orange-500/30 via-accent/20 to-transparent",
    icon: "🍽️",
    image: "projects/restuarent.png",
    imageAlt: "Home Restaurant website and ordering platform",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Selected work</p>
        <h2 className="section-heading mb-16">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-surfaceElevated/60 backdrop-blur-sm overflow-hidden card-hover"
            >
              {/* Project image or gradient placeholder */}
              <div className="relative w-full aspect-video shrink-0 overflow-hidden bg-surface">
                {project.image ? (
                  <Image
                    src={`/${project.image}`}
                    alt={project.imageAlt ?? `${project.title} screenshot`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70 flex items-center justify-center`}
                  >
                    <span className="text-5xl opacity-90" aria-hidden>
                      {project.icon}
                    </span>
                  </div>
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  aria-hidden
                />
              </div>
              <div className="relative p-6 flex-1 flex flex-col">
                {project.image && (
                  <div className="text-2xl mb-2" aria-hidden>
                    {project.icon}
                  </div>
                )}
                <h3 className="font-display text-lg font-semibold text-white group-hover:text-accent transition-colors mb-1">
                  {project.title}
                </h3>
                {project.role && (
                  <p className="text-accent/90 text-xs font-mono uppercase tracking-wider mb-2">
                    {project.role}
                  </p>
                )}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-lg bg-white/10 text-gray-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 mt-3 text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View project
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
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
