"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTradingStore } from "@/lib/trading-store"
import { Moon, Sun } from "lucide-react"

export function ThemeSwitcher() {
  const theme = useTradingStore((state) => state.theme)
  const setTheme = useTradingStore((state) => state.setTheme)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9 bg-transparent">
          {theme.mode === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Theme Mode</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme({ mode: "light" })}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme({ mode: "dark" })}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Accent Color</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme({ accent: "blue" })}>
          <div className="mr-2 h-4 w-4 rounded-full bg-blue-500" />
          Blue
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme({ accent: "pink" })}>
          <div className="mr-2 h-4 w-4 rounded-full bg-pink-500" />
          Pink
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
