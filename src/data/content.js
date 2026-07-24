// Copy centralizada — edite aqui sem tocar nos componentes.
// Itens marcados //AJUSTAR precisam de revisão humana antes do deploy final.
//
// Regra de linguagem: copy voltada ao leitor é neutra em gênero (sem
// adjetivos flexionados tipo "cansada"/"pronto" — reescrever com verbo ou
// substantivo). Exceção: os parágrafos da Laura em primeira pessoa (seção
// `about`), onde ela fala de si mesma.
//
// Restrição de propriedade intelectual: nunca nomear personagem, técnica,
// vila ou marca de anime licenciado. Só arquétipos descritos. "ninja"
// (genérico) e "Missão Ninja" são os únicos termos ninja usados como nome.

export const KIWIFY_LINK = 'https://pay.kiwify.com.br/AJUSTAR-LINK-CHECKOUT' //AJUSTAR: link real do checkout Kiwify

export const productName = 'O Caminho Ninja'

export const author = {
  name: 'Laura Ferreira',
  instagram: '@lauuferreiira',
}

export const hero = {
  eyebrow: 'PARA QUEM JÁ CANSOU DE RECOMEÇAR',
  titleLine1: 'Você já sabe o que precisa fazer.',
  titleLine2: 'O problema é que você continua não fazendo.',
  sub: 'Um método de disciplina real, inspirado na filosofia de quem foi subestimado, rejeitado, e mesmo assim treinou até se tornar o mais forte.',
  ctaLabel: 'QUERO COMEÇAR MEU TREINO — R$ 27', //AJUSTAR: confirmar preço final
  microcopy: 'Acesso imediato · 9 capítulos + 9 missões práticas · Garantia de 7 dias',
}

export const pains = {
  eyebrow: 'ISSO TE SOA FAMILIAR?',
  title: 'Você não está começando do zero. Está começando de novo.',
  items: [
    'Você começa na segunda. Para na quarta. Recomeça na próxima segunda.',
    'Sabe exatamente o que precisa mudar — e mesmo assim não mantém.',
    'Consome conteúdo de desenvolvimento pessoal o dia inteiro e não aplica nada.',
    'Vive esperando o momento certo, a motivação, o sinal.',
    'Já tentou antes. Mais de uma vez. E é justamente isso que faz doer mais.',
  ],
  closing: 'Esse cansaço não é de fazer demais. É de carregar tudo e se trair todos os dias.',
}

export const method = {
  eyebrow: 'O CAMINHO',
  title: 'Não é fraqueza. É que ninguém te ensinou a diferença.',
  pillars: [
    {
      title: 'Motivação x Decisão',
      description: 'Motivação é visita. Decisão é residência. Uma vai embora quando o dia fica difícil; a outra fica.',
    },
    {
      title: 'Descanso x Paralisia',
      description: 'Existe cansaço que pede pausa e existe cansaço que virou esconderijo. Aprender a diferença muda tudo.',
    },
    {
      title: 'Querer x Treinar',
      description: 'Querer mudar é confortável. Treinar é o que acontece quando ninguém está olhando.',
    },
  ],
}

export const productIntro = {
  eyebrow: 'O PRODUTO',
  title: 'O Caminho Ninja',
  description:
    'Um e-book de desenvolvimento pessoal que usa a filosofia ninja — treino invisível, constância acima de talento, disciplina sem plateia — para te tirar do automático, quebrar os ciclos que te prendem e construir a consistência que ninguém vai construir por você.',
  highlight: 'Vai Doer. Vai Treinar. Vai Mudar.',
}

export const chapters = {
  eyebrow: 'O CONTEÚDO',
  title: 'O que tem dentro',
  list: [
    { title: 'Introdução — O ponto de virada', description: 'A ficha que cai — e por que ela nunca cai sozinha.' },
    { title: 'Capítulo 1 — Seus comportamentos te entregam', description: 'Entender por que você continua fazendo o que te sabota, mesmo sabendo.' },
    { title: 'Capítulo 2 — Quebrando o ciclo automático', description: 'Como seu cérebro cria ciclos — e como quebrá-los de vez.' },
    { title: 'Capítulo 3 — O peso de nunca dizer não', description: 'Parar de gastar energia onde não deveria, sem culpa.' },
    { title: 'Capítulo 4 — Cansaço ou paralisia?', description: 'Distinguir o cansaço real da paralisia disfarçada de descanso.' },
    { title: 'Capítulo 5 — Treinar no escuro', description: 'Continuar sem resultado visível — e por que essa é a parte que separa.' },
    { title: 'Capítulo 6 — O que você faz sem plateia', description: 'Descobrir o que você quer de verdade, sem validação de ninguém.' },
    { title: 'Capítulo 7 — Mil repetições', description: 'Construir constância pela repetição, não pela força de vontade.' },
    { title: 'Capítulo 8 — Seu próprio porto seguro', description: 'Parar de esperar resgate e virar a base que você procurava fora.' },
    { title: 'Capítulo 9 — A decisão final', description: 'Tomar a decisão que muda tudo — agora, não na segunda.' },
    { title: 'Encerramento — Vai lá e faz', description: 'O caminho até a porta. Atravessar é contigo.' },
  ],
  stats: {
    chapters: 11,
    missions: 9,
    decision: 1,
  },
}

