import LibrarySection from "@/components/home/LibrarySection";
import { getAllWorkouts } from "@/lib/api";

export default async function WorkoutPage() {
  const workouts = await getAllWorkouts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#dfe8f4] opacity-80">
          Workout library
        </p>
        <h1 className="mt-2 text-3xl font-black uppercase tracking-[-0.04em] text-white">
          The library
        </h1>
      </div>

      <LibrarySection workouts={workouts} />
    </div>
  );
}
