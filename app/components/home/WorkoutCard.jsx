"use client";

import Link from "next/link";
import CategoryTag from "@/components/ui/CategoryTag";
import StatsRow from "@/components/ui/StatsRow";

export default function WorkoutCard({ workout }) {
  const {
    id,
    name,
    image,
    muscleGroups = [],
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <Link
      href={`/workout/${id}`}
      className="flex flex-col bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-lime-400/60 transition-colors"
    >
      {/* Illustration - full width, no padding/margin, touches all edges */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={name}
        className="w-full h-36 object-cover"
        style={{ display: "block", margin: 0, padding: 0 }}
      />

      <div className="p-3 space-y-2">
        {/* Category tags */}
        <div className="flex flex-wrap gap-1">
          {muscleGroups.map((tag) => (
            <CategoryTag key={tag} label={tag} />
          ))}
        </div>

        {/* Name */}
        <h3 className="uppercase font-bold text-sm leading-snug">{name}</h3>

        {/* Equipment */}
        <p className="text-xs text-neutral-500">{equipment}</p>

        {/* Stats row */}
        <StatsRow
          duration={duration}
          calories={caloriesBurned}
          rating={rating}
        />
      </div>
    </Link>
  );
}