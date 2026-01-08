"use client"

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl">
          <p className="deck-kicker text-xs text-black/60">MEET DR. ATIM</p>
          <h2 className="deck-title mt-6 text-3xl font-semibold leading-tight md:text-5xl">
            Atim A. Enyenihi, PhD
          </h2>

          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-black/80">
            <p>
              Atim A. Enyenihi, PhD is a decision strategist and the founder of
              Alignis.
            </p>
            <p>
              Trained as an analytical chemist, her work spans academia,
              industry, and government, including small- and large-molecule
              therapeutics research and development, newborn screening, and
              clinical diagnostic test development and validation.
            </p>
            <p>
              This background informs how she approaches career decisions,
              applying the same analytical rigor used in complex chemical and
              biological systems to complex decision environments—using
              first-principles thinking to improve clarity, judgment, and
              decision quality when stakes are high.
            </p>
            <p>
              Born in Nigeria and having lived in multiple countries, Dr. Atim
              brings a global perspective shaped by experience across cultures,
              systems, and institutions. Outside of her work, she snowboards,
              rock climbs, and dances.
            </p>
          </div>

          <div className="mt-12">
            <div className="deck-rule" />
            <p className="deck-title mt-8 text-2xl font-semibold leading-tight">
              Career decisions get better when the decision itself gets clearer.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 deck-rule" />
    </section>
  )
}