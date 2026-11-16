/* ==========================================
   GUARDIÕES DA INTERNET
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


/* BANCO DE PERGUNTAS */

const perguntas = [
    {
        personagem: "Senhor Senha",
        emoji: "🔐",
        fala: "Vamos proteger nossas chaves digitais!",
        pergunta: "Um site pede a senha da sua conta por uma mensagem inesperada. O que fazer?",
        alternativas: [
            { texto: "Enviar a senha para resolver o problema.", correta: false, explicacao: "Nunca envie sua senha por mensagens inesperadas." },
            { texto: "Não enviar a senha e verificar a situação com segurança.", correta: true, explicacao: "Correto! Proteja suas senhas e acesse suas contas pelos canais oficiais." },
            { texto: "Usar a mesma senha em todas as contas.", correta: false, explicacao: "Usar a mesma senha em tudo aumenta os riscos." }
        ]
    },
    {
        personagem: "Detetive Dado",
        emoji: "🕵️",
        fala: "Nem toda informação precisa ser compartilhada!",
        pergunta: "Uma pessoa que você conheceu em um jogo pede seu endereço. O que fazer?",
        alternativas: [
            { texto: "Enviar o endereço para fazer amizade.", correta: false, explicacao: "Seu endereço é um dado pessoal." },
            { texto: "Compartilhar apenas o nome da escola.", correta: false, explicacao: "O nome da escola também pode revelar informações pessoais." },
            { texto: "Não compartilhar e conversar com um adulto de confiança.", correta: true, explicacao: "Correto! Preserve seus dados pessoais." }
        ]
    },
    {
        personagem: "Capitão Isca",
        emoji: "🎣",
        fala: "Cuidado com as armadilhas disfarçadas!",
        pergunta: "Você recebe uma mensagem dizendo que ganhou um celular, mas precisa clicar em um link desconhecido. O que fazer?",
        alternativas: [
            { texto: "Clicar imediatamente para não perder o prêmio.", correta: false, explicacao: "Prêmios inesperados podem ser iscas para golpes." },
            { texto: "Verificar a mensagem por um canal oficial.", correta: true, explicacao: "Correto! Desconfie de promessas exageradas." },
            { texto: "Informar seus dados bancários para receber o prêmio.", correta: false, explicacao: "Nunca forneça dados bancários para receber um prêmio suspeito." }
        ]
    },
    {
        personagem: "Fotinha",
        emoji: "📸",
        fala: "Pense antes de publicar!",
        pergunta: "Você quer postar uma foto de um amigo na internet. Qual é a melhor atitude?",
        alternativas: [
            { texto: "Publicar sem perguntar.", correta: false, explicacao: "Respeite a privacidade das outras pessoas." },
            { texto: "Pedir autorização ao amigo antes de publicar.", correta: true, explicacao: "Correto! Peça autorização antes de publicar fotos." },
            { texto: "Publicar e apagar depois, se ele reclamar.", correta: false, explicacao: "Uma imagem pode ser salva antes de ser apagada." }
        ]
    },
    {
        personagem: "SuperAmigo",
        emoji: "🤝",
        fala: "Na internet, respeito também importa!",
        pergunta: "Você vê colegas humilhando uma pessoa em um grupo. O que fazer?",
        alternativas: [
            { texto: "Compartilhar as ofensas.", correta: false, explicacao: "Compartilhar ofensas aumenta o sofrimento." },
            { texto: "Ficar em silêncio e participar das brincadeiras.", correta: false, explicacao: "Não participe das ofensas." },
            { texto: "Apoiar a vítima e procurar um adulto.", correta: true, explicacao: "Correto! Respeito e apoio são importantes." }
        ]
    },
    {
        personagem: "Camaleão",
        emoji: "🦎",
        fala: "Nem todo mundo é quem diz ser!",
        pergunta: "Uma pessoa desconhecida pede uma foto pessoal. O que fazer?",
        alternativas: [
            { texto: "Enviar a foto para provar que confia nela.", correta: false, explicacao: "Não envie fotos pessoais para desconhecidos." },
            { texto: "Não enviar a foto e conversar com um adulto de confiança.", correta: true, explicacao: "Correto! Proteja sua privacidade." },
            { texto: "Enviar a foto se ela também enviar uma.", correta: false, explicacao: "Receber uma foto não garante que a pessoa seja quem diz ser." }
        ]
    },
    {
        personagem: "Gameiro",
        emoji: "🎮",
        fala: "Vamos manter os jogos divertidos e seguros!",
        pergunta: "Durante um jogo online, alguém pede sua senha para dar moedas gratuitas. O que fazer?",
        alternativas: [
            { texto: "Não fornecer a senha e verificar se a oferta é oficial.", correta: true, explicacao: "Correto! Proteja sua conta." },
            { texto: "Compartilhar a senha para ganhar as moedas.", correta: false, explicacao: "Nunca compartilhe sua senha." },
            { texto: "Enviar a senha se a pessoa parecer confiável.", correta: false, explicacao: "A aparência de confiança não garante segurança." }
        ]
    },
    {
        personagem: "Dona Verifica",
        emoji: "🔎",
        fala: "Investigue antes de acreditar!",
        pergunta: "Você encontra uma notícia assustadora, mas não sabe se é verdadeira. O que fazer?",
        alternativas: [
            { texto: "Compartilhar rapidamente.", correta: false, explicacao: "Compartilhar sem verificar espalha desinformação." },
            { texto: "Acreditar porque muitas pessoas comentaram.", correta: false, explicacao: "Muitos comentários não comprovam uma informação." },
            { texto: "Pesquisar em fontes confiáveis antes de compartilhar.", correta: true, explicacao: "Correto! Verifique a informação." }
        ]
    },
    {
        personagem: "Escudo Digital",
        emoji: "🛡️",
        fala: "Sua conta merece uma proteção extra!",
        pergunta: "Qual atitude ajuda a proteger uma conta contra invasões?",
        alternativas: [
            { texto: "Deixar a conta sem proteção adicional.", correta: false, explicacao: "Proteções extras ajudam a evitar invasões." },
            { texto: "Ativar a verificação em duas etapas.", correta: true, explicacao: "Correto! Ela cria uma camada adicional de segurança." },
            { texto: "Anotar a senha em comentários públicos.", correta: false, explicacao: "Nunca exponha suas senhas." }
        ]
    },
    {
        personagem: "Guardiã Consciente",
        emoji: "🌐",
        fala: "Você está quase concluindo sua missão!",
        pergunta: "Qual atitude demonstra cidadania digital?",
        alternativas: [
            { texto: "Respeitar as pessoas, proteger dados e compartilhar informações verificadas.", correta: true, explicacao: "Correto! Cidadania digital envolve responsabilidade e respeito." },
            { texto: "Ofender pessoas que pensam diferente.", correta: false, explicacao: "O respeito deve existir também no ambiente digital." },
            { texto: "Compartilhar qualquer conteúdo sem verificar.", correta: false, explicacao: "É importante verificar antes de compartilhar." }
        ]
    }
];


