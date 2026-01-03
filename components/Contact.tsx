"use client"

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border bg-white p-8 shadow-sm md:p-12">
          <p className="atim-ui text-sm font-semibold tracking-wide text-black/60">
            CONTACT
          </p>
          <h2 className="atim-heading mt-3 text-3xl leading-tight md:text-4xl">
            Ready to make a career decision with clarity?
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/80">
            Whether you’re exploring 1:1 coaching or looking to bring a keynote,
            workshop, or program to your institution—reach out and we’ll find
            the right fit.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@alignis.com"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-95"
              style={{ backgroundColor: "var(--atim-red)" }}
            >
              Email Alignis
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-base font-semibold transition hover:bg-black/5"
            >
              View offerings
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

  