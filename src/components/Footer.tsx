import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-gold-600/25 bg-cream-100 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row lg:px-8">
        <p className="flex items-baseline gap-2.5">
          <span className="font-script text-2xl font-semibold italic text-maroon-600">Goonj</span>
          <span className="font-display text-[0.62rem] uppercase tracking-[0.32em] text-gold-700">
            Kathak Dance Academy
          </span>
        </p>
        <p className="text-xs text-maroon-800/60">© {new Date().getFullYear()} Goonj Kathak Dance Academy, Indore</p>
      </div>
    </footer>);

}