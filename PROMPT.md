# PROMPT MESTRE — Página de Vendas "Vai Doer, Mas Vai Mudar"

> Cole este prompt no Claude Code na raiz de um projeto novo. Ele segue a metodologia: CONTEXTO → DESIGN SYSTEM → ESTRUTURA → ANIMAÇÕES → TÉCNICO → QA.
> Itens marcados com `[AJUSTAR]` devem ser revisados por você/Laura antes ou depois do build.

---

Você é um desenvolvedor front-end sênior especializado em páginas de vendas de alta conversão. Construa uma página de vendas completa seguindo EXATAMENTE as especificações abaixo. Não simplifique seções, não pule animações, não substitua a direção de design por padrões genéricos.

## 1. CONTEXTO DO PRODUTO

- **Produto:** e-book "Vai Doer, Mas Vai Mudar" — desenvolvimento pessoal com filosofia de disciplina e treino diário inspirada na cultura ninja/japonesa (conceito autoral).
- **Autora:** Laura Ferreira, criadora de conteúdo com audiência engajada no Instagram. `[AJUSTAR: @ do Instagram e nº de seguidores]`
- **Público:** mulheres de 18 a 35 anos que se sentem travadas, procrastinando a própria vida, e querem um método prático (não motivacional vazio) para virar a chave.
- **Promessa central:** "30 dias de treino mental para sair do modo espectadora e assumir o controle da sua própria história."
- **Oferta:** e-book por R$ 27 (ancorado de R$ 97). Order bump e checkout ficam na Kiwify — o botão de CTA leva para `[AJUSTAR: link do checkout Kiwify]`.
- **Objetivo único da página:** clique no CTA de compra. Nada de menu com várias rotas, nada de links externos além do checkout.

### ⚠️ RESTRIÇÃO LEGAL OBRIGATÓRIA
NÃO usar nenhuma referência a Naruto ou a qualquer anime licenciado: sem nomes de personagens, sem artes oficiais, sem símbolos reconhecíveis (bandana, logos, vilas). A estética é **japonesa autoral** (sumi-ê, washi, vermelho tradicional), nunca "página de fã de anime".

## 2. STACK

- React + Vite + TailwindCSS + Framer Motion.
- Deploy alvo: Vercel. Projeto em JavaScript (não TypeScript). `npm install` com `--legacy-peer-deps` se houver conflito de peers.
- Componentes em `/src/components`, um arquivo por seção. Dados de copy centralizados em `/src/data/content.js` para facilitar edição pela Laura.
- **Asset existente:** `/public/shuriken.webp` — shuriken em traço sumi-ê, fundo transparente, usada no elemento-assinatura do Hero (ver seção Shuriken Scroll). Se o arquivo não existir no projeto, usar um placeholder SVG simples de 4 pontas e avisar no final.

## 3. DESIGN SYSTEM — "Editorial Sumi-ê"

A página NÃO deve parecer template de infoproduto (fundo preto + dourado brega) nem landing genérica de IA. A referência é papelaria japonesa premium + editorial de livro.

**Cores (definir como tokens no Tailwind config):**
- `washi` #F6F1E7 — fundo claro predominante (textura de papel sutil via SVG noise, opacidade ≤ 4%)
- `sumi` #191612 — seções escuras de contraste (Hero e Oferta) e cor de texto no claro
- `shu` #C7392B — vermelho tradicional japonês, EXCLUSIVO para CTAs, o traço-assinatura e detalhes de destaque
- `kin` #B99757 — dourado envelhecido, uso raro (eyebrows, filetes, selo de garantia)
- `nezumi` #7A736A — texto secundário

**Tipografia (Google Fonts):**
- Display: **Shippori Mincho** (serif com DNA japonês) — títulos, pesos 600/700, tracking levemente negativo
- Corpo: **Zen Kaku Gothic New** — parágrafos e UI, pesos 400/500
- Detalhe: eyebrows em caps, tracking largo (0.2em), tamanho 12px, cor `kin`

**Elemento-assinatura (aparece com disciplina, não em toda seção):**
1. **Pincelada sumi-ê animada** — SVG de traço de pincel horizontal sob palavras-chave dos títulos, animado com `pathLength` 0→1 quando entra na viewport. Cor `shu`. Usar no Hero, na Virada e na Oferta. É a marca visual da página.
2. **Selo hanko** — carimbo circular vermelho com o kanji 変 (mudança) usado como marcador de seção no lugar de números genéricos, e como selo da garantia.

**Ritmo:** seções alternam `washi` ↔ `washi` levemente escurecido, com Hero e Oferta em `sumi` para drama. Sem divisores pesados. Espaçamento generoso (py-24 mobile / py-32 desktop). Border-radius contido (rounded-xl máximo).

