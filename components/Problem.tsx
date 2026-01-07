"use client"

export default function Problem() {
  return (
    <section id="problem" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="atim-ui text-sm font-semibold tracking-wide text-black/60">
              ABOUT ALIGNIS
            </p>
            <h2 className="atim-heading mt-3 text-3xl leading-tight md:text-4xl">
              Alignis exists to improve how career decisions are made.
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-black/80">
              As careers progress, decisions become more complex and more
              consequential. Outcomes depend less on credentials, titles, or
              momentum—and more on the quality of judgment applied to the
              decision itself.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-black/80">
              Alignis brings first-principles rigor to career decision-making,
              focusing on clarity, disciplined reasoning, and fit between a
              decision and the conditions it must operate within.
            </p>

            <div className="mt-8 rounded-2xl border bg-white p-6">
              <p className="text-base leading-relaxed text-black/80">
                Rather than relying on inherited frameworks or surface signals,
                the work emphasizes defining the decision at hand, examining
                real constraints and tradeoffs, and reasoning from the ground up.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 h-px w-full bg-black/10" />
    </section>
  )
}