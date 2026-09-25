"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getWorkoutById } from "@/lib/api";
import CategoryTag from "@/components/ui/CategoryTag";
import KeySpecsPanel from "@/components/detail/KeySpecsPanel";
import InstructionsList from "@/components/detail/InstructionsList";
import ActionButtons from "@/components/detail/ActionButtons";

export default function WorkoutDetailPage() {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    getWorkoutById(id)
      .then((data) => {
        if (isMounted) setWorkout(data);
      })
      .catch((err) => {
        console.error(err);
        if (isMounted) setError("Workout not found.");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <span className="loading loading-spinner loading-lg text-lime-400"></span>
      </div>
    );
  }

  if (error || !workout) {
    return (
      <div className="text-center py-24 text-neutral-400">{error}</div>
    );
  }

  const { name, image, muscleGroups = [], description } = workout;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-2 gap-10">
      <div className="bg-neutral-900 rounded-xl overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="space-y-5">
        <h1 className="font-oswald uppercase text-3xl sm:text-4xl font-bold">
          {name}
        </h1>
        <p className="text-neutral-400 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2">
          {muscleGroups.map((tag) => (
            <CategoryTag key={tag} label={tag} />
          ))}
        </div>

        <KeySpecsPanel workout={workout} />
        <InstructionsList instructions={workout.instructions} />
        <ActionButtons workout={workout} />
      </div>
    </div>
  );
}