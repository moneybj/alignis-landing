"use client"

export default function Approach() {
  return (
    <section id="approach" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="atim-ui text-sm font-semibold tracking-wide text-black/60">
              CORE LOGIC
            </p>
            <h2 className="atim-heading mt-3 text-3xl leading-tight md:text-4xl">
              Identity → Alignment → Action
            </h2>
            <p className="mt-4 text-base leading-relaxed text-black/70">
              We don’t start with action. We earn direction first.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl border bg-white p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <p className="atim-ui text-sm font-semibold text-black/60">
                    Identity
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-black/80">
                    Understand who you are, what you value, and what your work
                    needs to support.
                  </p>
                </div>
                <div>
                  <p className="atim-ui text-sm font-semibold text-black/60">
                    Alignment
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-black/80">
                    Evaluate options for fit, tradeoffs, and what “right” looks
                    like in practice.
                  </p>
                </div>
                <div>
                  <p className="atim-ui text-sm font-semibold text-black/60">
                    Action
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-black/80">
                    Move intentionally—strategy, decisions, and next steps
                    grounded in clarity.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-lg leading-relaxed text-black/80">
              Alignis supports career decisions rooted in identity and guided by
              alignment—from early exploration to seasoned professional
              inflection points.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 h-px w-full bg-black/10" />
    </section>
  )
}