import { AppHeader } from "@/components/app-header"
import { EmptyState } from "@/components/empty-state"

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      <main className="container px-4 py-6">
        <EmptyState title="Research" message="Implement your ideas here using agentic coding!" />
      </main>
    </div>
  )
}
