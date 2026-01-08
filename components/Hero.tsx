"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="deck-kicker text-xs text-black/60">
            Decision support • Speaking • Writing
          </p>

          <h1 className="deck-title mt-6 text-4xl font-semibold leading-[1.05] md:text-6xl">
            First-principles rigor
            <br />
            for career decisions.
          </h1>

          <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-black/80">
            <p>
              Alignis exists to improve how career decisions are made—bringing
              clarity, disciplined reasoning, and fit between a decision and the
              conditions it must operate within.
            </p>
            <p className="text-black/70">
              This perspective is advanced through speaking, writing, and direct
              decision support.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-95"
              style={{ backgroundColor: "var(--atim-red)" }}
            >
              Explore Decision Support
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-black/15 px-5 py-3 text-base font-semibold transition hover:bg-black/5"
            >
              Invite Alignis to Speak
            </a>
          </div>
        </div>

        <div className="mt-16">
          <div className="deck-rule" />
          <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-4">
              <p className="deck-kicker text-xs text-black/60">FOUNDER</p>
              <p className="mt-3 text-base font-semibold">Dr. Atim A. Enyenihi</p>
              <p className="mt-2 text-sm text-black/60">
                Decision strategist • speaker • educator
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
                <div className="relative aspect-[16/9] w-full bg-black/[0.02]">
                  <Image
                    src="/images/atim-speaker.JPG"
                    alt="Dr. Atim A. Enyenihi"
                    fill
                    className="object-contain p-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
