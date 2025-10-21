"use client"

import type React from "react"

import { useEffect } from "react"
import { useTradingStore } from "@/lib/trading-store"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useTradingStore((state) => state.theme)

  useEffect(() => {
    const root = document.documentElement
    
    // Remove all possible theme classes first
    root.classList.remove("light", "dark", "accent-pink", "accent-blue")
    
    // Add mode class first (light/dark)
    root.classList.add(theme.mode)
    
    // Then add accent class
    root.classList.add(`accent-${theme.accent}`)
  }, [theme])

  return <>{children}</>
}
