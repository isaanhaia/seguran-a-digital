/* GUARDIÕES DA INTERNET
   Criadoras: Sofia Alixandrini e Isabela Mendes de Anhaia
*/

// ELEMENTOS DO HTML

const telaInicial = document.querySelector("#tela-inicial");
const telaRotas = document.querySelector("#tela-rotas");
const telaJogo = document.querySelector("#tela-jogo");
const telaFinal = document.querySelector("#tela-final");

const botaoIniciar = document.querySelector("#botao-iniciar");
const botaoContinuar = document.querySelector("#botao-continuar");
const botaoNovamente = document.querySelector("#botao-novamente");

const nomeRota = document.querySelector("#nome-rota");
const contador = document.querySelector("#contador");
const barraProgresso = document.querySelector("#barra-progresso");
const casasTabuleiro = document.querySelector("#casas-tabuleiro");

const emojiPersonagem = document.querySelector("#emoji-personagem");
const nomePersonagem = document.querySelector("#nome-personagem");
const falaPersonagem = document.querySelector("#fala-personagem");

const pergunta = document.querySelector("#pergunta");
const alternativas = document.querySelector("#alternativas");
const feedback = document.querySelector("#feedback");

// PERGUNTAS E DESAFIOS

const perguntas = [
    {
        personagem: "Senhor Senha",
        emoji: "🔐",
        fala: "Vamos proteger nossas chaves digitais!",
        pergunta: "Um site pede a senha da sua conta por uma mensagem inesperada. O que fazer?",
        alternativas: [
            {
                texto: "Enviar a senha para resolver o problema.",
                correta: false,
                explicacao: "Senhas são secretas! Nunca envie sua senha por mensagens inesperadas."
            },
            {
                texto: "Não enviar a senha e verificar a situação com segurança.",
                correta: true,
                explicacao: "Correto! Proteja suas senhas e acesse suas contas pelos canais oficiais."
            },
            {
                texto: "Usar a mesma senha em todas as contas.",
                correta: false,
                explicacao: "Usar a mesma senha em tudo aumenta os riscos se uma conta for invadida."
            }
        ]
    },

    {
        personagem: "Detetive Dado",
        emoji: "🕵️",
        fala: "Nem toda informação precisa ser compartilhada!",
        pergunta: "Uma pessoa que você conheceu em um jogo pede seu endereço. O que fazer?",
        alternativas: [
            {
                texto: "Enviar o endereço para fazer amizade.",
                correta: false,
                explicacao: "Seu endereço é um dado pessoal. Não compartilhe com desconhecidos."
            },
            {
                texto: "Compartilhar apenas o nome da escola.",
                correta: false,
                explicacao: "O nome da escola também pode revelar informações sobre você."
            },
            {
                texto: "Não compartilhar e conversar com um adulto de confiança.",
                correta: true,
                explicacao: "Correto! Preserve seus dados pessoais e peça ajuda quando necessário."
            }
        ]
    },

    {
        personagem: "Capitão Isca",
        emoji: "🎣",
        fala: "Cuidado com as armadilhas disfarçadas!",
        pergunta: "Você recebe uma mensagem dizendo que ganhou um celular, mas precisa clicar em um link desconhecido. O que fazer?",
        alternativas: [
            {
                texto: "Clicar imediatamente para não perder o prêmio.",
                correta: false,
                explicacao: "Prêmios inesperados podem ser iscas para golpes. Não clique sem verificar."
            },
            {
                texto: "Verificar a mensagem por um canal oficial e pedir ajuda se necessário.",
                correta: true,
                explicacao: "Correto! Desconfie de promessas exageradas e não forneça seus dados."
            },
            {
                texto: "Informar seus dados bancários para receber o prêmio.",
                correta: false,
                explicacao: "Nunca forneça dados bancários para receber um prêmio suspeito."
            }
        ]
    },

    {
        personagem: "Fotinha",
        emoji: "📸",
        fala: "Pense antes de publicar!",
        pergunta: "Você quer postar uma foto de um amigo na internet. Qual é a melhor atitude?",
        alternativas: [
            {
                texto: "Publicar sem perguntar, porque a foto ficou bonita.",
                correta: false,
                explicacao: "Respeite a privacidade das outras pessoas e peça autorização antes de publicar."
            },
            {
                texto: "Pedir autorização ao amigo antes de publicar.",
                correta: true,
                explicacao: "Correto! Respeitar a privacidade também vale para fotos e vídeos."
            },
            {
                texto: "Publicar e apagar depois, se ele reclamar.",
                correta: false,
                explicacao: "Uma imagem pode ser salva ou compartilhada antes de ser apagada."
            }
        ]
    },

    {
        personagem: "SuperAmigo",
        emoji: "🤝",
        fala: "Na internet, respeito também importa!",
        pergunta: "Você vê colegas humilhando uma pessoa em um grupo. O que fazer?",
        alternativas: [
            {
                texto: "Compartilhar as ofensas para que todos vejam.",
                correta: false,
                explicacao: "Compartilhar ofensas aumenta o sofrimento e espalha o cyberbullying."
            },
            {
                texto: "Ficar em silêncio e participar das brincadeiras.",
                correta: false,
                explicacao: "Não participe das ofensas. Procure uma forma segura de ajudar."
            },
            {
                texto: "Não espalhar as mensagens, apoiar a vítima e procurar um adulto.",
                correta: true,
                explicacao: "Correto! Respeito, apoio e ajuda de confiança são importantes."
            }
        ]
    },

    {
        personagem: "Camaleão",
        emoji: "🦎",
        fala: "Nem todo mundo é quem diz ser!",
        pergunta: "Uma pessoa desconhecida diz ser da sua idade e pede uma foto pessoal. O que fazer?",
        alternativas: [
            {
                texto: "Enviar a foto para provar que confia nela.",
                correta: false,
                explicacao: "Não envie fotos pessoais para desconhecidos. Perfis podem ser falsos."
            },
            {
                texto: "Não enviar a foto e conversar com um adulto de confiança.",
                correta: true,
                explicacao: "Correto! Não confie rapidamente em desconhecidos e proteja sua privacidade."
            },
            {
                texto: "Enviar a foto, desde que a pessoa também envie uma.",
                correta: false,
                explicacao: "Receber uma foto não garante que a pessoa seja quem afirma ser."
            }
        ]
    },

    {
        personagem: "Gameiro",
        emoji: "🎮",
        fala: "Vamos manter os jogos divertidos e seguros!",
        pergunta: "Durante um jogo online, alguém pede sua senha para dar moedas gratuitas. O que fazer?",
        alternativas: [
            {
                texto: "Não fornecer a senha e verificar se a oferta é oficial.",
                correta: true,
                explicacao: "Correto! Proteja sua conta e desconfie de recompensas que exigem sua senha."
            },
            {
                texto: "Compartilhar a senha para ganhar as moedas.",
                correta: false,
                explicacao: "Você pode perder sua conta. Nunca entregue sua senha a outros jogadores."
            },
            {
                texto: "Enviar a senha para qualquer pessoa do mesmo time.",
                correta: false,
                explicacao: "Estar no mesmo time não significa que alguém seja confiável."
            }
        ]
    },

    {
        personagem: "Alerta",
        emoji: "🚨",
        fala: "Você não precisa enfrentar perigos sozinho!",
        pergunta: "Alguém na internet ameaça você e diz para não contar a ninguém. O que fazer?",
        alternativas: [
            {
                texto: "Obedecer e guardar segredo.",
                correta: false,
                explicacao: "Ameaças não devem ser enfrentadas sozinhas. Procure um adulto de confiança."
            },
            {
                texto: "Responder com ameaças ainda maiores.",
                correta: false,
                explicacao: "Evite aumentar o conflito. Priorize sua segurança e procure ajuda."
            },
            {
                texto: "Parar de responder, guardar provas com segurança e pedir ajuda a um adulto.",
                correta: true,
                explicacao: "Correto! Você merece proteção. Um adulto pode ajudar a bloquear e denunciar."
            }
        ]
    },

    {
        personagem: "Link",
        emoji: "🔎",
        fala: "Curiosidade é ótima quando vem com cuidado!",
        pergunta: "Um anúncio estranho aparece no seu celular dizendo que ele está infectado. O que fazer?",
        alternativas: [
            {
                texto: "Clicar em todos os botões do anúncio.",
                correta: false,
                explicacao: "O aviso pode ser falso. Não clique em anúncios suspeitos."
            },
            {
                texto: "Não clicar e verificar o aparelho por meios confiáveis.",
                correta: true,
                explicacao: "Correto! Feche o anúncio e use ferramentas e canais confiáveis."
            },
            {
                texto: "Instalar qualquer aplicativo indicado pelo anúncio.",
                correta: false,
                explicacao: "Aplicativos desconhecidos podem colocar seus dados em risco."
            }
        ]
    },

    {
        personagem: "Pensa-Pensa",
        emoji: "💭",
        fala: "Respire, pense e escolha com cuidado!",
        pergunta: "Você vê uma notícia muito surpreendente sendo compartilhada. Como agir?",
        alternativas: [
            {
                texto: "Compartilhar imediatamente para ser o primeiro.",
                correta: false,
                explicacao: "Notícias falsas podem se espalhar rapidamente. Evite compartilhar sem verificar."
            },
            {
                texto: "Verificar a fonte e comparar com outras fontes confiáveis.",
                correta: true,
                explicacao: "Correto! Conferir a informação ajuda a combater boatos e desinformação."
            },
            {
                texto: "Acreditar porque muitas pessoas compartilharam.",
                correta: false,
                explicacao: "Popularidade não garante que uma informação seja verdadeira."
            }
        ]
    }
];

