"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, Activity, Newspaper } from "lucide-react"

const marketData = [
  { value: 100 },
  { value: 105 },
  { value: 103 },
  { value: 108 },
  { value: 112 },
  { value: 110 },
  { value: 115 },
]

const indices = [
  { name: "S&P 500", value: "4,783.45", change: "+1.24%", trend: "up" },
  { name: "NASDAQ", value: "15,011.35", change: "+1.67%", trend: "up" },
  { name: "DOW", value: "37,545.33", change: "+0.89%", trend: "up" },
  { name: "Russell 2000", value: "2,045.67", change: "+0.95%", trend: "up" },
  { name: "VIX", value: "13.45", change: "-2.15%", trend: "down" },
]

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

export function MarketOverview() {
  return (
    <Card className="border-border/50">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <Activity className="h-5 w-5 text-accent" />
          Market Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="indices" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-4">
            <TabsTrigger
              value="indices"
              className="text-sm data-[state=active]:ring-2 data-[state=active]:ring-accent/50"
            >
              Indices
            </TabsTrigger>
            <TabsTrigger value="news" className="text-sm data-[state=active]:ring-2 data-[state=active]:ring-accent/50">
              Market News
            </TabsTrigger>
          </TabsList>

          <TabsContent value="indices" className="mt-0">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {indices.map((index) => (
                <div key={index.name} className="rounded-lg border border-border/50 bg-card/50 p-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{index.name}</p>
                    <p className="text-xl font-bold text-foreground">{index.value}</p>
                    <p
                      className={`flex items-center gap-1 text-sm font-medium ${
                        index.trend === "up" ? "text-green-600 dark:text-green-400" : "text-destructive"
                      }`}
                    >
                      {index.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      {index.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="news" className="mt-0">
            <div className="space-y-3">
              {newsData.map((news, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-lg border border-border/50 bg-card/50 p-4 transition-colors hover:bg-accent/5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border/20 bg-accent/10 text-xs font-bold text-accent dark:border-transparent">
                    {news.ticker}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-relaxed text-foreground">{news.headline}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{news.time}</span>
                      <span
                        className={`inline-flex items-center gap-1 ${
                          news.sentiment === "positive" ? "text-green-600 dark:text-green-400" : "text-destructive"
                        }`}
                      >
                        {news.sentiment === "positive" ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : (
                          <TrendingDown className="h-3 w-3" />
                        )}
                        {news.sentiment}
                      </span>
                    </div>
                  </div>
                  <Newspaper className="h-4 w-4 shrink-0 text-muted-foreground" />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
