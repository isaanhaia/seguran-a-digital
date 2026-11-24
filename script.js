/* ==========================================
   GUARDIÕES DA INTERNET
   Criadoras: Sofia Alixandrini e Isabela Mendes
   ========================================== */

const $ = (seletor) => document.querySelector(seletor);

const telaInicial = $("#tela-inicial");
const telaRotas = $("#tela-rotas");
const telaJogo = $("#tela-jogo");
const telaFinal = $("#tela-final");

const botaoIniciar = $("#botao-iniciar");
const botaoContinuar = $("#botao-continuar");
const botaoNovamente = $("#botao-novamente");
const botaoEscolherRota = $("#botao-escolher-rota");

const nomeRota = $("#nome-rota");
const contador = $("#contador");
const barraProgresso = $("#barra-progresso");
const casasTabuleiro = $("#casas-tabuleiro");

const emojiPersonagem = $("#emoji-personagem");
const nomePersonagem = $("#nome-personagem");
const falaPersonagem = $("#fala-personagem");

const perguntaElemento = $("#pergunta");
const alternativasElemento = $("#alternativas");
const feedback = $("#feedback");

const emojiFinal = $("#emoji-final");
const etiquetaFinal = $("#etiqueta-final");
const tituloFinal = $("#titulo-final");
const textoFinal = $("#texto-final");

/* ==========================================
   PERGUNTAS E ALTERNATIVAS
   ==========================================

   tipo: "atalho" = avança 3 casas
   tipo: "normal" = avança 1 casa

   trocaRota: true = muda para o outro caminho

   Nos desafios Game Over:
   correta: true = resposta segura
   Qualquer outra resposta encerra o jogo.
*/