## 4. ESTRUTURA DA PÁGINA (ordem obrigatória)

**0. ScrollProgress** — barra fixa no topo, gradiente `shu`→`kin`, `scaleX` via `useScroll`.

**1. Navbar mínima** — só o logotipo tipográfico "VDMV" à esquerda e um CTA pequeno à direita. Blur progressivo no scroll (`backdropFilter: blur(16px)` + bg translúcido após 40px).

**2. Hero (fundo `sumi`)**
- Eyebrow: "PARA MULHERES QUE CANSARAM DE ESPERAR"
- H1: "Vai doer. **Mas vai mudar.**" — "Mas vai mudar" recebe a pincelada sumi-ê animada em `shu`.
- Sub: "Um treino mental de 30 dias para você parar de assistir a própria vida e começar a viver ela — com método, não com frase motivacional."
- Mockup 3D do e-book (usar `/public/mockup-ebook.png` — placeholder até a arte final) com parallax sutil e leve rotação no hover.
- CTA primário (MagneticButton): "QUERO COMEÇAR MEU TREINO — R$ 27"
- Microcopy sob o botão: "Acesso imediato · Garantia de 7 dias"
- Parallax de fundo: `bgY` 0%→30% no scroll.

**ELEMENTO-ASSINATURA DO HERO — "Shuriken Scroll" (obrigatório):**
- A imagem `/public/shuriken.webp` fica posicionada atrás/ao lado do mockup do e-book (desktop: à direita, parcialmente sobreposta; mobile: menor, acima do mockup). Ela NUNCA bloqueia headline nem CTA — a primeira tela carrega completa e imediata.
- Rotação ligada ao scroll: `useScroll` + `useTransform` mapeando o progresso do Hero (0 → 0.25 da página) para `rotate` 0° → 1080° (3 voltas).
- Tempero de física: `useVelocity(scrollYProgress)` somado à rotação base (clamp ±180°), passado por `useSpring({ stiffness: 120, damping: 22 })` — flick rápido no mobile faz a shuriken chicotear e assentar.
- Transição de corte: a entrada da seção Dor usa `clip-path` de polígono diagonal animado (fechado → aberto) sincronizado ao mesmo `scrollYProgress`, criando o efeito de "talho de lâmina" no momento de giro máximo da shuriken.
- `prefers-reduced-motion`: shuriken estática, clip-path vira fade simples.
- Performance: a imagem é um único WebP (~40kb), `loading="eager"` por estar no Hero, `pointer-events-none select-none`.

**3. Dor — "Se você se reconhece aqui..."** (fundo `washi`)
Lista de 5 dores com check estilizado (traço de pincel curto em `shu`), stagger na entrada:
- "Você sabe o que precisa fazer, mas nunca começa"
- "Vive comparando sua vida com a das outras no Instagram"
- "Começa mil coisas e não termina nenhuma"
- "Sente que os dias passam e você continua no mesmo lugar"
- "Já tentou 'pensar positivo' e nada mudou"
Fechamento: "Não é falta de força de vontade. É falta de treino."

**4. A Virada — o método** (fundo `washi` alt)
Eyebrow "O CAMINHO" + H2 "Disciplina se treina como músculo". Três pilares em cards com hover (scale 1.03 + boxShadow colorida sutil):
- **Mente de Aprendiz** — largar a autocobrança paralisante e voltar ao modo iniciante
- **Treino Diário** — micro-ações de 15 minutos, todos os dias, sem depender de motivação
- **Dor com Direção** — usar o desconforto como bússola, não como desculpa
`[AJUSTAR: nomes/descrições dos pilares conforme os capítulos reais do e-book]`

**5. O que tem dentro** (fundo `washi`)
Capítulos apresentados como "pergaminhos": lista vertical de itens que expandem (accordion com AnimatePresence, height 0→auto). Cada item: selo hanko pequeno + título do capítulo + 1 linha de descrição ao expandir. `[AJUSTAR: lista real de capítulos]`. Abaixo, contador animado (rAF + ease-out cúbico): "X capítulos · X exercícios práticos · 30 dias de treino".

**6. Bônus — Diário de Treino** (fundo `washi` alt)
Card destacado apresentando o "Diário de Treino — 30 Dias" como bônus/complemento disponível no checkout. Mockup do diário + 3 bullets do que contém. Não colocar preço aqui (o bump é precificado na Kiwify).

**7. Quem é a Laura** (fundo `washi`)
Foto da Laura `[AJUSTAR: foto]` com moldura de traço de pincel, texto em primeira pessoa (3 parágrafos curtos): a jornada dela, por que escreveu o livro, para quem é. Prova social: seguidores + prints de comentários/DMs `[AJUSTAR: prints reais — nunca inventar]`.

