export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("FitLog workout detail fetch failed:", res.status, text.slice(0, 200));
      return Response.json(null, { status: 503 });
    }

    const data = await res.json();
    return Response.json(data ?? null);
  } catch (error) {
    console.error("Failed to fetch workout detail:", error);
    return Response.json(null, { status: 503 });
  }
}