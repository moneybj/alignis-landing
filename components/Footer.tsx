"use client"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="deck-rule" />
        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="deck-kicker text-xs text-black/60">ALIGNIS</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a className="text-black/60 hover:text-black" href="#problem">
              About
            </a>
            <a className="text-black/60 hover:text-black" href="#approach">
              Method
            </a>
            <a className="text-black/60 hover:text-black" href="#services">
              Work with Alignis
            </a>
            <a className="text-black/60 hover:text-black" href="#about">
              Meet Dr. Atim
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-sm text-black/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Alignis. All rights reserved.</p>
          <p>Built around clarity, disciplined reasoning, and fit.</p>
        </div>
      </div>
    </footer>
  )
}