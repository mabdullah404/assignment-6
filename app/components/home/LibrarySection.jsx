import WorkoutCard from "@/components/home/WorkoutCard";

export default function LibrarySection({ workouts }) {
  return (
    <section className="mt-8 overflow-hidden rounded-[10px] border border-neutral-800 bg-[#050b12] p-4 sm:p-5">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#dfe8f4] opacity-80">
            Workout library
          </p>
          <h2 className="mt-2 text-2xl font-black uppercase tracking-[-0.04em] text-white">
            The library
          </h2>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}
