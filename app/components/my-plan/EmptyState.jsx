import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center text-center py-16 px-4">
      <h3 className="font-oswald uppercase text-xl font-bold mb-2">
        Nothing Here Yet
      </h3>
      <p className="text-neutral-400 text-sm mb-6 max-w-xs">
        Browse the library and add a lift to get today moving.
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