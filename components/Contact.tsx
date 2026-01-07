"use client"

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:p-12">
          <div
            className="pointer-events-none absolute -inset-8 -z-10 opacity-50 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 20% 30%, rgba(48,99,129,0.18), transparent 55%), radial-gradient(circle at 80% 30%, rgba(229,140,61,0.18), transparent 55%)",
            }}
          />
          <p className="atim-ui text-sm font-semibold tracking-wide text-black/60">
            CONTACT
          </p>
          <h2 className="atim-heading mt-3 text-3xl leading-tight md:text-4xl">
            Want decision support—or a speaking program?
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/80">
            Whether you’re facing a real “what’s next?” moment or you’re looking
            to bring a keynote, workshop, or educational program to your
            institution—reach out and we’ll find the right fit.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@alignis.com"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
              style={{ backgroundColor: "var(--atim-red)" }}
            >
              Explore Decision Support
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white/60 px-5 py-3 text-base font-semibold transition hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
            >
              Invite Alignis to Speak
            </a>
          </div>

          <p className="atim-ui mt-6 text-sm text-black/60">
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

  