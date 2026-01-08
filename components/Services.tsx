"use client"

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl">
          <p className="deck-kicker text-xs text-black/60">
            HOW TO WORK WITH ALIGNIS
          </p>
          <h2 className="deck-title mt-6 text-3xl font-semibold leading-tight md:text-5xl">
            Two ways to engage.
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-black/80">
            Speaking, writing, and direct decision support—bringing
            first-principles rigor to complex career decision environments.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="deck-rule" />

          <div className="mt-10 grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-4">
              <p className="deck-kicker text-xs text-black/60">FOR INDIVIDUALS</p>
              <h3 className="deck-title mt-4 text-2xl font-semibold leading-tight">
                Career Decision Support
              </h3>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-5 text-lg leading-relaxed text-black/80">
                <p>
                  For individuals facing a genuine “what’s next?” moment—when
                  options are many, tradeoffs are real, experience is broad, and
                  the right move is no longer obvious.
                </p>
                <p>
                  This work creates a structured decision environment focused on
                  clarifying the actual decision at hand, examining real
                  constraints, and reasoning from first principles rather than
                  default paths, external expectations, or résumé optics.
                </p>
                <p>
                  The outcome is sound judgment—and a next move you can stand
                  behind and act on with confidence.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-95"
                  style={{ backgroundColor: "var(--atim-red)" }}
                >
                  Explore Decision Support
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 deck-rule" />

          <div className="mt-10 grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-4">
              <p className="deck-kicker text-xs text-black/60">
                FOR INSTITUTIONS & ORGANIZATIONS
              </p>
              <h3 className="deck-title mt-4 text-2xl font-semibold leading-tight">
                Speaking & Educational Programs
              </h3>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-5 text-lg leading-relaxed text-black/80">
                <p>
                  Keynotes, workshops, and educational programs for students,
                  professionals, and leadership audiences.
                </p>
                <p>
                  Programs examine how people make career decisions, how
                  inherited definitions of success shape direction, and why
                  alignment between identity, context, and direction matters for
                  sustained performance.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-black/15 px-5 py-3 text-base font-semibold transition hover:bg-black/5"
                >
                  Invite Alignis to Speak
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 deck-rule" />
    </section>
  )
}