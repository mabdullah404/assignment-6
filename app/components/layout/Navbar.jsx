"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();
  const [menuOpen, setMenuOpen] = useState(false);

  const planCount = plan.length;
  const savedCount = saved.length;

  const links = [
    { href: "/", label: "Workout" },
    { href: "/my-plan", label: "My Plan" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/assets/logo.png" alt="FITLOG Logo" width={20} height={32} />
          <span className="font-bold tracking-wide text-white">FITLOG</span>
        </Link>

        {/* Nav links - middle (desktop only) */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-lime-400"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side badges + mobile menu button */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="px-3 py-1 rounded-full text-xs font-semibold bg-lime-400 text-neutral-950"
          >
            Plan {planCount}
          </Link>
          <Link
            href="/my-plan"
            className="px-3 py-1 rounded-full text-xs font-semibold border border-neutral-600 text-neutral-200"
          >
            Saved {savedCount}
          </Link>

          {/* Hamburger - mobile only */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="sm:hidden ml-1 w-8 h-8 flex items-center justify-center text-neutral-300 text-lg"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-neutral-800 px-4 py-3 flex flex-col gap-3">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium ${
                  isActive ? "text-lime-400" : "text-neutral-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}