**8. Depoimentos** (fundo `washi` alt)
MarqueeSection (loop CSS, pausa no hover, lista duplicada) com cards de depoimentos. `[AJUSTAR: usar depoimentos REAIS de leitoras beta. Se ainda não existirem, OMITIR a seção inteira no primeiro deploy — nunca publicar depoimento inventado.]`

**9. Oferta (fundo `sumi`)**
- H2 com pincelada: "Seu treino começa hoje"
- Card central: tudo que recebe (e-book + itens), preço ancorado ("de R$ 97") riscado, "por R$ 27" em destaque `shu`, parcelamento da Kiwify.
- CTA MagneticButton grande → link Kiwify.
- Selo hanko de garantia ao lado: "7 dias de garantia incondicional. Não mudou nada pra você? Devolvemos tudo."

**10. FAQ** (fundo `washi`)
Accordion AnimatePresence com 6 perguntas: formato de acesso, para quem é / não é, quanto tempo por dia, garantia, formas de pagamento, "preciso gostar de anime?" (resposta: não — a filosofia é universal).

**11. CTA final + Footer**
Última chamada curta + botão. Footer mínimo: © Laura Ferreira, termos, política de privacidade `[AJUSTAR: criar páginas legais depois]`, aviso "Este produto não substitui acompanhamento psicológico profissional."

**12. CTA fixo mobile** — barra inferior fixa (aparece após rolar o Hero, com AnimatePresence): preço + botão "Começar agora".

## 5. ANIMAÇÕES (padrões obrigatórios)

- ScrollReveal em todas as seções: `useInView` + fade/translateY(24px), `once: true`.
- Stagger universal: `delay: 0.2 + i * 0.08`.
- Easing cinemático padrão: `[0.76, 0, 0.24, 1]`. Durações: 0.4–0.6s padrão, 0.8–1.2s para o Hero.
- Pincelada SVG: `pathLength` 0→1, duração 1.1s, delay 0.3s após entrar na viewport.
- Hero: stagger de caracteres no H1 (`i * 0.055`) + parallax `useScroll`+`useTransform`.
- MagneticButton nos CTAs (spring `stiffness: 280, damping: 28`).
- `prefers-reduced-motion`: desativar parallax e stagger de caracteres, manter fades simples.

## 6. TÉCNICO / SEO / TRACKING

- **Schema.org JSON-LD no `<head>`** (via index.html): `Product` (com `Offer` price 27.00 BRL), `Person` (Laura Ferreira, autora), `FAQPage` com as perguntas reais do FAQ.
- **Meta tags:** title "Vai Doer, Mas Vai Mudar — Treino mental de 30 dias | Laura Ferreira", description ≤ 155 caracteres, OG image `/public/og.jpg` (placeholder), lang="pt-BR".
- **Meta Pixel:** snippet no `<head>` com `[AJUSTAR: PIXEL_ID]`. Eventos: `PageView` no load, `InitiateCheckout` disparado em TODOS os cliques de CTA antes do redirect para a Kiwify. (`Purchase` será configurado dentro da Kiwify, não na página.)
- **Performance:** imagens lazy (exceto Hero), mockups em WebP, fontes com `display=swap` e preconnect, zero libs além do stack. Alvo Lighthouse mobile ≥ 90.
- **Acessibilidade:** contraste AA nos textos sobre `sumi`, foco visível nos CTAs, alt em todas as imagens.

## 7. QA FINAL (executar antes de encerrar)

1. `npm run build` sem erros ou warnings críticos.
2. Testar viewport 375px: nenhum overflow horizontal, CTA fixo funcionando, H1 legível.
3. Todos os CTAs apontando para o mesmo link Kiwify e disparando `InitiateCheckout`.
4. Accordions abrem/fecham sem saltos de layout.
5. Validar o JSON-LD (sem vírgulas sobrando, preço correto).
6. Conferir que NENHUMA imagem ou texto referencia anime licenciado.
7. Listar ao final tudo que ficou como `[AJUSTAR]` para revisão humana.

---

## PÁGINA 2 — Obrigado/Acesso (mesmo projeto, rota `/obrigado`)

Página simples, mesma identidade: H1 "Bem-vinda ao treino, guerreira 🥷" `[AJUSTAR: tom da Laura]`, 3 passos numerados com selo hanko (1. Confira seu e-mail da Kiwify · 2. Baixe seu e-book · 3. Entre no grupo do WhatsApp `[AJUSTAR: link]`), e um lembrete do Diário de Treino para quem não pegou o bump. Pixel: evento `Purchase` NÃO dispara aqui (fica na Kiwify) — apenas `PageView`.
