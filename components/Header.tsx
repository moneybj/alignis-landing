"use client"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[color:var(--brand-bg)]/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-5">
          <a href="#top" className="deck-kicker text-xs text-[color:var(--brand-muted)]">
            ALIGNIS
          </a>
          <a
            href="#contact"
            className="deck-kicker text-xs text-[color:var(--brand-muted)] hover:text-[color:var(--brand-ink)]"
          >
            Contact
          </a>
        </div>
        <div className="deck-rule" />
      </div>
    </header>
  )
}