// CONFIGURAÇÃO DOS CAMINHOS

const rotas = {
    rapida: {
        nome: "Atalho Relâmpago",
        quantidade: 3,
        vitoria: "Você atravessou o atalho com atenção e salvou a cidade digital!",
        emoji: "⚡"
    },

    curta: {
        nome: "Caminho Equilibrado",
        quantidade: 5,
        vitoria: "Você superou os desafios e ajudou os guardiões a proteger a cidade!",
        emoji: "🧭"
    },

    longa: {
        nome: "Jornada dos Guardiões",
        quantidade: 7,
        vitoria: "Sua jornada foi longa, mas você aprendeu a enfrentar muitos perigos digitais!"
            ,
        emoji: "🌙"
    }
};

// VARIÁVEIS DO JOGO

let rotaAtual;
let desafios = [];
let indiceAtual = 0;
let jogoEncerrado = false;
let respostaErrada = false;

// INICIAR E ESCOLHER A ROTA

botaoIniciar.addEventListener("click", function() {
    mostrarTela(telaRotas);
});

document.querySelectorAll(".rota").forEach(function(botao) {
    botao.addEventListener("click", function() {
        iniciarJogo(botao.dataset.rota);
    });
});

// ESCOLHER UM ELEMENTO ALEATÓRIO

