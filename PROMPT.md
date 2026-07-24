# PROMPT MESTRE — Página de Vendas "O Caminho Ninja"

> Cole este prompt no Claude Code na raiz de um projeto novo. Ele segue a metodologia: CONTEXTO → DESIGN SYSTEM → ESTRUTURA → ANIMAÇÕES → TÉCNICO → QA.
> Itens marcados com `[AJUSTAR]` devem ser revisados por você/Laura antes ou depois do build.

---

Você é um desenvolvedor front-end sênior especializado em páginas de vendas de alta conversão. Construa uma página de vendas completa seguindo EXATAMENTE as especificações abaixo. Não simplifique seções, não pule animações, não substitua a direção de design por padrões genéricos.

## 1. CONTEXTO DO PRODUTO

- **Produto:** e-book "O Caminho Ninja" — desenvolvimento pessoal com filosofia de disciplina e treino diário inspirada na cultura ninja (conceito autoral). Subtítulo de campanha: "Vai Doer. Vai Treinar. Vai Mudar."
- **Autora:** Laura Ferreira, criadora de conteúdo. Instagram `@lauuferreiira`.
- **Público:** qualquer pessoa que se sente travada, procrastinando a própria vida, e quer um método prático (não motivacional vazio) para virar a chave. Público não é mais restrito por gênero — ver regra de linguagem abaixo.
- **Promessa central:** um método de disciplina real, inspirado na filosofia de quem foi subestimado, rejeitado, e mesmo assim treinou até se tornar o mais forte.
- **Oferta:** e-book por R$ 27 (ancorado de R$ 97). `[AJUSTAR: preço final]`. Order bump e checkout ficam na Kiwify — o botão de CTA leva para `[AJUSTAR: link do checkout Kiwify]`.
- **Objetivo único da página:** clique no CTA de compra. Nada de menu com várias rotas, nada de links externos além do checkout.

### ⚠️ RESTRIÇÃO DE PROPRIEDADE INTELECTUAL OBRIGATÓRIA
A filosofia é inspirada no universo ninja, mas a página NÃO PODE nomear nenhum personagem, técnica, vila ou marca de anime licenciado. Sem nomes de personagens, sem artes oficiais, sem símbolos reconhecíveis (bandana, logos, vilas). Use **apenas arquétipos descritos**, nunca nomes próprios — ex.: "o que foi rejeitado por todos e treinou até se tornar o mais forte", "quem carregou escolhas impossíveis em silêncio". Onde o conteúdo falar em "clones", use "repetição" / "mil repetições" em vez do nome da técnica. A palavra "ninja" (genérica) e o termo "Missão Ninja" são os únicos termos ninja usados como nome próprio — são liberados. A estética é **japonesa autoral** (sumi-ê, washi, vermelho tradicional), nunca "página de fã de anime".

### Regra de linguagem — neutralidade de gênero
Toda a copy voltada ao leitor é neutra em gênero: sem adjetivos flexionados ("cansada", "sozinho", "pronta"). Regra prática: reescreva usando verbos e substantivos. Ex.: em vez de "Você está cansada de carregar tudo sozinha", use "Esse cansaço não é de fazer demais. É de carregar tudo e se trair todos os dias." Nenhuma flexão de gênero pode sobrar em nenhuma seção, incluindo botões, FAQ e microcopy. Exceção: os parágrafos da Laura em primeira pessoa (seção Sobre a Autora), onde ela descreve a própria experiência — aí a flexão feminina é dela mesma, não uma suposição sobre o leitor.

## 2. STACK

- React + Vite + TailwindCSS + Framer Motion.
- Deploy alvo: Vercel. Projeto em JavaScript (não TypeScript). `npm install` com `--legacy-peer-deps` se houver conflito de peers.
- Componentes em `/src/components`, um arquivo por seção. Dados de copy centralizados em `/src/data/content.js` para facilitar edição pela Laura.
- **Asset existente:** `/public/Shuriken.png` — shuriken pintada à mão, vermelho `shu`, textura de pincel, fundo transparente, usada no elemento-assinatura do Hero (ver seção Shuriken Scroll) e como favicon.

