"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTradingStore } from "@/lib/trading-store"
import type { OrderSide, OrderType } from "@/lib/types"
import { TrendingUp, TrendingDown } from "lucide-react"

const POPULAR_SYMBOLS = ["AAPL", "GOOGL", "MSFT", "AMZN", "TSLA", "NVDA", "META", "NFLX"]

export function OrderEntry() {
  const addOrder = useTradingStore((state) => state.addOrder)
  const [symbol, setSymbol] = useState("AAPL")
  const [side, setSide] = useState<OrderSide>("buy")
  const [type, setType] = useState<OrderType>("market")
  const [quantity, setQuantity] = useState("100")
  const [price, setPrice] = useState("150.00")
  const [stopPrice, setStopPrice] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    addOrder({
      symbol,
      side,
      type,
      quantity: Number.parseInt(quantity),
      price: type !== "market" ? Number.parseFloat(price) : undefined,
      stopPrice: type === "stop" && stopPrice ? Number.parseFloat(stopPrice) : undefined,
    })

    // Reset form
    setQuantity("100")
    if (type === "stop") setStopPrice("")
  }

  return (
    <Card className="border-border/50">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Order Entry</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-[1fr_auto_auto] gap-2 items-start">
            <div className="space-y-2">
              <Label htmlFor="symbol" className="text-sm font-medium">
                Symbol
              </Label>
              <Select value={symbol} onValueChange={setSymbol}>
                <SelectTrigger id="symbol">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {POPULAR_SYMBOLS.map((sym) => (
                    <SelectItem key={sym} value={sym}>
                      {sym}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Side</Label>
              <div className="flex gap-2 h-10">
                <Button
                  type="button"
                  size="default"
                  variant={side === "buy" ? "default" : "outline"}
                  className={side === "buy" ? "bg-accent text-accent-foreground hover:bg-accent/90 h-full" : "h-full"}
                  onClick={() => setSide("buy")}
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Buy
                </Button>
                <Button
                  type="button"
                  size="default"
                  variant={side === "sell" ? "default" : "outline"}
                  className={side === "sell" ? "bg-accent text-accent-foreground hover:bg-accent/90 h-full" : "h-full"}
                  onClick={() => setSide("sell")}
                >
                  <TrendingDown className="mr-2 h-4 w-4" />
                  Sell
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="type" className="text-sm font-medium">
                Order Type
              </Label>
              <Select value={type} onValueChange={(v) => setType(v as OrderType)}>
                <SelectTrigger id="type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="market">Market</SelectItem>
                  <SelectItem value="limit">Limit</SelectItem>
                  <SelectItem value="stop">Stop</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity" className="text-sm font-medium">
                Quantity
              </Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
          </div>

          {type !== "market" && (
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="price" className="text-sm font-medium">
                  {type === "limit" ? "Limit Price" : "Price"}
                </Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              {type === "stop" && (
                <div className="space-y-2">
                  <Label htmlFor="stopPrice" className="text-sm font-medium">
                    Stop Price
                  </Label>
                  <Input
                    id="stopPrice"
                    type="number"
                    step="0.01"
                    min="0"
                    value={stopPrice}
                    onChange={(e) => setStopPrice(e.target.value)}
                    required
                  />
                </div>
              )}
            </div>
          )}

          <Button type="submit" className="w-full">
            Place Order
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
