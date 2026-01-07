"use client"

export default function Approach() {
  return (
    <section id="approach" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="atim-ui text-sm font-semibold tracking-wide text-black/60">
              HOW THE WORK IS DONE
            </p>
            <h2 className="atim-heading mt-3 text-3xl leading-tight md:text-4xl">
              Define the decision. Surface constraints. Reason from first principles.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-black/70">
              When the stakes are high, better outcomes come from better framing,
              clearer tradeoffs, and disciplined reasoning—not default paths.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl border bg-white p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <p className="atim-ui text-sm font-semibold text-black/60">
                    1) Define the decision
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-black/80">
                    Clarify what is actually being decided—so the work targets
                    the real question, not a proxy.
                  </p>
                </div>
                <div>
                  <p className="atim-ui text-sm font-semibold text-black/60">
                    2) Constraints & tradeoffs
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-black/80">
                    Identify the conditions the decision must operate within,
                    and the tradeoffs that matter most.
                  </p>
                </div>
                <div>
                  <p className="atim-ui text-sm font-semibold text-black/60">
                    3) Reason from the ground up
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-black/80">
                    Apply first-principles thinking to test options and arrive
                    at sound judgment you can stand behind.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-lg leading-relaxed text-black/80">
              This perspective is advanced through speaking, writing, and direct
              decision support.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 h-px w-full bg-black/10" />
    </section>
  )
}