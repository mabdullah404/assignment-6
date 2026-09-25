"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const links = [
    { href: "/", label: "Workout" },
    { href: "/my-plan", label: "My Plan" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">

          <div className="relative h-8 w-8 overflow-hidden rounded-md border border-[#1db6ff]/40 bg-[#09131d] p-1">
            <Image src="/assets/logo.png" alt="FitLog logo" fill className="object-contain" />
          </div>
          <div><h1 className="font-bold text-lg">FITLOG</h1></div>
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
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

        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-neutral-950"
          >
            Plan {plan.length}
          </Link>
          <Link
            href="/my-plan"
            className="rounded-full border border-neutral-600 px-3 py-1 text-xs font-semibold text-neutral-200"
          >
            Saved {saved.length}
          </Link>
        </div>
      </nav>
    </header>
  );
}