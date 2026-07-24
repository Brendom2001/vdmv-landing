// Copy centralizada — edite aqui sem tocar nos componentes.
// Itens marcados //AJUSTAR precisam de revisão humana antes do deploy final.

export const KIWIFY_LINK = 'https://pay.kiwify.com.br/AJUSTAR-LINK-CHECKOUT' //AJUSTAR: link real do checkout Kiwify

export const author = {
  name: 'Laura Ferreira',
  instagram: '@AJUSTAR_INSTAGRAM', //AJUSTAR: @ do Instagram real
  followers: 'AJUSTAR mil', //AJUSTAR: número real de seguidores
}

export const hero = {
  eyebrow: 'PARA MULHERES QUE CANSARAM DE ESPERAR',
  titleLine1: 'Vai doer.',
  titleLine2: 'Mas vai mudar.',
  sub: 'Um treino mental de 30 dias para você parar de assistir a própria vida e começar a viver ela — com método, não com frase motivacional.',
  ctaLabel: 'QUERO COMEÇAR MEU TREINO — R$ 27',
  microcopy: 'Acesso imediato · Garantia de 7 dias',
}

export const pains = {
  eyebrow: 'ISSO TE SOA FAMILIAR?',
  title: 'Se você se reconhece aqui...',
  items: [
    'Você sabe o que precisa fazer, mas nunca começa',
    'Vive comparando sua vida com a das outras no Instagram',
    'Começa mil coisas e não termina nenhuma',
    'Sente que os dias passam e você continua no mesmo lugar',
    "Já tentou 'pensar positivo' e nada mudou",
  ],
  closing: 'Não é falta de força de vontade. É falta de treino.',
}

export const method = {
  eyebrow: 'O CAMINHO',
  title: 'Disciplina se treina como músculo',
  pillars: [
    {
      title: 'Mente de Aprendiz', //AJUSTAR: conferir nome do capítulo real
      description: 'Largar a autocobrança paralisante e voltar ao modo iniciante.', //AJUSTAR
    },
    {
      title: 'Treino Diário', //AJUSTAR
      description: 'Micro-ações de 15 minutos, todos os dias, sem depender de motivação.', //AJUSTAR
    },
    {
      title: 'Dor com Direção', //AJUSTAR
      description: 'Usar o desconforto como bússola, não como desculpa.', //AJUSTAR
    },
  ],
}

export const chapters = {
  eyebrow: 'O CONTEÚDO',
  title: 'O que tem dentro',
  list: [
    //AJUSTAR: lista real de capítulos do e-book
    { title: 'Capítulo 1 — O espelho que você evita', description: 'Encarar onde você está de verdade, sem anestesia.' },
    { title: 'Capítulo 2 — O treino, não a motivação', description: 'Por que depender de ânimo é a razão de você travar.' },
    { title: 'Capítulo 3 — Micro-ações, grandes rupturas', description: '15 minutos por dia que reconstroem sua rotina.' },
    { title: 'Capítulo 4 — A dor como bússola', description: 'Transformar desconforto em direção, não em desculpa.' },
    { title: 'Capítulo 5 — Sua nova história', description: 'Como sustentar a mudança depois dos 30 dias.' },
  ],
  stats: {
    chapters: 5, //AJUSTAR
    exercises: 30, //AJUSTAR
    days: 30,
  },
}

export const bonus = {
  eyebrow: 'BÔNUS',
  title: 'Diário de Treino — 30 Dias',
  description:
    'Um complemento prático para registrar sua evolução dia a dia durante o treino, disponível como item adicional no checkout.',
  bullets: [
    'Página guiada para cada um dos 30 dias de treino',
    'Espaço para registrar pequenas vitórias e recaídas',
    'Perguntas de reflexão para fechar o ciclo diário',
  ],
}

