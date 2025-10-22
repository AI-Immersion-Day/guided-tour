import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { getIndices, getMarketNews } from './db.js'

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

// Market data endpoints
app.get('/api/indices', (c) => {
  try {
    const indices = getIndices()
    return c.json(indices)
  } catch (error) {
    console.error('Error fetching indices:', error)
    return c.json({ error: 'Failed to fetch indices' }, 500)
  }
})

app.get('/api/market-news', (c) => {
  try {
    const news = getMarketNews()
    return c.json(news)
  } catch (error) {
    console.error('Error fetching market news:', error)
    return c.json({ error: 'Failed to fetch market news' }, 500)
  }
})

const port = 3001
console.log(`🚀 Hono API server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
