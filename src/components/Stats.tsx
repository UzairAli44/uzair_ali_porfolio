const stats = [
  { value: "65%", label: "Average Productivity Gain" },
  { value: "27+", label: "Solutions Deployed" },
  { value: "100%", label: "Happy Clients" },
];

export default function Stats() {
  return (
    <section className="py-12 px-6 bg-surfaceElevated border-y border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal">
              <div className="font-display text-3xl sm:text-4xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-sm text-muted mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
