import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-32 px-4">
      <h1 className="font-oswald uppercase text-5xl font-bold text-lime-400 mb-4">
        404
      </h1>
      <p className="text-neutral-400 text-sm mb-6 max-w-xs">
        This page doesn&apos;t exist. Let&apos;s get you back to the library.
      </p>
      <Link
        href="/"
        className="bg-lime-400 text-neutral-950 font-semibold text-sm px-5 py-3 rounded-full hover:bg-lime-300 transition-colors"
      >
        Go to workouts
      </Link>
    </div>
  );
}