## 3. DESIGN SYSTEM — "Editorial Sumi-ê"

A página NÃO deve parecer template de infoproduto (fundo preto + dourado brega) nem landing genérica de IA. A referência é papelaria japonesa premium + editorial de livro. **Paleta, tipografia e elemento-assinatura não mudam entre revisões de copy — só o conteúdo textual muda.**

**Cores (definidas como tokens no Tailwind config):**
- `washi` #F6F1E7 — fundo claro predominante (textura de papel sutil via SVG noise, opacidade ≤ 4%)
- `sumi` #191612 — seções escuras de contraste (Hero, Apresentação do Produto e Oferta) e cor de texto no claro
- `shu` #C7392B — vermelho tradicional japonês, EXCLUSIVO para CTAs, o traço-assinatura e detalhes de destaque
- `kin` #B99757 — dourado envelhecido, uso raro (eyebrows, filetes, selo de garantia)
- `nezumi` #7A736A — texto secundário

**Tipografia (Fontshare, via CSS variables):**
- Display: **Erode**, pesos 500/600 — títulos (H1-H3), tracking -0.02em, leading 1.05–1.15
- Corpo: **Satoshi**, pesos 400/500/700 — parágrafos e UI, leading 1.6
- As famílias ficam em `--font-display` / `--font-body` (`src/index.css`); trocar tipografia no futuro é editar essas duas linhas, nunca os componentes.
- Detalhe: eyebrows em caps, tracking largo (0.2em), tamanho 12px, cor `kin`

**Elemento-assinatura (aparece com disciplina, não em toda seção):**
1. **Pincelada sumi-ê animada** — SVG de traço de pincel horizontal sob palavras-chave dos títulos, animado com `pathLength` 0→1 quando entra na viewport. Cor `shu`. Usada no Hero, na Virada, nas Missões Ninja, na Oferta e nas faixas de frase de impacto.
2. **Selo hanko** — carimbo circular vermelho com o kanji 変 (mudança) usado como marcador de seção no lugar de números genéricos, em evidência na seção Missões Ninja, e como selo da garantia.
3. **Shuriken pintada** — acompanha o scroll da página inteira no desktop (rastro fixo, rotação contínua + física de velocidade), e existe de forma mais contida só dentro do Hero no mobile e com `prefers-reduced-motion`.

**Ritmo:** seções alternam `washi` ↔ `washi` levemente escurecido, com Hero, Apresentação do Produto e Oferta em `sumi` para drama, e faixas de frase de impacto como respiro entre blocos de conteúdo. Sem divisores pesados. Espaçamento generoso (py-24 mobile / py-32 desktop). Border-radius contido (rounded-xl máximo).

## 4. ESTRUTURA DA PÁGINA (ordem obrigatória)

**0. ScrollProgress** — barra fixa no topo, gradiente `shu`→`kin`, `scaleX` via `useScroll`.

**1. Navbar mínima** — logotipo tipográfico "O CAMINHO NINJA" (caixa alta, tracking largo, tamanho pequeno) à esquerda e um CTA pequeno à direita. Blur progressivo no scroll (`backdropFilter: blur(16px)` + bg translúcido após 40px).

**2. Hero (fundo `sumi`)**
- Eyebrow: "PARA QUEM JÁ CANSOU DE RECOMEÇAR"
- H1: "Você já sabe o que precisa fazer." / segunda linha, com a pincelada sumi-ê animada em `shu`: "O problema é que você continua não fazendo."
- Sub: "Um método de disciplina real, inspirado na filosofia de quem foi subestimado, rejeitado, e mesmo assim treinou até se tornar o mais forte."
- Mockup 3D do e-book (usar `/public/mockup-ebook.png` — placeholder até a arte final) com parallax sutil e leve rotação no hover.
- CTA primário (MagneticButton): "QUERO COMEÇAR MEU TREINO — R$ 27" `[AJUSTAR: preço final]`
- Microcopy sob o botão: "Acesso imediato · 9 capítulos + 9 missões práticas · Garantia de 7 dias"
- Parallax de fundo: `bgY` 0%→30% no scroll.

