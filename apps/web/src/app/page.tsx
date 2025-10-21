import { OrderEntry } from "@/components/order-entry"
import { OrdersList } from "@/components/orders-list"
import { TradesList } from "@/components/trades-list"
import { MarketOverview } from "@/components/market-overview"
import { AppHeader } from "@/components/app-header"

export default function TradingPlatform() {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      <main className="container px-4 py-6">
        <div className="space-y-6">
          <MarketOverview />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-6">
              <OrderEntry />
            </div>

            <div className="space-y-6 lg:col-span-2">
              <div className="grid gap-6 md:grid-cols-2">
                <OrdersList />
                <TradesList />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