const perguntas = [
  {
    personagem: "Senhor Senha",
    emoji: "🔐",
    fala: "Vamos proteger nossas chaves digitais!",
    pergunta: "Uma mensagem inesperada diz que sua conta será bloqueada e pede sua senha. O que fazer?",
    alternativas: [
      {
        texto: "Enviar a senha para evitar o bloqueio.",
        correta: false,
        explicacao: "Nunca envie sua senha por mensagens. Isso pode ser uma tentativa de golpe."
      },
      {
        texto: "Não enviar a senha e conferir a situação pelo aplicativo ou site oficial.",
        correta: true,
        trocaRota: true,
        explicacao: "Correto! Confira avisos diretamente nos canais oficiais e nunca compartilhe sua senha."
      },
      {
        texto: "Enviar a senha, mas depois trocá-la.",
        correta: false,
        explicacao: "Sua conta pode ser invadida antes que você consiga trocar a senha."
      }
    ]
  },

  {
    personagem: "Detetive Dado",
    emoji: "🕵️",
    fala: "Pequenas escolhas também protegem seus dados!",
    pergunta: "Você quer deixar seu perfil em uma rede social mais seguro. Qual atitude é uma boa escolha?",
    alternativas: [
      {
        texto: "Revisar as configurações de privacidade e limitar quem vê suas publicações.",
        tipo: "atalho",
        trocaRota: true,
        explicacao: "Ótima escolha! Revisar a privacidade ajuda a controlar quem acessa suas informações."
      },
      {
        texto: "Evitar publicar informações pessoais, como endereço e rotina.",
        tipo: "normal",
        explicacao: "Boa atitude! Evitar dados pessoais reduz sua exposição."
      },
      {
        texto: "Aceitar somente solicitações de pessoas que você conhece.",
        tipo: "normal",
        explicacao: "Boa atitude! Isso ajuda a manter sua rede de contatos mais segura."
      }
    ]
  },

  {
    personagem: "Capitão Isca",
    emoji: "🎣",
    fala: "Cuidado com as armadilhas disfarçadas!",
    pergunta: "Você recebe um link dizendo que ganhou um celular e precisa informar seus dados para receber o prêmio. O que fazer?",
    alternativas: [
      {
        texto: "Abrir o link e preencher os dados rapidamente.",
        correta: false,
        explicacao: "Prêmios inesperados podem ser iscas para roubar dados."
      },
      {
        texto: "Encaminhar o link para amigos testarem primeiro.",
        correta: false,
        explicacao: "Repassar um link suspeito também pode colocar outras pessoas em risco."
      },
      {
        texto: "Não clicar e verificar a promoção nos canais oficiais da empresa.",
        correta: true,
        trocaRota: true,
        explicacao: "Correto! Desconfie de prêmios inesperados e confirme a informação por canais oficiais."
      }
    ]
  },

  {
    personagem: "Fotinha",
    emoji: "📸",
    fala: "Pense antes de publicar!",
    pergunta: "Antes de publicar uma foto com outras pessoas, qual atitude demonstra respeito?",
    alternativas: [
      {
        texto: "Pedir autorização a todas as pessoas que aparecem na foto.",
        tipo: "atalho",
        explicacao: "Excelente! Pedir autorização respeita a privacidade de todos."
      },
      {
        texto: "Conferir se a foto não mostra informações pessoais ou localização.",
        tipo: "normal",
        trocaRota: true,
        explicacao: "Boa escolha! Observe o que aparece na imagem antes de publicar."
      },
      {
        texto: "Compartilhar a foto apenas com um grupo pequeno e de confiança, após conversar com as pessoas.",
        tipo: "normal",
        explicacao: "Boa atitude! Mesmo em grupos menores, é importante respeitar a vontade das pessoas."
      }
    ]
  },

  {
    personagem: "SuperAmigo",
    emoji: "🤝",
    fala: "Na internet, respeito também importa!",
    pergunta: "Em um grupo, colegas estão humilhando uma pessoa e pedem que você compartilhe as ofensas. O que fazer?",
    alternativas: [
      {
        texto: "Compartilhar as mensagens para que mais pessoas vejam.",
        correta: false,
        explicacao: "Compartilhar ofensas amplia a exposição e o sofrimento da vítima."
      },
      {
        texto: "Criar novas piadas para participar da brincadeira.",
        correta: false,
        explicacao: "Participar das agressões contribui para o cyberbullying."
      },
      {
        texto: "Não compartilhar, apoiar a vítima e procurar ajuda de um adulto de confiança.",
        correta: true,
        trocaRota: true,
        explicacao: "Correto! Não espalhe as ofensas, apoie a vítima e procure ajuda."
      }
    ]
  },

  {
    personagem: "Camaleão",
    emoji: "🦎",
    fala: "Cuide da sua privacidade!",
    pergunta: "Você quer conversar com mais segurança com pessoas que conhece pela internet. O que pode fazer?",
    alternativas: [
      {
        texto: "Manter informações pessoais e localização fora das conversas.",
        tipo: "normal",
        trocaRota: true,
        explicacao: "Boa escolha! Evitar dados pessoais ajuda a preservar sua privacidade."
      },
      {
        texto: "Conversar apenas dentro da plataforma e usar as ferramentas de bloqueio e denúncia quando necessário.",
        tipo: "atalho",
        explicacao: "Ótima escolha! Permanecer na plataforma e conhecer seus recursos de proteção aumenta sua segurança."
      },
      {
        texto: "Conversar com respeito e não aceitar pedidos que deixem você desconfortável.",
        tipo: "normal",
        explicacao: "Boa atitude! Você pode encerrar uma conversa sempre que se sentir desconfortável."
      }
    ]
  },

  {
    personagem: "Gameiro",
    emoji: "🎮",
    fala: "Vamos manter os jogos divertidos e seguros!",
    pergunta: "Você quer proteger melhor sua conta em um jogo online. Qual atitude ajuda?",
    alternativas: [
      {
        texto: "Ativar a verificação em duas etapas, se o jogo oferecer esse recurso.",
        tipo: "atalho",
        trocaRota: true,
        explicacao: "Ótima escolha! A verificação em duas etapas adiciona uma camada de proteção à conta."
      },
      {
        texto: "Usar uma senha forte e diferente das senhas de outras contas.",
        tipo: "normal",
        explicacao: "Boa atitude! Senhas fortes e exclusivas ajudam a proteger seu perfil."
      },
      {
        texto: "Manter o jogo e o dispositivo atualizados.",
        tipo: "normal",
        explicacao: "Boa escolha! Atualizações podem corrigir falhas de segurança."
      }
    ]
  },

  {
    personagem: "Dona Verifica",
    emoji: "🔎",
    fala: "Investigue antes de acreditar!",
    pergunta: "Você recebe uma notícia importante e quer descobrir se ela é verdadeira. Qual é uma boa atitude?",
    alternativas: [
      {
        texto: "Conferir a data, a origem e se outros veículos confiáveis confirmam a informação.",
        tipo: "atalho",
        trocaRota: true,
        explicacao: "Excelente! Conferir origem, data e outras fontes é uma ótima forma de verificar."
      },
      {
        texto: "Pesquisar o assunto em sites de instituições e veículos reconhecidos.",
        tipo: "normal",
        explicacao: "Boa escolha! Consultar fontes confiáveis ajuda a avaliar a notícia."
      },
      {
        texto: "Esperar um pouco antes de compartilhar até ter mais informações.",
        tipo: "normal",
        explicacao: "Boa atitude! Não compartilhar imediatamente evita espalhar possíveis informações falsas."
      }
    ]
  },

  {
    personagem: "Escudo Digital",
    emoji: "🛡️",
    fala: "Sua conta merece uma proteção extra!",
    pergunta: "Você está usando um computador público para acessar sua conta. O que deve fazer ao terminar?",
    alternativas: [
      {
        texto: "Salvar a senha no navegador para facilitar o próximo acesso.",
        correta: false,
        explicacao: "Em computadores públicos, outras pessoas podem acessar senhas salvas."
      },
      {
        texto: "Deixar a conta aberta para continuar depois.",
        correta: false,
        explicacao: "Uma sessão aberta permite que outras pessoas acessem sua conta."
      },
      {
        texto: "Sair da conta, não salvar a senha e fechar o navegador.",
        correta: true,
        trocaRota: true,
        explicacao: "Correto! Encerre a sessão e não deixe seus dados salvos em computadores públicos."
      }
    ]
  },

  {
    personagem: "Guardiã Consciente",
    emoji: "🌟",
    fala: "Você está quase concluindo sua missão!",
    pergunta: "Qual conjunto de atitudes demonstra cidadania digital?",
    alternativas: [
      {
        texto: "Respeitar as pessoas, proteger dados e verificar informações antes de compartilhar.",
        tipo: "atalho",
        trocaRota: true,
        explicacao: "Excelente! Essa combinação representa uma postura responsável no ambiente digital."
      },
      {
        texto: "Usar linguagem respeitosa e pensar antes de publicar.",
        tipo: "normal",
        explicacao: "Boa escolha! Respeito e responsabilidade fazem parte da cidadania digital."
      },
      {
        texto: "Manter aplicativos atualizados e usar senhas diferentes nas contas.",
        tipo: "normal",
        explicacao: "Boa atitude! Atualizações e senhas diferentes ajudam a proteger suas contas."
      }
    ]
  }
];

