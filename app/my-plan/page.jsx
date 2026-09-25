"use client";

import { useMemo, useState } from "react";
import { usePlan } from "@/context/PlanContext";
import { useToast } from "@/context/ToastContext";
import MetricsSummary from "@/components/my-plan/MetricsSummary";
import PlanTabs from "@/components/my-plan/PlanTabs";
import PlanCard from "@/components/my-plan/PlanCard";
import EmptyState from "@/components/my-plan/EmptyState";
import SortDropdown from "@/components/my-plan/SortDropdown";

const PLAN_SORT_OPTIONS = [
  { key: "duration", label: "Duration" },
  { key: "caloriesBurned", label: "Calories" },
  { key: "rating", label: "Rating" },
];

const SAVED_SORT_OPTIONS = [
  { key: "savedAt", label: "Recently Added" },
  { key: "duration", label: "Duration" },
  { key: "caloriesBurned", label: "Calories" },
  { key: "rating", label: "Rating" },
];

export default function MyPlanPage() {
  const { plan, saved, removeFromPlan, removeFromSaved, markPlanItemDone } =
    usePlan();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const currentOptions =
    activeTab === "plan" ? PLAN_SORT_OPTIONS : SAVED_SORT_OPTIONS;
  const activeSortKey = currentOptions.some((option) => option.key === sortBy)
    ? sortBy
    : "duration";

  const list = activeTab === "plan" ? plan : saved;

  const sortedList = useMemo(() => {
    return [...list].sort((a, b) => {
      const valueA = a[activeSortKey] ?? 0;
      const valueB = b[activeSortKey] ?? 0;
      return valueB - valueA;
    });
  }, [list, activeSortKey]);

  const totals = useMemo(() => {
    return plan.reduce(
      (acc, w) => ({
        exercises: acc.exercises + 1,
        minutes: acc.minutes + (w.duration || 0),
        calories: acc.calories + (w.caloriesBurned || 0),
      }),
      { exercises: 0, minutes: 0, calories: 0 }
    );
  }, [plan]);

  function handleRemove(id) {
    if (activeTab === "plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
    showToast("Removed");
  }

  function handleMarkDone(id) {
    markPlanItemDone(id);
    showToast("Marked as done");
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-oswald uppercase text-3xl font-bold mb-1">
        My Plan
      </h1>
      <p className="text-neutral-400 text-sm mb-6">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <MetricsSummary
        exercises={totals.exercises}
        minutes={totals.minutes}
        calories={totals.calories}
      />

      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <PlanTabs
          activeTab={activeTab}
          onChange={(tab) => {
            setActiveTab(tab);
            setSortBy("duration");
          }}
          planCount={plan.length}
          savedCount={saved.length}
        />
        <SortDropdown
          options={currentOptions}
          sortBy={activeSortKey}
          onChange={setSortBy}
        />
      </div>

      {sortedList.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-3">
          {sortedList.map((workout) => (
            <PlanCard
              key={workout.id}
              workout={workout}
              showDoneButton={activeTab === "plan"}
              onMarkDone={handleMarkDone}
              onRemove={handleRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
}
