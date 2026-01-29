
"use client";
import React, { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Meet the Doctor", href: "#doctor" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <span className="font-bold text-lg tracking-tight text-blue-700 dark:text-blue-300">Hawai'i Mobile Dental</span>
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block w-6 h-0.5 bg-blue-700 dark:bg-blue-300 mb-1 transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-blue-700 dark:bg-blue-300 mb-1 transition-opacity ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-blue-700 dark:bg-blue-300 transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        <ul className="hidden sm:flex gap-6 text-base font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="sm:hidden flex flex-col gap-4 px-6 pb-4 bg-white/95 dark:bg-black/95 border-b border-zinc-200 dark:border-zinc-800 shadow-md animate-fade-in-down">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
