import ScrollReveal from './ScrollReveal'
import BrushStroke from './BrushStroke'
import Hanko from './Hanko'
import { missions, bonus } from '../data/content'

export default function Missions() {
  return (
    <section className="bg-[#EFE9DB] py-16 md:py-32">
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <Hanko size={64} className="mx-auto mb-8" />
          <span className="mb-4 block font-body text-xs font-medium uppercase tracking-[0.2em] text-kin">
            {missions.eyebrow}
          </span>
          <h2 className="relative inline-block font-display text-3xl font-bold text-sumi sm:text-4xl">
            {missions.title}
            <BrushStroke className="-bottom-2 h-3" />
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-base text-nezumi md:text-lg">
            {missions.description}
          </p>
        </ScrollReveal>

        <ScrollReveal index={1} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {missions.bullets.map((bullet) => (
            <span
              key={bullet}
              className="rounded-full border border-shu/30 bg-washi px-4 py-2 font-body text-xs font-medium uppercase tracking-wide text-sumi"
            >
              {bullet}
            </span>
          ))}
        </ScrollReveal>

        {/* Diário de Treino — order bump opcional na Kiwify, exibido discreto abaixo das missões */}
        <ScrollReveal
          index={2}
          className="mx-auto mt-14 flex max-w-lg items-center gap-5 rounded-xl border border-sumi/10 bg-washi/60 p-5 text-left"
        >
          <img
            src="/mockup-diario.png"
            alt="Mockup do Diário de Treino — 30 Dias"
            loading="lazy"
            width={140}
            height={180}
            className="w-16 shrink-0 rounded-lg shadow-lg shadow-sumi/10 sm:w-20"
          />
          <div>
            <span className="block font-body text-[11px] font-medium uppercase tracking-[0.2em] text-kin">
              {bonus.eyebrow}
            </span>
            <p className="mt-1 font-display text-base font-semibold text-sumi">{bonus.title}</p>
            <p className="mt-1 font-body text-xs text-nezumi">{bonus.description}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
