import { motion } from 'framer-motion'
import Hanko from '../components/Hanko'
import { obrigado } from '../data/content'

const EASE = [0.76, 0, 0.24, 1]

export default function Obrigado() {
  return (
    <main className="min-h-screen bg-washi py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-display text-3xl font-bold text-sumi sm:text-4xl"
        >
          {obrigado.title}
        </motion.h1>

        <ul className="mt-14 flex flex-col gap-8 text-left">
          {obrigado.steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: EASE }}
              className="flex items-start gap-5"
            >
              <Hanko size={44} />
              <div>
                <h2 className="font-display text-lg font-semibold text-sumi">
                  {i + 1}. {step.title}
                </h2>
                <p className="mt-1 font-body text-sm text-nezumi">{step.description}</p>
                {step.href && (
                  <a
                    href={step.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block font-body text-sm font-medium text-shu underline"
                  >
                    Entrar no grupo
                  </a>
                )}
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
          className="mt-14 rounded-xl border border-kin/30 bg-[#EFE9DB] p-6 font-body text-sm text-sumi/80"
        >
          {obrigado.bonusReminder}
        </motion.p>
      </div>
    </main>
  )
}
