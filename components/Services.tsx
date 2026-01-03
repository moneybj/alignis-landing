"use client"

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="atim-ui text-sm font-semibold tracking-wide text-black/60">
              HOW TO WORK WITH ALIGNIS
            </p>
            <h2 className="atim-heading mt-3 text-3xl leading-tight md:text-4xl">
              For individuals and institutions.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-black/70">
            Speaking, education, and coaching—grounded in an identity-centered
            framework that brings clarity to career decision-making and
            direction.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Individuals */}
          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <p className="atim-ui text-sm font-semibold text-black/60">
              For Individuals
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              1:1 Career Alignment Coaching
            </h3>
            <p className="mt-3 text-base leading-relaxed text-black/80">
              For accomplished professionals who feel successful on paper but
              misaligned in practice.
            </p>
            <p className="mt-3 text-base leading-relaxed text-black/80">
              A thinking partnership focused on clarity, fit, and choosing the
              next chapter intentionally.
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: "var(--atim-red)" }}
              >
                Explore Coaching
              </a>
            </div>
          </div>

          {/* Institutions */}
          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <p className="atim-ui text-sm font-semibold text-black/60">
              For Institutions & Conferences
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Speaking & Educational Programs
            </h3>
            <p className="mt-3 text-base leading-relaxed text-black/80">
              Keynotes, workshops, and professional development sessions for
              universities, organizations, and conferences.
            </p>
            <p className="mt-3 text-base leading-relaxed text-black/80">
              Programs are grounded in an identity-centered framework that
              brings clarity to career decision-making and direction.
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-base font-semibold transition hover:bg-black/5"
              >
                Invite Alignis to Speak
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 h-px w-full bg-black/10" />
    </section>
  )
}