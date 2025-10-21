"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTradingStore } from "@/lib/trading-store"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Trash2, TrendingUp, TrendingDown, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

export function TradesList() {
  const trades = useTradingStore((state) => state.trades)
  const clearTrades = useTradingStore((state) => state.clearTrades)

  const totalVolume = trades.reduce((sum, trade) => sum + trade.quantity * trade.price, 0)
  const totalCommission = trades.reduce((sum, trade) => sum + trade.commission, 0)

  return (
    <Card className="border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold">Trades</CardTitle>
            {trades.length > 0 && (
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>Volume: ${totalVolume.toFixed(2)}</span>
                <span>Commission: ${totalCommission.toFixed(2)}</span>
              </div>
            )}
          </div>
          {trades.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearTrades}
              className="h-8 text-muted-foreground hover:text-foreground"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {trades.length === 0 ? (
            <div className="flex h-[200px] items-center justify-center text-center">
              <div className="space-y-2">
                <Activity className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <p className="text-sm text-muted-foreground">
                  No trades executed yet. Orders will appear here once filled.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {trades.map((trade) => (
                <div
                  key={trade.id}
                  className="rounded-lg border border-border/50 bg-card/50 p-4 transition-colors hover:bg-accent/5"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{trade.symbol}</span>
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-xs",
                            trade.side === "buy"
                              ? "border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400"
                              : "border-destructive/30 bg-destructive/10 text-destructive-foreground",
                          )}
                        >
                          {trade.side === "buy" ? (
                            <TrendingUp className="mr-1 h-3 w-3" />
                          ) : (
                            <TrendingDown className="mr-1 h-3 w-3" />
                          )}
                          {trade.side.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="text-sm text-foreground">
                        {trade.quantity} @ ${trade.price.toFixed(2)}
                      </div>
                      <div className="flex gap-3 text-xs text-muted-foreground">
                        <span>Total: ${(trade.quantity * trade.price).toFixed(2)}</span>
                        <span>Fee: ${trade.commission.toFixed(2)}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{new Date(trade.timestamp).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