**ELEMENTO-ASSINATURA — "Shuriken Scroll" (obrigatório):**
- Desktop com motion habilitada: rastro fixo (`ShurikenTrail`) que acompanha o scroll do **documento inteiro**, não só do Hero — ancorado na calha direita da tela, descendo de top ~30vh a ~65vh, escala 1→0.12, opacity 0.85 até 85% do scroll caindo a 0 nos últimos 15%. z-index sempre abaixo de texto/cards, acima só dos fundos (cada seção precisa de um wrapper de conteúdo com `relative z-10` para isso funcionar).
- Rotação ligada ao scroll: `useScroll` + `useTransform` mapeando o progresso da página inteira para `rotate` 0° → 2160° (6 voltas).
- Tempero de física: `useVelocity(scrollYProgress)` somado à rotação base (clamp ±180°), passado por `useSpring({ stiffness: 120, damping: 22 })`.
- Mobile: shuriken existe só dentro do Hero (`absolute`, nunca `fixed` — o Hero tem `overflow-hidden`, o que garante que ela nunca vaza pra próxima seção), scale 1→0.2 e opacity→0 ao fim da primeira seção.
- Transição de corte: a entrada da seção Dor usa `clip-path` de polígono diagonal animado (cresce de 0 até virar um retângulo sólido exatamente quando o Hero termina, evitando qualquer flash da cor escura do Hero sobre o fundo claro da próxima seção).
- `prefers-reduced-motion`: shuriken estática, só dentro do Hero, clip-path vira fade simples.

**3. Dor** (fundo `washi`)
Eyebrow "ISSO TE SOA FAMILIAR?" + H2 "Você não está começando do zero. Está começando de novo." Lista de 5 dores com check estilizado (traço de pincel curto em `shu`), stagger na entrada:
- "Você começa na segunda. Para na quarta. Recomeça na próxima segunda."
- "Sabe exatamente o que precisa mudar — e mesmo assim não mantém."
- "Consome conteúdo de desenvolvimento pessoal o dia inteiro e não aplica nada."
- "Vive esperando o momento certo, a motivação, o sinal."
- "Já tentou antes. Mais de uma vez. E é justamente isso que faz doer mais."
Fechamento (destaque `shu`): "Esse cansaço não é de fazer demais. É de carregar tudo e se trair todos os dias."

**Faixa de impacto 1** — "O ninja não espera o clima melhorar para treinar. Ele treina na chuva."

**4. A Virada — o método** (fundo `washi` alt)
Eyebrow "O CAMINHO" + H2 com pincelada "Não é fraqueza. É que ninguém te ensinou a diferença." Três pilares em cards com hover (scale 1.03 + boxShadow colorida sutil):
- **Motivação x Decisão** — "Motivação é visita. Decisão é residência. Uma vai embora quando o dia fica difícil; a outra fica."
- **Descanso x Paralisia** — "Existe cansaço que pede pausa e existe cansaço que virou esconderijo. Aprender a diferença muda tudo."
- **Querer x Treinar** — "Querer mudar é confortável. Treinar é o que acontece quando ninguém está olhando."

**5. Apresentação do produto** (fundo `sumi`, seção curta e centralizada, sem cards — contraste dramático no meio da página)
Eyebrow "O PRODUTO" + H2 "O Caminho Ninja" + parágrafo: "Um e-book de desenvolvimento pessoal que usa a filosofia ninja — treino invisível, constância acima de talento, disciplina sem plateia — para te tirar do automático, quebrar os ciclos que te prendem e construir a consistência que ninguém vai construir por você." Frase de destaque abaixo, em Erode, tamanho grande, `shu`: "Vai Doer. Vai Treinar. Vai Mudar."

