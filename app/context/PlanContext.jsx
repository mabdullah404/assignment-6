"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext(null);

const PLAN_KEY = "fitlog_plan";
const SAVED_KEY = "fitlog_saved";
const MAX_PLAN_ITEMS = 5;

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const storedPlan = window.localStorage.getItem(PLAN_KEY);
      const storedSaved = window.localStorage.getItem(SAVED_KEY);

      setPlan(storedPlan ? JSON.parse(storedPlan) : []);
      setSaved(storedSaved ? JSON.parse(storedSaved) : []);
    } catch (err) {
      console.error("Failed to load saved plan data from localStorage:", err);
      setPlan([]);
      setSaved([]);
    } finally {
      setHydrated(true);
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (typeof window === "undefined" || !hydrated) return;
    try {
      window.localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
    } catch (err) {
      console.error("Failed to save plan data:", err);
    }
  }, [plan, hydrated]);

  useEffect(() => {
    if (typeof window === "undefined" || !hydrated) return;
    try {
      window.localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
    } catch (err) {
      console.error("Failed to save 'saved' data:", err);
    }
  }, [saved, hydrated]);

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