export const about = {
  eyebrow: 'QUEM ESCREVEU ISSO',
  title: 'Quem é a Laura',
  paragraphs: [
    //AJUSTAR: texto real em primeira pessoa da Laura
    'Passei anos sabendo exatamente o que precisava mudar na minha vida e adiando esse momento todos os dias, esperando uma motivação que nunca chegava.',
    'Vai Doer, Mas Vai Mudar nasceu da forma como eu mesma saí desse lugar: não com frase de efeito, mas com treino diário, repetido mesmo nos dias ruins.',
    'Esse método é para quem está cansada de esperar o momento certo e quer um caminho prático para sair do modo espectadora da própria vida.',
  ],
  photoAlt: 'Foto de Laura Ferreira, autora de Vai Doer, Mas Vai Mudar', //AJUSTAR: foto real
}

// AJUSTAR: seção de Depoimentos omitida no primeiro deploy — não existem depoimentos reais
// de leitoras beta ainda. Nunca publicar depoimento inventado. Ver src/components/Testimonials.jsx.
export const testimonials = []

export const offer = {
  eyebrow: 'A OFERTA',
  title: 'Seu treino começa hoje',
  priceAnchor: 'R$ 97',
  price: 'R$ 27',
  installments: 'ou em até 12x no cartão', //AJUSTAR: parcelamento real definido na Kiwify
  items: [
    'E-book Vai Doer, Mas Vai Mudar — 30 dias de treino mental',
    'Diário de Treino — 30 Dias (bônus)',
    'Acesso imediato após a confirmação da compra',
  ],
  ctaLabel: 'QUERO COMEÇAR MEU TREINO — R$ 27',
  guarantee: {
    title: '7 dias de garantia incondicional',
    description: 'Não mudou nada pra você? Devolvemos tudo.',
  },
}

export const faq = {
  eyebrow: 'DÚVIDAS',
  title: 'Perguntas frequentes',
  items: [
    {
      question: 'Como recebo o acesso ao e-book?',
      answer: 'Assim que sua compra é aprovada, você recebe o acesso imediato por e-mail através da plataforma Kiwify.',
    },
    {
      question: 'Para quem é (e para quem não é) esse e-book?',
      answer:
        'É para mulheres que se sentem travadas e procrastinando a própria vida e querem um método prático para virar a chave. Não é para quem busca fórmula mágica sem nenhuma ação.',
    },
    {
      question: 'Quanto tempo por dia eu preciso dedicar?',
      answer: 'O treino diário exige apenas 15 minutos por dia, todos os dias, durante 30 dias.',
    },
    {
      question: 'Existe garantia?',
      answer: 'Sim, garantia incondicional de 7 dias. Se não fizer sentido para você, devolvemos todo o valor.',
    },
    {
      question: 'Quais as formas de pagamento?',
      answer: 'Cartão de crédito com parcelamento, PIX e boleto, processados com segurança pela Kiwify.',
    },
    {
      question: 'Preciso gostar de anime para aproveitar o método?',
      answer:
        'Não. A filosofia de disciplina e treino diário é universal e não depende de gostar de anime ou cultura pop japonesa.',
    },
  ],
}

export const finalCta = {
  title: 'Seu próximo capítulo não começa sozinho.',
  ctaLabel: 'QUERO COMEÇAR MEU TREINO — R$ 27',
}

export const footer = {
  disclaimer: 'Este produto não substitui acompanhamento psicológico profissional.',
  termsHref: '#', //AJUSTAR: criar página de termos
  privacyHref: '#', //AJUSTAR: criar página de política de privacidade
}

export const obrigado = {
  title: 'Bem-vinda ao treino, guerreira 🥷', //AJUSTAR: conferir tom da Laura
  steps: [
    { title: 'Confira seu e-mail da Kiwify', description: 'É lá que está a confirmação e o acesso ao seu material.' },
    { title: 'Baixe seu e-book', description: 'Salve o arquivo em um lugar de fácil acesso no seu celular ou computador.' },
    {
      title: 'Entre no grupo do WhatsApp',
      description: 'Participe da comunidade de treino.',
      href: 'https://chat.whatsapp.com/AJUSTAR-LINK-GRUPO', //AJUSTAR: link real do grupo
    },
  ],
  bonusReminder:
    'Se você ainda não pegou o Diário de Treino — 30 Dias, ele continua disponível para reforçar seu treino diário.',
}
