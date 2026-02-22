"use client";

export default function Contact() {
  return (
    <>
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to start working together?
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Transform your ideas into intelligent systems that drive results. Whether you&apos;re a startup, enterprise, or visionary team—let&apos;s build something amazing.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-gray-900 font-semibold hover:bg-accentDim transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-surfaceElevated">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent font-mono text-sm uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="section-title">
            Let&apos;s Build Something<br />Amazing
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <a
              href="mailto:chuzairaliuzi877@gmail.com"
              className="reveal block p-6 rounded-xl bg-surfaceElevated border border-white/10 hover:border-accent/30 transition-all"
            >
              <h3 className="font-display font-semibold text-white mb-2">Email</h3>
              <span className="text-sm text-gray-300 break-all">chuzairaliuzi877@gmail.com</span>
            </a>
            <a
              href="tel:"
              className="reveal block p-6 rounded-xl bg-surfaceElevated border border-white/10 hover:border-accent/30 transition-all"
            >
              <h3 className="font-display font-semibold text-white mb-2">Phone</h3>
              <span className="text-sm text-gray-300">+923002614702</span>
            </a>
            <a
              href="https://www.linkedin.com/in/uzair-ali-542775185/"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal block p-6 rounded-xl bg-surfaceElevated border border-white/10 hover:border-accent/30 transition-all"
            >
              <h3 className="font-display font-semibold text-white mb-2">LinkedIn</h3>
              <span className="text-sm text-gray-300">Connect on LinkedIn</span>
            </a>
            <a
              href="https://wa.me/923002614702"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal block p-6 rounded-xl bg-surfaceElevated border border-white/10 hover:border-accent/30 transition-all"
            >
              <h3 className="font-display font-semibold text-white mb-2">WhatsApp</h3>
              <span className="text-sm text-gray-300">Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
