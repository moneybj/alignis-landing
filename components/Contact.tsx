"use client"

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl">
          <p className="deck-kicker text-xs text-black/60">
            CONTACT
          </p>
          <h2 className="deck-title mt-6 text-3xl font-semibold leading-tight md:text-5xl">
            Want decision support—or a speaking program?
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-black/80">
            Whether you’re facing a real “what’s next?” moment or you’re looking
            to bring a keynote, workshop, or educational program to your
            institution—reach out and we’ll find the right fit.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@alignis.com"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-95"
              style={{ backgroundColor: "var(--atim-red)" }}
            >
              Explore Decision Support
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-black/15 px-5 py-3 text-base font-semibold transition hover:bg-black/5"
            >
              Invite Alignis to Speak
            </a>
          </div>

          <div className="mt-12">
            <div className="deck-rule" />
          </div>

          <p className="mt-8 text-sm text-black/60">
            Prefer email? Write to{" "}
            <a className="underline" href="mailto:hello@alignis.com">
              hello@alignis.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

  