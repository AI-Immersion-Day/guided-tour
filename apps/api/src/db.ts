import Database from 'better-sqlite3'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Initialize database
const dbPath = join(__dirname, '..', 'trading.db')
const db = new Database(dbPath)

// Enable WAL mode for better concurrent access
db.pragma('journal_mode = WAL')

// Initialize tables
function initializeTables() {
  // Create indices table
  db.exec(`
    CREATE TABLE IF NOT EXISTS indices (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      value TEXT NOT NULL,
      change TEXT NOT NULL,
      trend TEXT NOT NULL
    )
  `)

  // Create market_news table
  db.exec(`
    CREATE TABLE IF NOT EXISTS market_news (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ticker TEXT NOT NULL,
      headline TEXT NOT NULL,
      time TEXT NOT NULL,
      sentiment TEXT NOT NULL
    )
  `)
}

// Bootstrap with sample data if tables are empty
function bootstrapData() {
  const indicesCount = db.prepare('SELECT COUNT(*) as count FROM indices').get() as { count: number }
  
  if (indicesCount.count === 0) {
    console.log('Bootstrapping indices data...')
    const insertIndex = db.prepare(`
      INSERT INTO indices (name, value, change, trend)
      VALUES (?, ?, ?, ?)
    `)

    const indices = [
      { name: "S&P 500", value: "4,783.45", change: "+1.24%", trend: "up" },
      { name: "NASDAQ", value: "15,011.35", change: "+1.67%", trend: "up" },
      { name: "DOW", value: "37,545.33", change: "+0.89%", trend: "up" },
      { name: "Russell 2000", value: "2,045.67", change: "+0.95%", trend: "up" },
      { name: "VIX", value: "13.45", change: "-2.15%", trend: "down" },
    ]

    const insertMany = db.transaction((indices) => {
      for (const index of indices) {
        insertIndex.run(index.name, index.value, index.change, index.trend)
      }
    })

    insertMany(indices)
    console.log(`✅ Bootstrapped ${indices.length} indices`)
  }

  const newsCount = db.prepare('SELECT COUNT(*) as count FROM market_news').get() as { count: number }
  
  if (newsCount.count === 0) {
    console.log('Bootstrapping market news data...')
    const insertNews = db.prepare(`
      INSERT INTO market_news (ticker, headline, time, sentiment)
      VALUES (?, ?, ?, ?)
    `)

    const newsData = [
      {
        ticker: "AAPL",
        headline: "Apple announces new AI features for iPhone",
        time: "2 hours ago",
        sentiment: "positive",
      },
      {
        ticker: "TSLA",
        headline: "Tesla reports record quarterly deliveries",
        time: "4 hours ago",
        sentiment: "positive",
      },
      {
        ticker: "MSFT",
        headline: "Microsoft expands cloud infrastructure globally",
        time: "5 hours ago",
        sentiment: "positive",
      },
      {
        ticker: "GOOGL",
        headline: "Alphabet faces regulatory scrutiny in EU",
        time: "6 hours ago",
        sentiment: "negative",
      },
      {
        ticker: "AMZN",
        headline: "Amazon Prime membership hits new milestone",
        time: "8 hours ago",
        sentiment: "positive",
      },
      {
        ticker: "NVDA",
        headline: "NVIDIA chip demand continues to surge",
        time: "10 hours ago",
        sentiment: "positive",
      },
    ]

    const insertMany = db.transaction((news) => {
      for (const item of news) {
        insertNews.run(item.ticker, item.headline, item.time, item.sentiment)
      }
    })

    insertMany(newsData)
    console.log(`✅ Bootstrapped ${newsData.length} market news items`)
  }
}

// Initialize database on module load
initializeTables()
bootstrapData()

// Query functions
export function getIndices() {
  return db.prepare('SELECT * FROM indices ORDER BY id').all()
}

export function getMarketNews() {
  return db.prepare('SELECT * FROM market_news ORDER BY id').all()
}

export { db }
