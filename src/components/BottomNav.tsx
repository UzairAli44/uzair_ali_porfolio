"use client";

import Link from "next/link";

const navItems = [
  { href: "#hero", label: "Home", icon: "home" },
  { href: "#about", label: "About", icon: "user" },
  { href: "#services", label: "Services", icon: "briefcase" },
  { href: "#projects", label: "Portfolio", icon: "monitor" },
  { href: "#experience", label: "Experience", icon: "map" },
  { href: "#contact", label: "Contact", icon: "mail", highlight: true },
];

function Icon({ name, highlight }: { name: string; highlight?: boolean }) {
  const className = "w-5 h-5";
  if (name === "home")
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    );
  if (name === "user")
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    );
  if (name === "briefcase")
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  if (name === "monitor")
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  if (name === "map")
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  if (name === "mail")
    return (
      <svg className={className} fill={highlight ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  return null;
}

export default function BottomNav() {
  return (
    <nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-4 py-3 rounded-full bg-surfaceElevated/95 backdrop-blur-md border border-white/10 shadow-nav-glow"
      style={{ boxShadow: "0 -4px 24px -2px rgba(34, 197, 94, 0.35), 0 4px 24px -4px rgba(0,0,0,0.5)" }}
      aria-label="Main navigation"
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex flex-col items-center justify-center gap-1 min-w-[64px] py-2 px-3 rounded-full transition-colors ${
            item.highlight
              ? "bg-accent text-gray-900 shadow-glow-yellow"
              : "text-white hover:bg-white/10"
          }`}
        >
          <Icon name={item.icon} highlight={item.highlight} />
          <span className="text-xs font-medium">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
