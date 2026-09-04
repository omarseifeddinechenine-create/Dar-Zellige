"use client"

import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

export function FadeIn({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <div className={cn("animate-fade-up", className)} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  )
}
