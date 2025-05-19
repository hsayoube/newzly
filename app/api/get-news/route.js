import { API_URL, API_KEY } from "@/app/config";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || 'general';

    const response = await fetch(`${API_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to get news' }), { status: 500 });
    }

    const data = await response.json();

    if (data.status === "error") {
      return new Response(JSON.stringify({ error: data.message || 'Failed to get news' }), { status: 500 });
    }

    const articles = data.articles;

    // Apply cache headers: cache for 5 minutes (300s), allow stale while revalidating
    const headers = {
      'Content-Type': 'application/json',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate=60',
    };

    return new Response(JSON.stringify({ articles }), {
      status: 200,
      headers,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Unexpected error' }), { status: 500 });
  }
}