**6. O que tem dentro** (fundo `washi`)
Eyebrow "O CONTEÚDO" + H2 "O que tem dentro". Capítulos como lista vertical que expande (accordion com AnimatePresence, height 0→auto). Cada item: selo hanko pequeno + título + 1 linha de descrição ao expandir. 11 itens (Introdução + 9 capítulos + Encerramento) — ver `src/data/content.js -> chapters.list` para o texto completo. Abaixo, contador animado (rAF + ease-out cúbico): "11 capítulos · 9 missões práticas · 1 decisão".

**Faixa de impacto 2** — "Constância não é fazer quando você está bem. É fazer com medo, com raiva, com cansaço."

**7. Missões Ninja** (fundo `washi` alt, selo hanko em evidência no topo)
Eyebrow "O DIFERENCIAL" + H2 com pincelada "Não é leitura. É treino." + parágrafo: "Cada capítulo fecha com uma Missão Ninja — um exercício direto, aplicável, que você faz antes de passar para o próximo. Sem missão cumprida, sem próximo capítulo." Três bullets curtos: "Aplicação imediata" · "Uma missão por capítulo" · "Feito para ser lido em partes". Abaixo, de forma discreta: card pequeno do "Diário de Treino — 30 Dias" como order bump opcional da Kiwify (não colocar preço aqui).

**8. Sobre a Autora** (fundo `washi`)
Eyebrow "QUEM ESCREVEU" + H2 "Laura Ferreira". Foto com moldura de traço de pincel `[AJUSTAR: foto real]`. Texto em primeira pessoa, 3 parágrafos curtos `[AJUSTAR: trajetória real da Laura — nunca inventar credenciais]`. Frase de fechamento: "Eu não escrevo sobre perfeição. Escrevo sobre o processo real — os dias feios, os recomeços, as escolhas difíceis." Instagram: `@lauuferreiira`.

**9. Para quem é / para quem não é** (fundo `washi` alt)
Duas colunas lado a lado (empilhadas no mobile). Coluna esquerda ("É pra você se:") com marcador `shu`; coluna direita ("NÃO é pra você se:") com marcador `nezumi` e texto esmaecido.

**10. Depoimentos** (fundo `washi` alt, marquee)
MarqueeSection (loop CSS, pausa no hover, lista duplicada). `[AJUSTAR: usar depoimentos REAIS de leitores beta. Se ainda não existirem, OMITIR a seção inteira — nunca publicar depoimento inventado.]`

**Faixa de impacto 3** — "O resultado não aparece durante o treino. Aparece depois. E só para quem ficou."

**11. Oferta** (fundo `sumi`)
- H2 com pincelada: "Seu treino começa hoje"
- Card central: "E-book completo O Caminho Ninja (11 capítulos)" · "9 Missões Ninja práticas" · "Acesso imediato e vitalício". Preço ancorado ("de R$ 97") riscado, "por R$ 27" em destaque `shu` `[AJUSTAR: preço final]`, parcelamento da Kiwify.
- Linha de valor: "Por menos do que você gasta numa semana de café, você tem o método que pode mudar o próximo ano."
- CTA MagneticButton grande: "COMEÇAR O MEU CAMINHO NINJA" → link Kiwify.
- Selo hanko de garantia: "7 dias de garantia incondicional. Não serviu pra você? Devolvemos tudo."

**12. FAQ** (fundo `washi`)
Accordion AnimatePresence com 5 perguntas, formuladas como objeções (não como perguntas neutras de suporte): "Não tenho tempo para ler.", "Já li vários e-books e não mudou nada.", "Não curto anime, isso é pra mim?", "Como recebo o material?", "E se não for pra mim?" `[AJUSTAR: política de reembolso real na última resposta]`.

