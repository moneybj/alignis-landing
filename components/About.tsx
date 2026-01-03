"use client"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="atim-ui text-sm font-semibold tracking-wide text-black/60">
              ABOUT
            </p>
            <h2 className="atim-heading mt-3 text-3xl leading-tight md:text-4xl">
              Founded by Dr. Atim A. Enyenihi
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-black/80">
              PhD scientist, career alignment strategist, coach, and speaker
              working at the intersection of identity, decision-making, and
              work.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-black/80">
              Alignis grew from years of observing how capable, accomplished
              people make career decisions without space to consider who they
              are or what they want their work to mean.
            </p>

            <div className="mt-8 rounded-2xl border bg-white p-6">
              <p className="atim-heading text-2xl leading-tight">
                Career decisions aren’t just professional.
                <br />
                They’re human.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 h-px w-full bg-black/10" />
    </section>
  )
}