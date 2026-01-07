"use client"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group inline-flex items-baseline gap-2">
          <span className="atim-heading text-lg font-semibold tracking-tight">
            Alignis
          </span>
          <span className="hidden text-xs text-black/50 sm:inline">
            decision support
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a className="text-black/70 hover:text-black" href="#problem">
            About
          </a>
          <a className="text-black/70 hover:text-black" href="#approach">
            Method
          </a>
          <a className="text-black/70 hover:text-black" href="#services">
            Work with Alignis
          </a>
          <a className="text-black/70 hover:text-black" href="#about">
            Meet Dr. Atim
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold transition hover:bg-black/5"
          >
            Contact
          </a>
          <a
            href="#services"
            className="hidden items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 sm:inline-flex"
            style={{ backgroundColor: "var(--atim-red)" }}
          >
            Explore
          </a>
        </div>
      </div>
    </header>
  )
}


