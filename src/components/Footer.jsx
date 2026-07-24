import { footer, author } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-sumi py-12">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <span className="font-display text-sm font-semibold text-washi">VDMV</span>
        <p className="max-w-md font-body text-xs text-washi/50">{footer.disclaimer}</p>
        <div className="flex gap-4 font-body text-xs text-washi/50">
          <a href={footer.termsHref} className="hover:text-washi">
            Termos de uso
          </a>
          <a href={footer.privacyHref} className="hover:text-washi">
            Política de privacidade
          </a>
        </div>
        <p className="font-body text-xs text-washi/30">
          © {new Date().getFullYear()} {author.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
