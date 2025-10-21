"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTradingStore } from "@/lib/trading-store"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Trash2, TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function OrdersList() {
  const orders = useTradingStore((state) => state.orders)
  const clearOrders = useTradingStore((state) => state.clearOrders)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "filled":
        return "bg-accent/20 text-accent border-accent/30"
      case "pending":
        return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30"
      case "cancelled":
        return "bg-muted text-muted-foreground border-border"
      case "rejected":
        return "bg-destructive/20 text-destructive-foreground border-destructive/30"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <Card className="border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Orders</CardTitle>
          {orders.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearOrders}
              className="h-8 text-muted-foreground hover:text-foreground"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {orders.length === 0 ? (
            <div className="flex h-[200px] items-center justify-center text-center">
              <p className="text-sm text-muted-foreground">No orders yet. Place your first order to get started.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-lg border border-border/50 bg-card/50 p-4 transition-colors hover:bg-accent/5"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{order.symbol}</span>
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-xs",
                            order.side === "buy"
                              ? "border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400"
                              : "border-destructive/30 bg-destructive/10 text-destructive-foreground",
                          )}
                        >
                          {order.side === "buy" ? (
                            <TrendingUp className="mr-1 h-3 w-3" />
                          ) : (
                            <TrendingDown className="mr-1 h-3 w-3" />
                          )}
                          {order.side.toUpperCase()}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {order.type.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Qty: {order.quantity}
                        {order.price && ` @ $${order.price.toFixed(2)}`}
                      </div>
                      <div className="text-xs text-muted-foreground">{new Date(order.timestamp).toLocaleString()}</div>
                    </div>
                    <Badge className={cn("text-xs", getStatusColor(order.status))}>{order.status.toUpperCase()}</Badge>
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
