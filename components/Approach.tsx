"use client"

export default function Approach() {
  return (
    <section id="approach" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl">
          <p className="deck-kicker text-xs text-black/60">
              HOW THE WORK IS DONE
            </p>
          <h2 className="deck-title mt-6 text-3xl font-semibold leading-tight md:text-5xl">
              Define the decision. Surface constraints. Reason from first principles.
            </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-black/80">
              When the stakes are high, better outcomes come from better framing,
              clearer tradeoffs, and disciplined reasoning—not default paths.
            </p>

          <div className="mt-12">
            <div className="deck-rule" />
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              <div>
                <p className="deck-kicker text-xs text-black/60">1</p>
                <p className="mt-3 text-base font-semibold">Define the decision</p>
                <p className="mt-3 text-base leading-relaxed text-black/80">
                  Clarify what is actually being decided—so the work targets the
                  real question, not a proxy.
                </p>
              </div>
              <div>
                <p className="deck-kicker text-xs text-black/60">2</p>
                <p className="mt-3 text-base font-semibold">
                  Constraints & tradeoffs
                </p>
                <p className="mt-3 text-base leading-relaxed text-black/80">
                  Identify the conditions the decision must operate within, and
                  the tradeoffs that matter most.
                </p>
              </div>
              <div>
                <p className="deck-kicker text-xs text-black/60">3</p>
                <p className="mt-3 text-base font-semibold">
                  Reason from the ground up
                </p>
                <p className="mt-3 text-base leading-relaxed text-black/80">
                  Apply first-principles thinking to test options and arrive at
                  sound judgment you can stand behind.
                </p>
              </div>
            </div>

            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-black/80">
              This perspective is advanced through speaking, writing, and direct
              decision support.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 deck-rule" />
    </section>
  )
}