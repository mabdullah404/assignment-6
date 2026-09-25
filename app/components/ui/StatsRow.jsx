export default function StatsRow({ duration, calories, rating }) {
  return (
    <div className="flex items-center gap-3 text-xs text-neutral-400">
      {duration != null && (
        <span className="flex items-center gap-1">⏱ {duration} min</span>
      )}
      {calories != null && (
        <span className="flex items-center gap-1">🔥 {calories} kcal</span>
      )}
      {rating != null && (
        <span className="flex items-center gap-1">⭐ {rating}</span>
      )}
    </div>
  );
}