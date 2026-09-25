import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="border-2 border-dashed border-neutral-700 rounded-2xl flex flex-col items-center justify-center text-center py-20 px-4">
      <h3 className="font-oswald uppercase text-2xl font-bold mb-2">
        Nothing Here Yet
      </h3>
      <p className="text-neutral-400 text-sm mb-6 max-w-xs">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="bg-lime-400 text-neutral-950 font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-lime-300 transition-colors"
      >
        Go to workouts
      </Link>
    </div>
  );
}