/* CONFIGURAÇÃO DAS ROTAS */

const rotas = {
    aurora: {
        nome: "Trilha Aurora",

        // Apenas estas quatro alternativas erradas causam Game Over.
        // Formato: número da pergunta (começando em 0): alternativa (começando em 0).
        gameOvers: {
            0: 0,
            4: 1,
            5: 0,
            8: 0
        },

        // Atalhos automáticos após acertar estas perguntas.
        atalhos: {
            0: 2,
            2: 2,
            5: 2,
            7: 2
        }
    },

    oceano: {
        nome: "Trilha Oceano",

        // Apenas estas quatro alternativas erradas causam Game Over.
        gameOvers: {
            1: 0,
            3: 0,
            7: 0,
            9: 1
        },

        // Atalho automático após acertar esta pergunta.
        atalhos: {
            4: 2
        }
    }
};


/* VARIÁVEIS DO JOGO */

let rotaAtual = null;
let chaveRota = null;
let posicao = 0;
let perguntaAtual = 0;
let jogoEncerrado = false;
let respostaSelecionada = false;


/* TROCA DE TELAS */

function mostrarTela(tela) {
    document.querySelectorAll(".tela").forEach(elemento => {
        elemento.classList.remove("ativa");
    });

    tela.classList.add("ativa");
}


/* INICIAR E ESCOLHER ROTA */

botaoIniciar.addEventListener("click", () => {
    mostrarTela(telaRotas);
});

document.querySelectorAll(".botao-rota").forEach(botao => {
    botao.addEventListener("click", () => {
        iniciarJogo(botao.dataset.rota);
    });
});


/* INICIAR JOGO */

function iniciarJogo(chave) {
    chaveRota = chave;
    rotaAtual = rotas[chave];

    posicao = 0;
    perguntaAtual = 0;
    jogoEncerrado = false;
    respostaSelecionada = false;

    nomeRota.textContent = rotaAtual.nome;

    mostrarTela(telaJogo);
    carregarPergunta();
}


/* ATUALIZAR TABULEIRO */

function atualizarTabuleiro() {
    casasTabuleiro.innerHTML = "";

    for (let i = 0; i < perguntas.length; i++) {
        const casa = document.createElement("div");
        casa.classList.add("casa");

        if (i < posicao) {
            casa.classList.add("concluida");
            casa.textContent = "✓";
        } else if (i === posicao) {
            casa.classList.add("atual");
            casa.textContent = "📍";
        } else {
            casa.textContent = i + 1;
        }

        casasTabuleiro.appendChild(casa);
    }

    barraProgresso.style.width =
        Math.min((posicao / perguntas.length) * 100, 100) + "%";
}


