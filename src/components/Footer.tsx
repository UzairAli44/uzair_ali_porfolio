import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-10 px-6 border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-gray-500 text-sm">
          © {year} <span className="text-gray-400 font-medium">Uzair Ali</span>.
          Built with Next.js.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="#hero"
            className="text-sm text-gray-500 hover:text-accent transition-colors inline-flex items-center gap-1"
          >
            Back to top
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
