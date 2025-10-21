"use client"

import type React from "react"

import { useEffect } from "react"
import { useTradingStore } from "@/lib/trading-store"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useTradingStore((state) => state.theme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("light", "dark", "accent-pink", "accent-blue")
    root.classList.add(theme.mode, `accent-${theme.accent}`)
  }, [theme])

  return <>{children}</>
}
