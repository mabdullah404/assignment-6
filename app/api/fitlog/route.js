export async function GET() {
  try {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("FitLog upstream fetch failed:", res.status, text.slice(0, 200));
      return Response.json([], { status: 503 });
    }

    const data = await res.json();
    return Response.json(Array.isArray(data) ? data : data?.workouts ?? []);
  } catch (error) {
    console.error("Failed to fetch workouts:", error);
    return Response.json([], { status: 503 });
  }
}