export default function PlanTabs({ activeTab, onChange, planCount, savedCount }) {
  const tabs = [
    { key: "plan", label: "Today's Plan" },
    { key: "saved", label: "Saved" },
  ];

  return (
    <div className="inline-flex items-center gap-1 bg-neutral-900 border border-neutral-800 rounded-full p-1">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeTab === tab.key
              ? "bg-neutral-700 text-white font-semibold"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}