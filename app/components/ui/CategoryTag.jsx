export default function CategoryTag({ label }) {
  return (
    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide bg-lime-400 text-neutral-950">
      {label?.toUpperCase()}
    </span>
  );
}