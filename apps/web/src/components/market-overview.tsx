"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { TrendingUp, TrendingDown, Activity, Newspaper, AlertCircle } from "lucide-react"
import { useIndices, useMarketNews } from "@/hooks/use-market-data"
import { Button } from "@/components/ui/button"

export function MarketOverview() {
  const { data: indices, isLoading: indicesLoading, error: indicesError, refetch: refetchIndices } = useIndices()
  const { data: newsData, isLoading: newsLoading, error: newsError, refetch: refetchNews } = useMarketNews()

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
            {indicesLoading ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="rounded-lg border border-border/50 bg-card/50 p-4">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-6 w-24" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </div>
                ))}
              </div>
            ) : indicesError ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-border/50 bg-card/50 p-8">
                <AlertCircle className="h-12 w-12 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Failed to load indices data</p>
                <Button variant="outline" size="sm" onClick={() => refetchIndices()}>
                  Try Again
                </Button>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {indices?.map((index) => (
                  <div key={index.id} className="rounded-lg border border-border/50 bg-card/50 p-4">
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
            )}
          </TabsContent>

          <TabsContent value="news" className="mt-0">
            {newsLoading ? (
              <div className="space-y-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border border-border/50 bg-card/50 p-4">
                    <Skeleton className="h-12 w-12 shrink-0 rounded-md" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                    <Skeleton className="h-4 w-4 shrink-0" />
                  </div>
                ))}
              </div>
            ) : newsError ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-border/50 bg-card/50 p-8">
                <AlertCircle className="h-12 w-12 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Failed to load market news</p>
                <Button variant="outline" size="sm" onClick={() => refetchNews()}>
                  Try Again
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {newsData?.map((news) => (
                  <div
                    key={news.id}
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
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
