import ScrollReveal from './ScrollReveal'

// AJUSTAR: seção não é renderizada em Home.jsx até existirem depoimentos reais
// de leitoras beta (ver src/data/content.js -> testimonials). Nunca preencher
// `testimonials` com depoimentos inventados — a spec exige omitir a seção
// inteira até haver prova social real.
export default function Testimonials({ testimonials = [] }) {
  if (!testimonials.length) return null

  const looped = [...testimonials, ...testimonials]

  return (
    <section className="overflow-hidden bg-[#EFE9DB] py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollReveal className="mb-12 text-center">
          <span className="mb-3 block font-body text-xs font-medium uppercase tracking-[0.2em] text-kin">
            DEPOIMENTOS
          </span>
          <h2 className="font-display text-3xl font-bold text-sumi sm:text-4xl">
            Quem já treinou, conta
          </h2>
        </ScrollReveal>
      </div>

      <div className="relative z-10 group flex w-full overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-6 py-2 group-hover:[animation-play-state:paused]">
          {looped.map((testimonial, i) => (
            <div
              key={`${testimonial.name}-${i}`}
              className="w-72 shrink-0 rounded-xl border border-sumi/10 bg-washi p-6"
            >
              <p className="font-body text-sm text-sumi/90">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-4 font-display text-sm font-semibold text-shu">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
