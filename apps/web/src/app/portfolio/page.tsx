import { AppHeader } from "@/components/app-header"
import { EmptyState } from "@/components/empty-state"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      <main className="container px-4 py-6">
        <EmptyState title="Portfolio" message="Implement your ideas here using agentic coding!" />
      </main>
    </div>
  )
}
