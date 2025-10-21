import { useQuery } from "@tanstack/react-query"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"

interface Index {
  id: number
  name: string
  value: string
  change: string
  trend: string
}

interface MarketNews {
  id: number
  ticker: string
  headline: string
  time: string
  sentiment: string
}

async function fetchIndices(): Promise<Index[]> {
  const response = await fetch(`${API_URL}/api/indices`)
  if (!response.ok) {
    throw new Error("Failed to fetch indices")
  }
  return response.json()
}

async function fetchMarketNews(): Promise<MarketNews[]> {
  const response = await fetch(`${API_URL}/api/market-news`)
  if (!response.ok) {
    throw new Error("Failed to fetch market news")
  }
  return response.json()
}

export function useIndices() {
  return useQuery({
    queryKey: ["indices"],
    queryFn: fetchIndices,
  })
}

export function useMarketNews() {
  return useQuery({
    queryKey: ["market-news"],
    queryFn: fetchMarketNews,
  })
}
