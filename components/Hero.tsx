"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <div>
            <p className="atim-ui inline-flex items-center rounded-full border px-3 py-1 text-sm">
              Speaking • Education • Coaching
            </p>

            <h1 className="atim-heading mt-6 text-4xl leading-[1.05] md:text-6xl">
              Bringing the full human into career decisions.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/80">
              An identity-centered approach to choosing work with clarity,
              alignment, and intention.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-black/70">
              Speaking, education, and coaching for individuals and institutions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: "var(--atim-red)" }}
              >
                Explore Coaching
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-base font-semibold transition hover:bg-black/5"
              >
                Invite Alignis to Speak
              </a>
            </div>

            <p className="atim-ui mt-8 text-sm text-black/60">
              Identity → Alignment → Action
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl opacity-30 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, var(--atim-orange), transparent 55%), radial-gradient(circle at 70% 70%, var(--atim-blue), transparent 55%)",
              }}
            />
            <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
              {/* Replace this src once you add your photo to /public/images/ */}
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/atim-speaker.JPG"
                  alt="Dr. Atim A. Enyenihi"
                  fill
                  className="object-contain p-10"
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
