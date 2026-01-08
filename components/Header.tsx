"use client"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-5">
          <a href="#top" className="deck-kicker text-xs text-black/60">
            ALIGNIS
          </a>
          <a
            href="#contact"
            className="deck-kicker text-xs text-black/60 hover:text-black"
          >
            Contact
          </a>
        </div>
        <div className="deck-rule" />
      </div>
    </header>
  )
}



