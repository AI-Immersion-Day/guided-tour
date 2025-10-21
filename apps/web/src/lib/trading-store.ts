import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Order, Trade, Position, ThemeConfig } from "./types"

interface TradingStore {
  orders: Order[]
  trades: Trade[]
  positions: Position[]
  theme: ThemeConfig
  addOrder: (order: Omit<Order, "id" | "timestamp" | "status">) => void
  updateOrderStatus: (orderId: string, status: Order["status"]) => void
  addTrade: (trade: Omit<Trade, "id" | "timestamp">) => void
  setTheme: (theme: Partial<ThemeConfig>) => void
  clearOrders: () => void
  clearTrades: () => void
}

export const useTradingStore = create<TradingStore>()(
  persist(
    (set, get) => ({
      orders: [],
      trades: [],
      positions: [],
      theme: {
        mode: "dark",
        accent: "blue",
      },

      addOrder: (orderData) => {
        const order: Order = {
          ...orderData,
          id: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          timestamp: Date.now(),
          status: "pending",
        }

        set((state) => ({ orders: [order, ...state.orders] }))

        // Simulate order execution after 1-3 seconds
        setTimeout(
          () => {
            const currentOrder = get().orders.find((o) => o.id === order.id)
            if (currentOrder && currentOrder.status === "pending") {
              get().updateOrderStatus(order.id, "filled")

              // Create a trade for filled orders
              const executionPrice =
                order.type === "market" ? (order.price || 0) * (0.98 + Math.random() * 0.04) : order.price || 0

              get().addTrade({
                orderId: order.id,
                symbol: order.symbol,
                side: order.side,
                quantity: order.quantity,
                price: executionPrice,
                commission: executionPrice * order.quantity * 0.001,
              })
            }
          },
          1000 + Math.random() * 2000,
        )
      },

      updateOrderStatus: (orderId, status) => {
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId
              ? {
                  ...order,
                  status,
                  filledQuantity: status === "filled" ? order.quantity : order.filledQuantity,
                  averagePrice: status === "filled" ? order.price : order.averagePrice,
                }
              : order,
          ),
        }))
      },

      addTrade: (tradeData) => {
        const trade: Trade = {
          ...tradeData,
          id: `TRD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          timestamp: Date.now(),
        }

        set((state) => ({ trades: [trade, ...state.trades] }))
      },

      setTheme: (themeUpdate) => {
        set((state) => ({
          theme: { ...state.theme, ...themeUpdate },
        }))
      },

      clearOrders: () => set({ orders: [] }),
      clearTrades: () => set({ trades: [] }),
    }),
    {
      name: "trading-storage",
    },
  ),
)
