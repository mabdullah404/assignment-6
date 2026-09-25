"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved, hydrated } = usePlan();

  const planCount = hydrated ? plan.length : 0;
  const savedCount = hydrated ? saved.length : 0;

  const links = [
    { href: "/", label: "Workout" },
    { href: "/my-plan", label: "My Plan" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/assets/logo.png" alt="FITLOG Logo" width={25} height={32} />
          <span className="font-bold tracking-wide text-white">FITLOG</span>
        </Link>

        {/* Nav links - middle */}
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

        {/* Right side badges */}
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
        </div>
      </nav>
    </header>
  );
}