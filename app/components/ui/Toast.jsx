export default function Toast({ message }) {
  return (
    <div className="bg-lime-400 text-neutral-950 text-sm font-semibold px-4 py-2 rounded-lg shadow-lg">
      {message}
    </div>
  );
}