"use client"

export default function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl">
          <p className="deck-kicker text-xs text-black/60">
              ABOUT ALIGNIS
            </p>
          <h2 className="deck-title mt-6 text-3xl font-semibold leading-tight md:text-5xl">
              Alignis exists to improve how career decisions are made.
            </h2>

          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-black/80">
            <p>
              As careers progress, decisions become more complex and more
              consequential. Outcomes depend less on credentials, titles, or
              momentum—and more on the quality of judgment applied to the
              decision itself.
            </p>
            <p>
              Alignis brings first-principles rigor to career decision-making,
              focusing on clarity, disciplined reasoning, and fit between a
              decision and the conditions it must operate within.
            </p>

            <div className="mt-8">
              <div className="deck-rule" />
              <p className="mt-8 text-lg leading-relaxed text-black/80">
                Rather than relying on inherited frameworks or surface signals,
                the work emphasizes defining the decision at hand, examining
                real constraints and tradeoffs, and reasoning from the ground up.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 deck-rule" />
    </section>
  )
}