"use client"

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ backgroundColor: "var(--brand-charcoal)", borderColor: "rgba(255,255,255,0.14)" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="h-px w-full bg-white/15" />
        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="deck-kicker text-xs text-white/70">ALIGNIS</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a className="text-white/70 hover:text-white" href="#problem">
              About
            </a>
            <a className="text-white/70 hover:text-white" href="#approach">
              Method
            </a>
            <a className="text-white/70 hover:text-white" href="#services">
              Work with Alignis
            </a>
            <a className="text-white/70 hover:text-white" href="#about">
              Meet Dr. Atim
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Alignis. All rights reserved.</p>
          <p>Built around clarity, disciplined reasoning, and fit.</p>
        </div>
      </div>
    </footer>
  )
}