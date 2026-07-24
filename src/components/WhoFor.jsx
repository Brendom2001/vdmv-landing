import ScrollReveal from './ScrollReveal'
import { whoFor } from '../data/content'

export default function WhoFor() {
  return (
    <section className="bg-[#EFE9DB] py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <ScrollReveal className="mb-14 text-center">
          <span className="mb-4 block font-body text-xs font-medium uppercase tracking-[0.2em] text-kin">
            {whoFor.eyebrow}
          </span>
          <h2 className="font-display text-3xl font-bold text-sumi sm:text-4xl">{whoFor.title}</h2>
        </ScrollReveal>

        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          <ScrollReveal index={1}>
            <h3 className="font-display text-lg font-semibold text-shu">{whoFor.yes.title}</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {whoFor.yes.items.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm text-sumi/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-shu" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal index={2}>
            <h3 className="font-display text-lg font-semibold text-nezumi">{whoFor.no.title}</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {whoFor.no.items.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm text-sumi/50">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-nezumi" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