/* ==========================================
   CONFIGURAÇÃO DAS ROTAS
   ========================================== */

const rotas = {
  aurora: {
    nome: "Trilha Aurora",
    gameOvers: [0, 2, 4, 8]
  },

  oceano: {
    nome: "Trilha Oceano",
    gameOvers: [0, 2, 4, 8]
  }
};

/* ==========================================
   VARIÁVEIS DO JOGO
   ========================================== */

let rotaAtual = null;
let chaveRota = null;
let posicao = 0;
let perguntaAtual = 0;
let respostaSelecionada = false;
let jogoEncerrado = false;
let temporizadorDerrota = null;

/* ==========================================
   TROCA DE TELAS
   ========================================== */

function mostrarTela(tela) {
  [
    telaInicial,
    telaRotas,
    telaJogo,
    telaFinal
  ].forEach((elemento) => {
    elemento.classList.add("escondido");
  });

  tela.classList.remove("escondido");
}

botaoIniciar.addEventListener("click", () => {
  mostrarTela(telaRotas);
});

/* ==========================================
   ESCOLHA DA ROTA INICIAL
   ========================================== */

document.querySelectorAll(".rota").forEach((botao) => {
  botao.addEventListener("click", () => {
    iniciarJogo(botao.dataset.rota);
  });
});

