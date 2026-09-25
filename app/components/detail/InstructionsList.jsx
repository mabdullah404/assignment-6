export default function InstructionsList({ instructions = [] }) {
  return (
    <div>
      <h2 className="font-oswald uppercase text-lg font-bold mb-3">
        Instructions
      </h2>
      <ol className="space-y-3">
        {instructions.map((step, index) => (
          <li key={index} className="flex gap-3 text-sm text-neutral-300">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-lime-400 text-neutral-950 text-xs font-bold flex items-center justify-center">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}