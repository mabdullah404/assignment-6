"use client";

import { usePlan } from "@/context/PlanContext";
import { useToast } from "@/context/ToastContext";

export default function ActionButtons({ workout }) {
  const { addToPlan, addToSaved, isInPlan, isInSaved, isPlanFull } = usePlan();
  const { showToast } = useToast();

  const alreadyInPlan = isInPlan(workout.id);
  const alreadyInSaved = isInSaved(workout.id);
  const planFull = isPlanFull();

  function handleAddToPlan() {
    if (alreadyInPlan || planFull) return;
    const added = addToPlan(workout);
    if (added) {
      showToast("Added to today's plan");
    }
  }

  function handleSaveForLater() {
    if (alreadyInSaved) return;
    const added = addToSaved(workout);
    if (added) {
      showToast("Saved for later");
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        onClick={handleAddToPlan}
        disabled={alreadyInPlan || planFull}
        className="flex-1 flex items-center justify-center gap-2 bg-lime-400 text-neutral-950 font-semibold text-sm px-5 py-3 rounded-full hover:bg-lime-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        ➕{" "}
        {alreadyInPlan
          ? "Already in plan"
          : planFull
          ? "Plan is full (5/5)"
          : "Add to today's plan"}
      </button>
      <button
        onClick={handleSaveForLater}
        disabled={alreadyInSaved}
        className="flex-1 flex items-center justify-center gap-2 border border-neutral-600 text-neutral-200 font-semibold text-sm px-5 py-3 rounded-full hover:border-lime-400 hover:text-lime-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        🔖 {alreadyInSaved ? "Already saved" : "Save for later"}
      </button>
    </div>
  );
}