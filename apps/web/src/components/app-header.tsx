"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { UserMenu } from "@/components/user-menu"
import { Button } from "@/components/ui/button"
import { BarChart3, LayoutDashboard, Briefcase, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function AppHeader() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/portfolio", label: "Portfolio", icon: Briefcase },
    { href: "/research", label: "Research", icon: TrendingUp },
  ]

  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <header className="border-b border-border/50">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <BarChart3 className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground text-balance">Apex Trade</h1>
              <p className="text-xs text-muted-foreground">Professional Trading Suite</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <UserMenu />
          </div>
        </div>
      </header>

      <nav className="border-b border-border/50">
        <div className="container px-4">
          <div className="flex h-12 items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Button
                  key={item.href}
                  variant="ghost"
                  size="sm"
                  className={cn("gap-2 hover:bg-accent/10 hover:text-accent", isActive && "bg-accent/10 text-accent")}
                  asChild
                >
                  <Link href={item.href}>
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
              )
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}
