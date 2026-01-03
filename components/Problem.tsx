"use client"

export default function Problem() {
  return (
    <section id="problem" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="atim-ui text-sm font-semibold tracking-wide text-black/60">
              THE PROBLEM
            </p>
            <h2 className="atim-heading mt-3 text-3xl leading-tight md:text-4xl">
              When the path looks right on paper—but feels wrong in practice.
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-black/80">
              Most career decisions are shaped by titles, credentials, and
              external expectations — often before there’s space to understand
              who a person is or what they want their work to lead to.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-black/80">
              As a result, many people pursue paths that look successful on
              paper but feel increasingly disconnected in practice.
            </p>

            <div className="mt-8 rounded-2xl border bg-white p-6">
              <p className="atim-ui text-sm font-semibold text-black/60">
                Alignis exists to change how career decisions are made.
              </p>
              <p className="mt-2 text-base leading-relaxed text-black/80">
                From early exploration to seasoned professional inflection
                points, Alignis supports career decisions rooted in identity and
                guided by alignment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 h-px w-full bg-black/10" />
    </section>
  )
}