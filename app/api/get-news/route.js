import { API_URL, API_KEY } from "@/app/config"

export async function GET() {
    try {
        const response = await fetch(`${API_URL}/top-headlines?country=us&apiKey=${API_KEY}`)
    
        if (!response.ok) {
            return new Response(JSON.stringify({ error: 'Failed to get news' }), { status: 500 })
        }
        
        const data = await response.json()
        
        if (data.status === "error") {
            return new Response(JSON.stringify({ error: data.message || 'Failed to get news' }), { status: 500 })
        }
    
        const articles = data.articles
    
        return new Response(JSON.stringify({ articles }), { status: 200 })
    } catch (err) {
        return new Response(JSON.stringify({ error: 'Unexpected error' }), { status: 500 })
    }
}