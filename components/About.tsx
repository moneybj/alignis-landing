"use client"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="atim-ui text-sm font-semibold tracking-wide text-black/60">
              MEET DR. ATIM
            </p>
            <h2 className="atim-heading mt-3 text-3xl leading-tight md:text-4xl">
              Atim A. Enyenihi, PhD
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-black/80">
              Atim A. Enyenihi, PhD is a decision strategist and the founder of
              Alignis.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-black/80">
              Trained as an analytical chemist, her work spans academia,
              industry, and government, including small- and large-molecule
              therapeutics research and development, newborn screening, and
              clinical diagnostic test development and validation.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-black/80">
              This background informs how she approaches career decisions,
              applying the same analytical rigor used in complex chemical and
              biological systems to complex decision environments—using
              first-principles thinking to improve clarity, judgment, and
              decision quality when stakes are high.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-black/80">
              Born in Nigeria and having lived in multiple countries, Dr. Atim
              brings a global perspective shaped by experience across cultures,
              systems, and institutions. Outside of her work, she snowboards,
              rock climbs, and dances.
            </p>

            <div className="mt-8 rounded-2xl border bg-white p-6">
              <p className="atim-heading text-2xl leading-tight">
                Career decisions get better when the decision itself gets
                clearer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 h-px w-full bg-black/10" />
    </section>
  )
}