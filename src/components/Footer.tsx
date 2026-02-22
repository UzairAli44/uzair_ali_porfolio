import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className="font-display text-lg font-bold text-white mb-1">Uzair Ali</p>
            <p className="text-sm text-muted max-w-xs">Building intelligent systems that drive results</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#hero" className="text-sm text-gray-300 hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="#about" className="text-sm text-gray-300 hover:text-accent transition-colors">About</Link></li>
                <li><Link href="#services" className="text-sm text-gray-300 hover:text-accent transition-colors">Services</Link></li>
                <li><Link href="#projects" className="text-sm text-gray-300 hover:text-accent transition-colors">Portfolio</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted mb-3">Connect</h4>
              <ul className="space-y-2">
                <li><a href="mailto:chuzairaliuzi877@gmail.com" className="text-sm text-gray-300 hover:text-accent transition-colors">Email</a></li>
                <li><a href="https://www.linkedin.com/in/uzair-ali-542775185/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href="tel:" className="text-sm text-gray-300 hover:text-accent transition-colors">Phone</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">© {year} Uzair Ali. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#hero" className="text-sm text-muted hover:text-accent transition-colors">Home</Link>
            <Link href="#about" className="text-sm text-muted hover:text-accent transition-colors">About</Link>
            <Link href="#services" className="text-sm text-muted hover:text-accent transition-colors">Services</Link>
            <Link href="#projects" className="text-sm text-muted hover:text-accent transition-colors">Portfolio</Link>
            <Link href="#experience" className="text-sm text-muted hover:text-accent transition-colors">Experience</Link>
            <Link href="#contact" className="text-sm text-muted hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
