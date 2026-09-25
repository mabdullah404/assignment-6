"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext(null);

const PLAN_KEY = "fitlog_plan";
const SAVED_KEY = "fitlog_saved";
const MAX_PLAN_ITEMS = 5;

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const storedPlan = window.localStorage.getItem(PLAN_KEY);
      return storedPlan ? JSON.parse(storedPlan) : [];
    } catch (err) {
      console.error("Failed to load plan data from localStorage:", err);
      return [];
    }
  });

  const [saved, setSaved] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const storedSaved = window.localStorage.getItem(SAVED_KEY);
      return storedSaved ? JSON.parse(storedSaved) : [];
    } catch (err) {
      console.error("Failed to load saved data from localStorage:", err);
      return [];
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
    } catch (err) {
      console.error("Failed to save plan data:", err);
    }
  }, [plan]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
    } catch (err) {
      console.error("Failed to save 'saved' data:", err);
    }
  }, [saved]);

  function addToPlan(workout) {
    let added = false;
    setPlan((prev) => {
      if (prev.length >= MAX_PLAN_ITEMS) return prev;
      if (prev.some((w) => w.id === workout.id)) return prev;
      added = true;
      return [...prev, { ...workout, done: false }];
    });
    return added;
  }

  function addToSaved(workout) {
    let added = false;
    setSaved((prev) => {
      if (prev.some((w) => w.id === workout.id)) return prev;
      added = true;
      return [...prev, { ...workout, savedAt: Date.now() }];
    });
    return added;
  }

  function removeFromPlan(id) {
    setPlan((prev) => prev.filter((w) => w.id !== id));
  }

  function removeFromSaved(id) {
    setSaved((prev) => prev.filter((w) => w.id !== id));
  }

  function markPlanItemDone(id) {
    setPlan((prev) =>
      prev.map((w) => (w.id === id ? { ...w, done: !w.done } : w))
    );
  }

  function isPlanFull() {
    return plan.length >= MAX_PLAN_ITEMS;
  }

  function isInPlan(id) {
    return plan.some((w) => w.id === id);
  }

  function isInSaved(id) {
    return saved.some((w) => w.id === id);
  }

  const value = {
    plan,
    saved,
    addToPlan,
    addToSaved,
    removeFromPlan,
    removeFromSaved,
    markPlanItemDone,
    isPlanFull,
    isInPlan,
    isInSaved,
    MAX_PLAN_ITEMS,
  };

  return (
    <PlanContext.Provider value={value}>{children}</PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) {
    throw new Error("usePlan must be used within a PlanProvider");
  }
  return ctx;
}