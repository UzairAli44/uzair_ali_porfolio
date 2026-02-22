"use client";

const jobs = [
  {
    initial: "Js Developer",
    role: "Full Stack Developer",
    company: "3S Solution",
    bullets: [
      "Leading creation of full-stack applications and AI-integrated features",
      "Boosted workflow efficiency through modern web solutions",
    ],
    stat: "Add your metric",
  },
  {
    initial: "UX",
    role: "Software Engineer",
    company: "TechnoVerse",
    bullets: [
      "Developed scalable web applications with React and Node.js",
      "Enhanced user engagement and system performance",
    ],
    stat: "Add your metric",
  },
  {
    initial: "UD",
    role: "Backend Developer",
    company: "PiCyfer",
    bullets: [
      "Engineered RESTful APIs and backend systems for production",
      "Reduced API response latency through optimized architecture",
    ],
    stat: "Add your metric",
  },
  {
    initial: "UI",
    role: "Software Engineering Intern",
    company: "Internship",
    bullets: [
      "Supported web and backend projects with focus on clean code",
      "Strengthened skills in structured development and collaboration",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-surfaceElevated">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent font-mono text-sm uppercase tracking-wider mb-2">Career Journey</p>
        <h2 className="section-title">Professional Experience</h2>
        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.company}
              className="reveal p-6 rounded-xl bg-surfaceElevated border border-white/10 hover:border-accent/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-accent text-sm">{job.initial}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white">{job.role}</h3>
                    <p className="text-sm text-muted">{job.company}</p>
                    <ul className="mt-3 space-y-1 text-sm text-gray-300 list-disc list-inside">
                      {job.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* {job.stat && (
                  <span className="text-sm font-medium text-accent shrink-0">{job.stat}</span>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
