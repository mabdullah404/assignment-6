import Hero from "@/components/home/Hero";
import LibrarySection from "@/components/home/LibrarySection";
import { getAllWorkouts } from "@/lib/api";

export default async function HomePage() {
  const workouts = await getAllWorkouts();

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Hero totalWorkouts={workouts.length} />
        <LibrarySection workouts={workouts} />
      </div>
    </div>
  );
}
