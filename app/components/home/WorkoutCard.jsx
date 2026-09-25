import Image from "next/image";
import Link from "next/link";

export default function WorkoutCard({ workout }) {
  const tags = workout.muscleGroups?.slice(0, 2) ?? ["Core"];

  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-neutral-800 bg-[#090f18] shadow-[0_0_20px_rgba(0,0,0,0.3)] transition duration-200 hover:-translate-y-0.5 hover:border-neutral-700"
    >
      <div className="relative h-[220px] w-full overflow-hidden bg-neutral-800">
        <Image
          src="/assets/LibraryCard.png"
          alt={workout.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02070d] via-[#02070d]/5 to-transparent" />
      </div>

      <div className="space-y-3 p-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {tags.map((group) => (
              <span
                key={group}
                className="rounded-full border border-[#a9ff55]/40 bg-[#a9ff55]/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#d9ff8d]"
              >
                {group}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-lg font-black uppercase tracking-[-0.04em] text-white">
          {workout.name}
        </h3>

        <div className="flex items-center justify-between gap-3 border-t border-neutral-800 pt-2 text-[11px] text-neutral-300">
          <span className="inline-flex items-center gap-1">
            <span>⏱</span>
            {workout.duration} min
          </span>
          <span className="inline-flex items-center gap-1">
            <span>🔥</span>
            {workout.caloriesBurned} kcal
          </span>
          <span className="inline-flex items-center gap-1">
            <span>★</span>
            {workout.rating?.toFixed(1) ?? "4.8"}
          </span>
        </div>
      </div>
    </Link>
  );
}
