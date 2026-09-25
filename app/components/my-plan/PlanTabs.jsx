export default function PlanTabs({ activeTab, onChange, planCount, savedCount }) {
  const tabs = [
    { key: "plan", label: `Today's Plan (${planCount})` },
    { key: "saved", label: `Saved (${savedCount})` },
  ];

  return (
    <div className="flex gap-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
            activeTab === tab.key
              ? "bg-lime-400 text-neutral-950"
              : "bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}