/* CARREGAR PERGUNTA */

function carregarPergunta() {
    if (jogoEncerrado) return;

    if (posicao >= perguntas.length) {
        finalizarVitoria();
        return;
    }

    perguntaAtual = posicao;
    respostaSelecionada = false;

    const dados = perguntas[perguntaAtual];

    contador.textContent =
        `Desafio ${perguntaAtual + 1} de ${perguntas.length}`;

    emojiPersonagem.textContent = dados.emoji;
    nomePersonagem.textContent = dados.personagem;
    falaPersonagem.textContent = dados.fala;

    perguntaElemento.textContent = dados.pergunta;

    alternativasElemento.innerHTML = "";
    feedback.textContent = "";
    feedback.className = "feedback";

    botaoContinuar.classList.add("escondido");
    botaoContinuar.textContent = "Continuar →";

    dados.alternativas.forEach((resposta, indice) => {
        const botao = document.createElement("button");

        botao.className = "alternativa";
        botao.textContent = resposta.texto;

        botao.addEventListener("click", () => {
            responderPergunta(indice);
        });

        alternativasElemento.appendChild(botao);
    });

    atualizarTabuleiro();
}


/* RESPONDER PERGUNTA */

function responderPergunta(indice) {
    if (jogoEncerrado || respostaSelecionada) return;

    respostaSelecionada = true;

    const dados = perguntas[perguntaAtual];
    const resposta = dados.alternativas[indice];

    const botoes = alternativasElemento.querySelectorAll("button");

    botoes.forEach((botao, i) => {
        botao.disabled = true;

        if (dados.alternativas[i].correta) {
            botao.classList.add("correta");
        } else if (i === indice) {
            botao.classList.add("errada");
        }
    });

    if (resposta.correta) {
        feedback.textContent = "✓ " + resposta.explicacao;
        feedback.className = "feedback acerto";

        const atalho = rotaAtual.atalhos[perguntaAtual] || 0;

        posicao += 1 + atalho;

        if (atalho > 0) {
            feedback.textContent +=
                `\nVocê encontrou um atalho e avançou ${atalho} casas extras!`;
        }

        atualizarTabuleiro();

        botaoContinuar.textContent =
            posicao >= perguntas.length ? "Concluir missão →" : "Continuar →";

        botaoContinuar.classList.remove("escondido");

        return;
    }

    // GAME OVER SOMENTE PARA AS QUATRO ALTERNATIVAS
    // ESPECIFICAMENTE DEFINIDAS NA CONFIGURAÇÃO DA ROTA.

    if (rotaAtual.gameOvers[perguntaAtual] === indice) {
        feedback.textContent = "✗ " + resposta.explicacao;
        feedback.className = "feedback erro";

        jogoEncerrado = true;

        setTimeout(() => {
            finalizarDerrota(resposta.explicacao);
        }, 1500);

        return;
    }

    // TODAS AS OUTRAS RESPOSTAS ERRADAS PERMITEM CONTINUAR.

    feedback.textContent =
        "✗ " + resposta.explicacao +
        "\nVocê errou, mas ainda pode continuar sua missão!";

    feedback.className = "feedback erro";

    // O jogador avança uma casa, sem receber o atalho.
    posicao++;

    atualizarTabuleiro();

    botaoContinuar.textContent =
        posicao >= perguntas.length ? "Concluir missão →" : "Continuar →";

    botaoContinuar.classList.remove("escondido");
}


/* CONTINUAR JOGO */

botaoContinuar.addEventListener("click", () => {
    if (jogoEncerrado) return;

    carregarPergunta();
});


/* GAME OVER */

function finalizarDerrota(mensagem) {
    jogoEncerrado = true;

    emojiFinal.textContent = "💔";
    etiquetaFinal.textContent = "FIM DE JOGO";
    tituloFinal.textContent = "Game Over!";
    textoFinal.textContent =
        mensagem +
        "\n\nSua missão foi interrompida. Tente novamente e aprenda a navegar com mais segurança!";

    mostrarTela(telaFinal);
}


/* VITÓRIA */

function finalizarVitoria() {
    jogoEncerrado = true;

    emojiFinal.textContent = "🏆";
    etiquetaFinal.textContent = "MISSÃO CONCLUÍDA";
    tituloFinal.textContent = "Parabéns, Guardião!";
    textoFinal.textContent =
        "Você concluiu sua jornada e mostrou que sabe agir com responsabilidade, respeito e segurança no mundo digital!";

    mostrarTela(telaFinal);
}


/* REINICIAR */

botaoNovamente.addEventListener("click", () => {
    iniciarJogo(chaveRota);
});

botaoEscolherRota.addEventListener("click", () => {
    jogoEncerrado = false;
    mostrarTela(telaRotas);
});
