"use client"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="atim-heading text-xl">Alignis</p>
            <p className="mt-1 text-sm text-black/60">
              Identity-centered career decision-making.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a className="text-black/70 hover:text-black" href="#problem">
              Problem
            </a>
            <a className="text-black/70 hover:text-black" href="#approach">
              Core logic
            </a>
            <a className="text-black/70 hover:text-black" href="#services">
              Work with Alignis
            </a>
            <a className="text-black/70 hover:text-black" href="#about">
              About
            </a>
            <a className="text-black/70 hover:text-black" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t pt-6 text-sm text-black/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Alignis. All rights reserved.</p>
          <p>
            Built around the core logic:{" "}
            <span className="atim-ui">Identity → Alignment → Action</span>
          </p>
        </div>
      </div>
    </footer>
  )
}