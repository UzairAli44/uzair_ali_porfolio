"use client";

const steps = [
  { num: "01", title: "Strategize", desc: "Understand your vision, define goals, and craft a roadmap for success" },
  { num: "02", title: "Design", desc: "Create intuitive architectures and user experiences that delight" },
  { num: "03", title: "Develop", desc: "Build robust, scalable solutions with modern technologies" },
  { num: "04", title: "Test", desc: "Ensure quality, performance, and reliability at every level" },
  { num: "05", title: "Launch", desc: "Deploy seamlessly and optimize for peak performance" },
  { num: "06", title: "Scale", desc: "Iterate, improve, and expand with confidence and agility" },
];

export default function HowIWork() {
  return (
    <section id="process" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent font-mono text-sm uppercase tracking-wider mb-2">How I Work</p>
        <h2 className="section-title">
          A Streamlined Process,<br />Built for Results
        </h2>
        <p className="section-subtitle mb-12">Clear steps that keep projects on track</p>
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="reveal flex gap-6 p-6 rounded-xl bg-surfaceElevated border border-white/10 hover:border-accent/30 transition-colors"
            >
              <span className="font-mono text-2xl font-bold text-accent shrink-0">{step.num}</span>
              <div>
                <h3 className="font-display font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
