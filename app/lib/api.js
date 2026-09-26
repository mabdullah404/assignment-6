const FITLOG_API_BASE = "https://api.api-store.workers.dev/api/fitlog";

export async function getAllWorkouts() {
  try {
    const url = typeof window === "undefined" ? FITLOG_API_BASE : "/api/fitlog";
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : data?.workouts ?? [];
  } catch (error) {
    console.error("Failed to fetch workouts:", error);
    return [];
  }
}

export async function getWorkoutById(id) {
  try {
    const url =
      typeof window === "undefined"
        ? `${FITLOG_API_BASE}/${id}`
        : `/api/fitlog/${id}`;
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data ?? null;
  } catch (error) {
    console.error("Failed to fetch workout:", error);
    return null;
  }
}