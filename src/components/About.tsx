export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-4xl mx-auto">
        <p className="section-label">Who I am</p>
        <h2 className="section-heading mb-12">About Me</h2>
        <div className="relative pl-6 sm:pl-8 border-l-2 border-accent/50 space-y-6">
          <p className="text-gray-400 text-lg leading-relaxed">
            I&apos;m a full stack developer with a passion for building fast,
            scalable, and user-friendly applications. I work across the entire
            stack—frontend with Angular and React, backend with Node.js, and
            full-stack with Next.js—and I also work in generative AI, building
            and integrating intelligent features into products.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            I care about clean code, performance, and great UX. When I&apos;m
            not coding, I like to stay updated with the latest in web tech and
            contribute to open source when I can.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          {["Full Stack", "Generative AI", "Clean Code", "Great UX"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-medium border border-white/10 bg-white/5 text-gray-300"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
