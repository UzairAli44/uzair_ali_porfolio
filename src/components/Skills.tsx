"use client";

const techCategories = [
  {
    title: "AI & Backend",
    items: ["Node.js", "Express", "Java", "Spring Boot", "LangChain", "OpenAI", "Anthropic", "Python", "FastAPI"],
  },
  {
    title: "Databases & Cloud",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "GCP", "AWS"],
  },
  {
    title: "Frontend & UI",
    items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "No-Code & Automation",
    items: ["N8N", "Zapier", "Make", "Webflow", "Airtable", "Notion"],
  },
  {
    title: "Voice & Messaging",
    items: ["Twilio", "WhatsApp API", "Telegram Bot", "Azure Speech", "ElevenLabs", "Deepgram"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-mono text-sm uppercase tracking-wider mb-2">Technology Arsenal</p>
        <h2 className="section-title">Powered By World-Class Technologies</h2>
        <p className="section-subtitle mb-12 max-w-2xl">
          Building cutting-edge solutions with industry-leading tools and platforms trusted by top companies worldwide
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {techCategories.map((cat) => (
            <div
              key={cat.title}
              className="reveal p-6 rounded-xl bg-surfaceElevated border border-white/10 hover:border-accent/30 transition-colors"
            >
              <h3 className="font-display font-semibold text-accent mb-4 text-sm uppercase tracking-wider">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
