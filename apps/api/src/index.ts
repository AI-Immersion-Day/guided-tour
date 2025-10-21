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

// Example API endpoint
app.get('/api/hello', (c) => {
  return c.json({ message: 'Hello from Hono API!' })
})

// Example route with parameters
app.get('/api/greet/:name', (c) => {
  const name = c.req.param('name')
  return c.json({ message: `Hello, ${name}!` })
})

// Example POST endpoint
app.post('/api/data', async (c) => {
  const body = await c.req.json()
  return c.json({ received: body, timestamp: new Date().toISOString() })
})

const port = 3001
console.log(`🚀 Hono API server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
