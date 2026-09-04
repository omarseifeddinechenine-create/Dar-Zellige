export function Zellige({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 8-Point Star Zellige Motif */}
      <rect x="18" y="18" width="44" height="44" stroke="currentColor" strokeWidth="1.2" />
      <rect
        x="18"
        y="18"
        width="44"
        height="44"
        transform="rotate(45 40 40)"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="40" cy="40" r="10" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="40" cy="40" r="3" fill="currentColor" />
      <path d="M40 0 V18 M40 62 V80 M0 40 H18 M62 40 H80" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export function ZelligeCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0 L60 0 L60 10 L10 10 L10 60 L0 60 Z" fill="currentColor" opacity="0.15" />
      <path d="M15 15 L45 15 L45 20 L20 20 L20 45 L15 45 Z" fill="currentColor" opacity="0.3" />
      <circle cx="28" cy="28" r="4" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

export function ZelligeBand({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-12 overflow-hidden bg-muted/40 border-y border-border/70 ${className}`} aria-hidden="true">
      <div className="absolute inset-0 zellige-pattern" />
      <div className="flex h-full items-center justify-around px-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex items-center gap-6">
            <Zellige className={`size-5 transition-transform duration-700 hover:rotate-45 ${
              i % 3 === 0 ? "text-primary" : i % 3 === 1 ? "text-accent" : "text-secondary"
            }`} />
            <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
          </div>
        ))}
      </div>
    </div>
  )
}

