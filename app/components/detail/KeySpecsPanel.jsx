export default function KeySpecsPanel({ workout }) {
  const { equipment, difficulty, sets, reps, duration, caloriesBurned, rating } =
    workout;

  const specs = [
    { label: "Equipment", value: equipment },
    { label: "Difficulty", value: difficulty },
    { label: "Sets", value: sets },
    { label: "Reps", value: reps },
    { label: "Duration", value: `${duration} min` },
    { label: "Calories", value: `${caloriesBurned} kcal` },
    { label: "Rating", value: rating },
  ];

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl divide-y divide-neutral-800">
      {specs.map((spec) => (
        <div
          key={spec.label}
          className="flex items-center justify-between px-4 py-2.5 text-sm"
        >
          <span className="text-neutral-500">{spec.label}</span>
          <span className="font-medium text-white">{spec.value}</span>
        </div>
      ))}
    </div>
  );
}