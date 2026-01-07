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
            Speaking, writing, and direct decision support—bringing
            first-principles rigor to complex career decision environments.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Individuals */}
          <div className="group rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <p className="atim-ui text-sm font-semibold text-black/60">
              For Individuals
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Career Decision Support
            </h3>
            <p className="mt-3 text-base leading-relaxed text-black/80">
              For individuals facing a genuine “what’s next?” moment—when
              options are many, tradeoffs are real, experience is broad, and the
              right move is no longer obvious.
            </p>
            <p className="mt-3 text-base leading-relaxed text-black/80">
              This work creates a structured decision environment focused on
              clarifying the actual decision at hand, examining real
              constraints, and reasoning from first principles rather than
              default paths, external expectations, or résumé optics.
            </p>
            <p className="mt-3 text-base leading-relaxed text-black/80">
              The outcome is sound judgment—and a next move you can stand behind
              and act on with confidence.
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                style={{ backgroundColor: "var(--atim-red)" }}
              >
                Explore Decision Support
              </a>
            </div>
          </div>

          {/* Institutions */}
          <div className="group rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <p className="atim-ui text-sm font-semibold text-black/60">
              For Institutions & Organizations
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Speaking & Educational Programs
            </h3>
            <p className="mt-3 text-base leading-relaxed text-black/80">
              Keynotes, workshops, and educational programs for students,
              professionals, and leadership audiences.
            </p>
            <p className="mt-3 text-base leading-relaxed text-black/80">
              Programs examine how people make career decisions, how inherited
              definitions of success shape direction, and why alignment between
              identity, context, and direction matters for sustained performance.
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white/60 px-5 py-3 text-base font-semibold transition hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
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