function iniciarJogo(chave) {
  if (!rotas[chave]) return;

  if (temporizadorDerrota) {
    clearTimeout(temporizadorDerrota);
    temporizadorDerrota = null;
  }

  chaveRota = chave;
  rotaAtual = rotas[chave];

  posicao = 0;
  perguntaAtual = 0;
  respostaSelecionada = false;
  jogoEncerrado = false;

  nomeRota.textContent = rotaAtual.nome;

  mostrarTela(telaJogo);
  carregarPergunta();
}

/* ==========================================
   FUNÇÃO PARA TROCAR DE CAMINHO
   ========================================== */

function trocarDeRota() {
  const rotaAnterior = rotaAtual.nome;

  if (chaveRota === "aurora") {
    chaveRota = "oceano";
  } else {
    chaveRota = "aurora";
  }

  rotaAtual = rotas[chaveRota];

  nomeRota.textContent = rotaAtual.nome;

  return `\n🔀 MUDANÇA DE CAMINHO! Você saiu da ${rotaAnterior} e entrou na ${rotaAtual.nome}!`;
}

/* ==========================================
   TABULEIRO E PROGRESSO
   ========================================== */

function atualizarTabuleiro() {
  casasTabuleiro.innerHTML = "";

  for (let i = 0; i < perguntas.length; i++) {
    const casa = document.createElement("div");

    casa.className = "casa";

    if (i < posicao) {
      casa.classList.add("concluida");
      casa.textContent = "✓";
    } else if (i === posicao && posicao < perguntas.length) {
      casa.classList.add("atual");
      casa.textContent = "🛡️";
    } else {
      casa.textContent = String(i + 1);
    }

    casasTabuleiro.appendChild(casa);
  }

  const porcentagem = Math.min(
    (posicao / perguntas.length) * 100,
    100
  );

  barraProgresso.style.width = `${porcentagem}%`;
}

/* ==========================================
   CARREGAR PERGUNTA
   ========================================== */

function carregarPergunta() {
  if (jogoEncerrado) return;

  if (posicao >= perguntas.length) {
    finalizarVitoria();
    return;
  }

  perguntaAtual = posicao;
  respostaSelecionada = false;

  const dados = perguntas[perguntaAtual];

  const ehGameOver =
    rotaAtual.gameOvers.includes(perguntaAtual);

  contador.textContent =
    `Desafio ${perguntaAtual + 1} de ${perguntas.length}`;

  emojiPersonagem.textContent = dados.emoji;
  nomePersonagem.textContent = dados.personagem;
  falaPersonagem.textContent = dados.fala;

  perguntaElemento.textContent = dados.pergunta;

  feedback.textContent = "";
  feedback.className = "feedback";

  alternativasElemento.innerHTML = "";

  botaoContinuar.classList.add("escondido");
  botaoContinuar.textContent = "Continuar →";

  dados.alternativas.forEach((opcao, indice) => {
    const botao = document.createElement("button");

    botao.type = "button";
    botao.className = "alternativa";
    botao.textContent = opcao.texto;

    botao.addEventListener("click", () => {
      responderPergunta(indice);
    });

    alternativasElemento.appendChild(botao);
  });

  console.info(
    `Rota: ${chaveRota} | Pergunta: ${perguntaAtual + 1} | Game Over: ${ehGameOver}`
  );

  atualizarTabuleiro();
}

/* ==========================================
   RESPONDER PERGUNTA
   ========================================== */