function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

// EMBARALHAR AS PERGUNTAS

function embaralhar(lista) {
    const copia = [...lista];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        const temporaria = copia[i];
        copia[i] = copia[j];
        copia[j] = temporaria;
    }

    return copia;
}

// COMEÇAR UMA NOVA AVENTURA

function iniciarJogo(nome) {
    rotaAtual = rotas[nome];

    desafios = embaralhar(perguntas).slice(
        0,
        rotaAtual.quantidade
    );

    indiceAtual = 0;
    jogoEncerrado = false;
    respostaErrada = false;

    nomeRota.textContent = rotaAtual.nome;
    mostrarTela(telaJogo);
    mostrarPergunta();
}

// MOSTRAR UMA TELA POR VEZ

function mostrarTela(telaEscolhida) {
    telaInicial.classList.add("escondido");
    telaRotas.classList.add("escondido");
    telaJogo.classList.add("escondido");
    telaFinal.classList.add("escondido");

    telaEscolhida.classList.remove("escondido");
}

// ATUALIZAR O TABULEIRO

function atualizarTabuleiro() {
    casasTabuleiro.innerHTML = "";

    for (let i = 0; i < rotaAtual.quantidade; i++) {
        const casa = document.createElement("div");

        casa.classList.add("casa");

        if (i < indiceAtual) {
            casa.classList.add("concluida");
            casa.textContent = "✓";
        } else if (i === indiceAtual) {
            casa.classList.add("atual");
            casa.textContent = "★";
        } else {
            casa.textContent = i + 1;
        }

        casasTabuleiro.appendChild(casa);
    }

    const porcentagem =
        (indiceAtual / rotaAtual.quantidade) * 100;

    barraProgresso.style.width = porcentagem + "%";
}

