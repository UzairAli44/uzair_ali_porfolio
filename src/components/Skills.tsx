const skillGroups = [
  {
    title: "Frontend",
    icon: "⚛",
    gradient: "from-cyan-500/20 to-accent/20",
    items: [
      { name: "Angular", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "HTML / CSS", level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    icon: "🖥",
    gradient: "from-emerald-500/20 to-accent/20",
    items: [
      { name: "Node.js", level: "Advanced" },
      { name: "REST APIs", level: "Advanced" },
      { name: "SQL", level: "Proficient" },
      { name: "NoSQL", level: "Proficient" },
      { name: "MongoDB", level: "Proficient" },


    ],
  },
  {
    title: "Generative AI",
    icon: "✨",
    gradient: "from-violet-500/20 to-accent/20",
    items: [
      { name: "LLM Integration", level: "Proficient" },
      { name: "Prompt Engineering", level: "Proficient" },
      { name: "AI APIs", level: "Proficient" },
    ],
  },
  {
    title: "Tools & More",
    icon: "🛠",
    gradient: "from-amber-500/20 to-accent/20",
    items: [
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Proficient" },
      { name: "Testing", level: "Proficient" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-surfaceElevated/40 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <p className="section-label">What I work with</p>
        <h2 className="section-heading mb-16">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="group relative p-6 rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-sm card-hover overflow-hidden"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl" aria-hidden>
                    {group.icon}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between items-center text-sm text-gray-300"
                    >
                      <span>{item.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-muted">
                        {item.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
