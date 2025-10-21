export type OrderSide = "buy" | "sell"
export type OrderType = "market" | "limit" | "stop"
export type OrderStatus = "pending" | "filled" | "cancelled" | "rejected"

export interface Order {
  id: string
  symbol: string
  side: OrderSide
  type: OrderType
  quantity: number
  price?: number
  stopPrice?: number
  status: OrderStatus
  timestamp: number
  filledQuantity?: number
  averagePrice?: number
}

export interface Trade {
  id: string
  orderId: string
  symbol: string
  side: OrderSide
  quantity: number
  price: number
  timestamp: number
  commission: number
}

export interface Position {
  symbol: string
  quantity: number
  averagePrice: number
  currentPrice: number
  unrealizedPnL: number
  realizedPnL: number
}

export type ThemeMode = "light" | "dark"
export type ThemeAccent = "pink" | "blue"

export interface ThemeConfig {
  mode: ThemeMode
  accent: ThemeAccent
}