// MOSTRAR O DESAFIO ATUAL

function mostrarPergunta() {
    if (indiceAtual >= desafios.length) {
        mostrarFinal(true);
        return;
    }

    const desafio = desafios[indiceAtual];

    atualizarTabuleiro();

    contador.textContent =
        "Desafio " + (indiceAtual + 1) +
        " de " + rotaAtual.quantidade;

    emojiPersonagem.textContent = desafio.emoji;
    nomePersonagem.textContent = desafio.personagem;
    falaPersonagem.textContent = desafio.fala;

    pergunta.textContent = desafio.pergunta;

    alternativas.innerHTML = "";
    feedback.textContent = "";
    feedback.className = "feedback";

    botaoContinuar.classList.add("escondido");

    desafio.alternativas.forEach(function(opcao) {
        const botao = document.createElement("button");

        botao.classList.add("alternativa");
        botao.textContent = opcao.texto;

        botao.addEventListener("click", function() {
            verificarResposta(opcao, botao);
        });

        alternativas.appendChild(botao);
    });
}

// VERIFICAR A RESPOSTA

function verificarResposta(opcao, botaoEscolhido) {
    if (jogoEncerrado) {
        return;
    }

    const botoes = alternativas.querySelectorAll("button");

    botoes.forEach(function(botao) {
        botao.disabled = true;
    });

    if (opcao.correta) {
        botaoEscolhido.classList.add("correta");

        feedback.className = "feedback sucesso";
        feedback.textContent =
            "✓ Correto! Você avançou no tabuleiro.\n" +
            opcao.explicacao;

        indiceAtual++;
        atualizarTabuleiro();

        botaoContinuar.textContent =
            indiceAtual === rotaAtual.quantidade
                ? "Concluir missão 🏆"
                : "Avançar →";

    } else {
        botaoEscolhido.classList.add("errada");

        feedback.className = "feedback erro";
        feedback.textContent =
            "✗ Game Over! Você caiu em uma armadilha.\n" +
            opcao.explicacao +
            "\n\nNão desanime: aprender também faz parte da aventura!";

        jogoEncerrado = true;
        respostaErrada = true;

        botaoContinuar.textContent = "Ver resultado";
    }

    botaoContinuar.classList.remove("escondido");
}

// AVANÇAR OU ENCERRAR A AVENTURA

botaoContinuar.addEventListener("click", function() {
    if (respostaErrada) {
        mostrarFinal(false);
    } else if (indiceAtual >= desafios.length) {
        mostrarFinal(true);
    } else {
        mostrarPergunta();
    }
});

// MOSTRAR A VITÓRIA OU O GAME OVER

function mostrarFinal(venceu) {
    jogoEncerrado = true;
    mostrarTela(telaFinal);

    const emojiFinal = document.querySelector("#emoji-final");
    const tituloFinal = document.querySelector("#titulo-final");
    const textoFinal = document.querySelector("#texto-final");
    const etiquetaFinal = document.querySelector("#etiqueta-final");

    if (venceu) {
        emojiFinal.textContent = "🏆";
        etiquetaFinal.textContent = "MISSÃO CONCLUÍDA";
        tituloFinal.textContent = "Você salvou a cidade digital!";

        textoFinal.textContent =
            rotaAtual.vitoria +
            " Você completou os " +
            rotaAtual.quantidade +
            " desafios do " +
            rotaAtual.nome +
            ". Continue usando a internet com responsabilidade!";

    } else {
        emojiFinal.textContent = "💜";
        etiquetaFinal.textContent = "FIM DA AVENTURA";
        tituloFinal.textContent = "Game Over! Vamos tentar de novo?";

        textoFinal.textContent =
            "O caminho foi interrompido, mas agora você sabe " +
            "mais sobre segurança digital. " +
            "Relembre a explicação do desafio e tente outra rota. " +
            "Você pode chegar à vitória!";
    }
}

// JOGAR NOVAMENTE

botaoNovamente.addEventListener("click", function() {
    indiceAtual = 0;
    jogoEncerrado = false;
    respostaErrada = false;

    mostrarTela(telaRotas);
});