export const missions = {
  eyebrow: 'O DIFERENCIAL',
  title: 'Não é leitura. É treino.',
  description:
    'Cada capítulo fecha com uma Missão Ninja — um exercício direto, aplicável, que você faz antes de passar para o próximo. Sem missão cumprida, sem próximo capítulo.',
  bullets: ['Aplicação imediata', 'Uma missão por capítulo', 'Feito para ser lido em partes'],
}

// Diário de Treino segue existente como order bump opcional na Kiwify —
// exibido de forma discreta dentro da seção Missões Ninja (ver Missions.jsx).
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
  eyebrow: 'QUEM ESCREVEU',
  title: 'Laura Ferreira',
  paragraphs: [
    //AJUSTAR: trajetória real da Laura — não inventar credenciais
    'Passei anos sabendo exatamente o que precisava mudar e adiando esse momento, esperando uma motivação que nunca chegava do jeito que eu imaginava.',
    'O Caminho Ninja nasceu da forma como eu mesma saí desse lugar: não com frase de efeito, mas com treino repetido, inclusive — principalmente — nos dias ruins.',
    'Esse método é para quem está cansado de esperar o momento certo e quer um caminho prático para sair do automático.',
  ],
  closing: 'Eu não escrevo sobre perfeição. Escrevo sobre o processo real — os dias feios, os recomeços, as escolhas difíceis.',
  photoAlt: 'Foto de Laura Ferreira, autora de O Caminho Ninja', //AJUSTAR: foto real
}

export const whoFor = {
  eyebrow: 'PRA QUEM É',
  title: 'Para quem é — e para quem não é',
  yes: {
    title: 'É pra você se:',
    items: [
      'Se você começa e para o tempo todo',
      'Se sabe o que precisa mudar e continua esperando o momento certo',
      'Se consome conteúdo mas não aplica',
      'Se quer mudança real, não inspiração de três dias',
      'Se tem conexão com a filosofia ninja — ou está aberto a ela',
    ],
  },
  no: {
    title: 'NÃO é pra você se:',
    items: [
      'Se procura receita mágica sem esforço',
      'Se quer motivação para durar até quarta-feira',
      'Se prefere não se olhar de frente',
    ],
  },
}

// AJUSTAR: seção de Depoimentos omitida no primeiro deploy — não existem depoimentos reais
// de leitores beta ainda. Nunca publicar depoimento inventado. Ver src/components/Testimonials.jsx.
export const testimonials = []

export const impactPhrases = [
  'O ninja não espera o clima melhorar para treinar. Ele treina na chuva.',
  'Constância não é fazer quando você está bem. É fazer com medo, com raiva, com cansaço.',
  'O resultado não aparece durante o treino. Aparece depois. E só para quem ficou.',
]

export const offer = {
  eyebrow: 'A OFERTA',
  title: 'Seu treino começa hoje',
  priceAnchor: 'R$ 97',
  price: 'R$ 27', //AJUSTAR: confirmar preço final
  installments: 'ou em até 12x no cartão', //AJUSTAR: parcelamento real definido na Kiwify
  items: [
    'E-book completo O Caminho Ninja (11 capítulos)',
    '9 Missões Ninja práticas',
    'Acesso imediato e vitalício',
  ],
  valueLine: 'Por menos do que você gasta numa semana de café, você tem o método que pode mudar o próximo ano.',
  ctaLabel: 'COMEÇAR O MEU CAMINHO NINJA',
  guarantee: {
    title: '7 dias de garantia incondicional',
    description: 'Não serviu pra você? Devolvemos tudo.',
  },
}

export const faq = {
  eyebrow: 'DÚVIDAS',
  title: 'Perguntas frequentes',
  items: [
    {
      question: 'Não tenho tempo para ler.',
      answer:
        'O e-book foi escrito para ser lido em partes, um capítulo por vez — cada um cabe numa pausa de café. O que você não tem tempo é de continuar do jeito que está.',
    },
    {
      question: 'Já li vários e-books e não mudou nada.',
      answer:
        'Esse não é um e-book para te inspirar por três dias. É método. Cada capítulo tem uma missão prática. A mudança acontece quando você faz, não quando você lê.',
    },
    {
      question: 'Não curto anime, isso é pra mim?',
      answer:
        'É. A filosofia ninja aqui é espelho, não entretenimento. Se você já enfrentou subestimação, julgamento ou dúvida sobre si mesmo, vai se reconhecer nas páginas sem precisar conhecer nada.',
    },
    {
      question: 'Como recebo o material?',
      answer: 'Direto no seu e-mail, logo após a confirmação do pagamento. Acesso imediato e vitalício.',
    },
    {
      question: 'E se não for pra mim?',
      //AJUSTAR: confirmar política de reembolso real
      answer: 'Garantia incondicional de 7 dias. Se não fizer sentido pra você, devolvemos o valor integral.',
    },
  ],
}

export const finalCta = {
  title: 'Você chegou até o fim dessa página. Isso já diz algo sobre você.',
  subtitle: 'Agora só falta uma coisa: a decisão.',
  ctaLabel: 'VAI LÁ E FAZ',
}

export const footer = {
  disclaimer: 'Este produto não substitui acompanhamento psicológico profissional.',
  termsHref: '#', //AJUSTAR: criar página de termos
  privacyHref: '#', //AJUSTAR: criar página de política de privacidade
}

export const obrigado = {
  title: 'Seu treino começa agora, ninja 🥷',
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
