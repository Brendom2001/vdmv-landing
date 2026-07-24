import ScrollReveal from './ScrollReveal'
import { bonus } from '../data/content'

export default function Bonus() {
  return (
    <section className="bg-[#EFE9DB] py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <ScrollReveal className="overflow-hidden rounded-xl border border-kin/30 bg-washi">
          <div className="flex flex-col items-center gap-10 p-8 md:flex-row md:p-12">
            <img
              src="/mockup-diario.png"
              alt="Mockup do Diário de Treino — 30 Dias"
              loading="lazy"
              width={260}
              height={340}
              className="w-40 shrink-0 rounded-lg shadow-xl shadow-sumi/10 sm:w-52"
            />
            <div>
              <span className="mb-3 block font-body text-xs font-medium uppercase tracking-[0.2em] text-kin">
                {bonus.eyebrow}
              </span>
              <h3 className="font-display text-2xl font-bold text-sumi sm:text-3xl">
                {bonus.title}
              </h3>
              <p className="mt-4 font-body text-sm text-nezumi md:text-base">
                {bonus.description}
              </p>
              <ul className="mt-6 flex flex-col gap-2">
                {bonus.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 font-body text-sm text-sumi/90"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-shu" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
