const API_URL = "https://api.abcz.workers.dev/api/fitlog";

async function fetchJson(url) {
  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return response.json();
}

export async function getAllWorkouts() {
  return fetchJson(API_URL);
}

export async function getWorkoutById(id) {
  try {
    return await fetchJson(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Workout not found:", error);
    return null;
  }
}
