import ScrollReveal from './ScrollReveal'
import { about, author } from '../data/content'

export default function About() {
  return (
    <section className="bg-washi py-24 md:py-32">
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 md:flex-row md:items-start">
        <ScrollReveal className="shrink-0">
          <div className="relative p-2">
            <img
              src="/laura.jpg"
              alt={about.photoAlt}
              loading="lazy"
              width={220}
              height={220}
              className="h-44 w-44 rounded-full object-cover sm:h-56 sm:w-56"
            />
            <svg
              viewBox="0 0 240 240"
              className="pointer-events-none absolute inset-0 h-full w-full text-shu"
              aria-hidden="true"
            >
              <circle
                cx="120"
                cy="120"
                r="112"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="8 6"
              />
            </svg>
          </div>
        </ScrollReveal>

        <ScrollReveal index={1} className="text-center md:text-left">
          <span className="mb-3 block font-body text-xs font-medium uppercase tracking-[0.2em] text-kin">
            {about.eyebrow}
          </span>
          <h2 className="mb-6 font-display text-3xl font-bold text-sumi sm:text-4xl">
            {about.title}
          </h2>
          <div className="flex flex-col gap-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-body text-sm text-sumi/80 md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-6 font-display text-base font-semibold text-shu">{about.closing}</p>
          <p className="mt-4 font-body text-xs uppercase tracking-wide text-nezumi">
            {author.instagram}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
