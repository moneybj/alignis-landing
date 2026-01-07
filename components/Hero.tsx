"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(229,140,61,0.25), transparent 55%), radial-gradient(circle at 80% 30%, rgba(48,99,129,0.22), transparent 55%), radial-gradient(circle at 50% 90%, rgba(208,60,39,0.18), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <div>
            <p className="atim-ui inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-sm backdrop-blur">
              Decision support • Speaking • Writing
            </p>

            <h1 className="atim-heading mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              First-principles rigor for career decisions.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/80">
              Alignis exists to improve how career decisions are made—bringing
              clarity, disciplined reasoning, and fit between a decision and the
              conditions it must operate within.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-black/70">
              This perspective is advanced through speaking, writing, and direct
              decision support.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                style={{ backgroundColor: "var(--atim-red)" }}
              >
                Explore Decision Support
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white/60 px-5 py-3 text-base font-semibold transition hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
              >
                Invite Alignis to Speak
              </a>
            </div>

            <p className="atim-ui mt-8 text-sm text-black/60">
              Clarity → Judgment → Action
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              {/* Replace this src once you add your photo to /public/images/ */}
              <div className="relative aspect-[4/5] w-full bg-gradient-to-b from-black/[0.02] to-black/[0.00]">
                <Image
                  src="/images/atim-speaker.JPG"
                  alt="Dr. Atim A. Enyenihi"
                  fill
                  className="object-contain p-10 transition duration-300 will-change-transform md:group-hover:scale-[1.01]"
                  priority
                />
              </div>
              <div className="p-5">
                <p className="atim-ui text-sm text-black/60">
                  Founder • Speaker • Educator
                </p>
                <p className="mt-1 font-semibold">
                  Dr. Atim A. Enyenihi
                </p>
                <p className="mt-1 text-sm text-black/60">
                  Alignis • Career alignment strategy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle bottom divider */}
      <div className="h-px w-full bg-black/10" />
    </section>
  )
}
