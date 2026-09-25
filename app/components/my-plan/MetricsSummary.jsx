export default function MetricsSummary({ exercises, minutes, calories }) {
  const stats = [
    { label: "Exercises", value: exercises },
    { label: "Minutes", value: minutes },
    { label: "Calories", value: calories },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-neutral-900 border border-neutral-800 rounded-xl py-4 text-center"
        >
          <p className="text-2xl font-bold text-lime-400">{stat.value}</p>
          <p className="text-xs text-neutral-500 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}