function responderPergunta(indice) {
  if (jogoEncerrado || respostaSelecionada) return;

  const dados = perguntas[perguntaAtual];

  const ehGameOver =
    rotaAtual.gameOvers.includes(perguntaAtual);

  const resposta = dados.alternativas[indice];

  if (!resposta) return;

  respostaSelecionada = true;

  const botoes =
    alternativasElemento.querySelectorAll("button");

  botoes.forEach((botao) => {
    botao.disabled = true;
  });

  /* DESAFIOS GAME OVER */

  if (ehGameOver) {
    const indiceCorreto =
      dados.alternativas.findIndex((opcao) => opcao.correta);

    botoes[indiceCorreto]?.classList.add("correta");

    if (indice !== indiceCorreto) {
      botoes[indice]?.classList.add("errada");

      feedback.textContent =
        `✗ ${resposta.explicacao}`;

      feedback.className = "feedback erro";

      jogoEncerrado = true;

      temporizadorDerrota = setTimeout(() => {
        finalizarDerrota(resposta.explicacao);
      }, 1500);

      return;
    }

    botoes[indice]?.classList.add("correta");

    feedback.textContent =
      `✓ ${resposta.explicacao}\nVocê superou um desafio especial! Avançou uma casa.`;

    feedback.className = "feedback acerto";

    posicao += 1;

    // A resposta correta também troca o caminho.
    if (resposta.trocaRota) {
      feedback.textContent += trocarDeRota();
    }
  }

  /* DESAFIOS NORMAIS */

  else {
    const ehAtalho = resposta.tipo === "atalho";

    botoes[indice]?.classList.add(
      ehAtalho ? "correta" : "boa-escolha"
    );

    if (ehAtalho) {
      feedback.textContent =
        `⭐ ${resposta.explicacao}\nATALHO ENCONTRADO! Você avançou 3 casas (2 extras).`;

      feedback.className = "feedback acerto";

      posicao += 3;

    } else {
      feedback.textContent =
        `✓ ${resposta.explicacao}\nBoa escolha! Você avançou uma casa.`;

      feedback.className = "feedback acerto";

      posicao += 1;
    }

    // Algumas respostas também levam para a outra trilha.
    if (resposta.trocaRota) {
      feedback.textContent += trocarDeRota();
    }
  }

  posicao = Math.min(posicao, perguntas.length);

  atualizarTabuleiro();

  botaoContinuar.textContent =
    posicao >= perguntas.length
      ? "Concluir missão 🏆"
      : "Continuar →";

  botaoContinuar.classList.remove("escondido");
}

/* ==========================================
   CONTINUAR JOGO
   ========================================== */

botaoContinuar.addEventListener("click", () => {
  if (jogoEncerrado) return;

  carregarPergunta();
});

/* ==========================================
   FINALIZAR PARTIDA
   ========================================== */

function finalizarDerrota(mensagem) {
  jogoEncerrado = true;

  emojiFinal.textContent = "💔";
  etiquetaFinal.textContent = "FIM DE JOGO";
  tituloFinal.textContent = "Game Over!";

  textoFinal.textContent =
    `${mensagem}\n\nSua missão foi interrompida. Tente novamente e aprenda a navegar com mais segurança!`;

  mostrarTela(telaFinal);
}

function finalizarVitoria() {
  jogoEncerrado = true;

  emojiFinal.textContent = "🏆";
  etiquetaFinal.textContent = "MISSÃO CONCLUÍDA";
  tituloFinal.textContent = "Parabéns, Guardião!";

  textoFinal.textContent =
    `Você concluiu a aventura e mostrou que sabe agir com responsabilidade, respeito e segurança no mundo digital!`;

  mostrarTela(telaFinal);
}

/* ==========================================
   BOTÕES DA TELA FINAL
   ========================================== */

botaoNovamente.addEventListener("click", () => {
  iniciarJogo(chaveRota);
});

botaoEscolherRota.addEventListener("click", () => {
  if (temporizadorDerrota) {
    clearTimeout(temporizadorDerrota);
    temporizadorDerrota = null;
  }

  jogoEncerrado = false;

  mostrarTela(telaRotas);
});
