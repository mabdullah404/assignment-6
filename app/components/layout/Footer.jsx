import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-8 w-full border-t border-neutral-800 py-8 text-[11px] text-neutral-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="relative h-4 w-4 overflow-hidden rounded-sm border border-[#1db6ff]/40 bg-[#09131d]">
            <Image src="/assets/Vector.png" alt="FitLog logo" fill className="object-contain" />
          </div>
          <span className="font-bold  text-neutral-300 text-1xl">FITLOG</span>
        </div>
        <div className="text-right">© 2025 FitLog — Workout Library. Train hard, log honest.</div>
      </div>
    </footer>
  );
}
