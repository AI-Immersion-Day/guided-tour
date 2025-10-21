import { Info } from "lucide-react"

interface EmptyStateProps {
  title?: string
  message?: string
}

export function EmptyState({
  title = "Coming Soon",
  message = "Implement your ideas here using agentic coding!",
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <Info className="h-8 w-8 text-accent" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
          <p className="text-muted-foreground max-w-md">{message}</p>
        </div>
      </div>
    </div>
  )
}
