"use client";

const values = [
  { icon: "💡", title: "Innovation" },
  { icon: "🤝", title: "Collaboration" },
  { icon: "🎯", title: "Precision" },
  { icon: "✨", title: "Impact" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-surfaceElevated">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent font-mono text-sm uppercase tracking-wider mb-2">About Me</p>
        <h2 className="section-title">
          Innovate with Intelligence,<br />Build with Purpose
        </h2>
        <div className="mt-8 space-y-6 text-gray-300 leading-relaxed reveal">
          <p>
            I&apos;m <strong className="text-white">Uzair Ali</strong>, a Full Stack Developer passionate about creating intelligent systems and applications that drive real business value.
          </p>
          <p>
            I specialize in <strong className="text-white">full-stack web development</strong>, <strong className="text-white">Generative AI</strong>, and backend architectures using React, Next.js, Angular, and Node.js. My focus is on building smart, scalable solutions that streamline workflows and enhance real-world efficiency.
          </p>
          <p>
            Driven by curiosity and creativity, I transform complex ideas into seamless, high-impact systems that help businesses scale and succeed.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {values.map((v) => (
            <div
              key={v.title}
              className="reveal p-4 rounded-xl bg-surfaceElevated border border-white/10 text-center hover:border-accent/30 transition-colors"
            >
              <span className="text-2xl block mb-2" aria-hidden>{v.icon}</span>
              <h4 className="font-display font-semibold text-white text-sm">{v.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
