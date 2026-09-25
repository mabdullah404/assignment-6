export default function Badge({ children, variant = "filled" }) {
  const base = "px-3 py-1 rounded-full text-xs font-semibold";
  const styles =
    variant === "filled"
      ? "bg-lime-400 text-neutral-950"
      : "border border-neutral-600 text-neutral-200";

  return <span className={`${base} ${styles}`}>{children}</span>;
}