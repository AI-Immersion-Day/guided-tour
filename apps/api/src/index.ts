import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Enable CORS for web app communication
app.use('/*', cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}))

// Health check endpoint
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Hello world endpoint - receives name and returns greeting
app.post('/api/hello', async (c) => {
  const body = await c.req.json()
  const { name } = body
  
  if (!name || typeof name !== 'string' || !name.trim()) {
    return c.json({ error: 'Name is required' }, 400)
  }
  
  return c.json({ message: `Hello ${name.trim()}!` })
})

const port = 3001
console.log(`🚀 Hono API server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