**13. CTA final + Footer**
Frase grande em Erode: "Você chegou até o fim dessa página. Isso já diz algo sobre você." + linha "Agora só falta uma coisa: a decisão." + botão "VAI LÁ E FAZ". Footer mínimo: logotipo "O CAMINHO NINJA", © Laura Ferreira, termos, política de privacidade `[AJUSTAR: criar páginas legais depois]`, aviso "Este produto não substitui acompanhamento psicológico profissional."

**14. CTA fixo mobile** — barra inferior fixa (aparece após rolar o Hero, com AnimatePresence): preço + botão "Começar agora".

## 5. ANIMAÇÕES (padrões obrigatórios — não mudam entre revisões de copy)

- ScrollReveal em todas as seções: `useInView` + fade/translateY(24px), `once: true`.
- Stagger universal: `delay: 0.2 + i * 0.08`.
- Easing cinemático padrão: `[0.76, 0, 0.24, 1]`. Durações: 0.4–0.6s padrão, 0.8–1.2s para o Hero.
- Pincelada SVG: `pathLength` 0→1, duração 1.1s, delay 0.3s após entrar na viewport.
- Hero: stagger de caracteres no H1 (`i * 0.055`) + parallax `useScroll`+`useTransform`.
- MagneticButton nos CTAs (spring `stiffness: 280, damping: 28`).
- `prefers-reduced-motion`: desativar parallax e stagger de caracteres, manter fades simples.

## 6. TÉCNICO / SEO / TRACKING

- **Schema.org JSON-LD no `<head>`** (via index.html): `Product` (nome "O Caminho Ninja", `Offer` price 27.00 BRL), `Person` (Laura Ferreira, autora), `FAQPage` com as 5 perguntas reais do FAQ.
- **Meta tags:** title "O Caminho Ninja — Disciplina real para quem já cansou de recomeçar | Laura Ferreira", description ≤ 155 caracteres, OG image `/public/og.jpg` (placeholder), lang="pt-BR".
- **Meta Pixel:** snippet no `<head>` com `[AJUSTAR: PIXEL_ID]`. Eventos: `PageView` no load, `InitiateCheckout` disparado em TODOS os cliques de CTA antes do redirect para a Kiwify. (`Purchase` será configurado dentro da Kiwify, não na página.)
- **Performance:** imagens lazy (exceto Hero), mockups otimizados, fontes com `display=swap` e preconnect (Fontshare), zero libs além do stack. Alvo Lighthouse mobile ≥ 90.
- **Acessibilidade:** contraste AA nos textos sobre `sumi`, foco visível nos CTAs, alt em todas as imagens.

## 7. QA FINAL (executar antes de encerrar)

1. `npm run build` sem erros ou warnings críticos.
2. Testar viewport 375px: nenhum overflow horizontal, CTA fixo funcionando, H1 legível.
3. Todos os CTAs apontando para o mesmo link Kiwify e disparando `InitiateCheckout`.
4. Accordions abrem/fecham sem saltos de layout.
5. Validar o JSON-LD (sem vírgulas sobrando, preço correto, perguntas do FAQ em sincronia com a página).
6. Conferir que NENHUMA imagem ou texto referencia anime licenciado (personagem, técnica, vila ou marca).
7. Conferir que NENHUM texto voltado ao leitor tem flexão de gênero (exceto os parágrafos em primeira pessoa da Laura).
8. Listar ao final tudo que ficou como `[AJUSTAR]` para revisão humana.

---

## PÁGINA 2 — Obrigado/Acesso (mesmo projeto, rota `/obrigado`)

Página simples, mesma identidade: H1 "Seu treino começa agora, ninja 🥷", 3 passos numerados com selo hanko (1. Confira seu e-mail da Kiwify · 2. Baixe seu e-book · 3. Entre no grupo do WhatsApp `[AJUSTAR: link]`), e um lembrete do Diário de Treino para quem não pegou o bump. Pixel: evento `Purchase` NÃO dispara aqui (fica na Kiwify) — apenas `PageView`.
