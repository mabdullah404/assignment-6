"use client";

import Link from "next/link";
import StatsRow from "@/components/ui/StatsRow";

export default function PlanCard({
  workout,
  showDoneButton,
  onMarkDone,
  onRemove,
}) {
  const { id, name, image, equipment, duration, caloriesBurned, rating, done } =
    workout;

  return (
    <div className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
      />

      <div className="flex-1 min-w-0">
        <h3
          className={`uppercase font-bold text-sm truncate ${
            done ? "line-through text-neutral-500" : ""
          }`}
        >
          {name}
        </h3>
        <p className="text-xs text-neutral-500 truncate">{equipment}</p>
        <StatsRow duration={duration} calories={caloriesBurned} rating={rating} />
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <Link
          href={`/workout/${id}`}
          className="text-xs font-semibold px-3 py-1.5 rounded-full border border-neutral-600 text-neutral-300 hover:border-lime-400 hover:text-lime-400 transition-colors"
        >
          View
        </Link>

        {showDoneButton && (
          <button
            onClick={() => onMarkDone(id)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
              done
                ? "bg-lime-400 text-neutral-950"
                : "border border-neutral-600 text-neutral-300 hover:border-lime-400 hover:text-lime-400"
            }`}
          >
            ✓
          </button>
        )}

        <button
          onClick={() => onRemove(id)}
          className="text-xs font-semibold w-7 h-7 flex items-center justify-center rounded-full border border-neutral-600 text-neutral-400 hover:border-red-400 hover:text-red-400 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}