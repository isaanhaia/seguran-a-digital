/* ==========================================
   GUARDIÕES DA INTERNET
   ========================================== */


const telaInicial = document.querySelector("#tela-inicial");
const telaRotas = document.querySelector("#tela-rotas");
const telaJogo = document.querySelector("#tela-jogo");
const telaFinal = document.querySelector("#tela-final");

const botaoIniciar = document.querySelector("#botao-iniciar");
const botaoContinuar = document.querySelector("#botao-continuar");
const botaoNovamente = document.querySelector("#botao-novamente");
const botaoEscolherRota = document.querySelector("#botao-escolher-rota");

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

const emojiFinal = document.querySelector("#emoji-final");
const etiquetaFinal = document.querySelector("#etiqueta-final");
const tituloFinal = document.querySelector("#titulo-final");
const textoFinal = document.querySelector("#texto-final");


/* BANCO DE PERGUNTAS
   Cada rota possui dez desafios disponíveis.
*/

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
                explicacao: "Nunca compartilhe sua senha, mesmo em troca de recompensas."
            },
            {
                texto: "Enviar a senha apenas se a pessoa parecer confiável.",
                correta: false,
                explicacao: "A aparência de confiança não garante segurança."
            }
        ]
    },

    {
        personagem: "Dona Verifica",
        emoji: "🔎",
        fala: "Investigue antes de acreditar!",

        pergunta: "Você encontra uma notícia muito assustadora nas redes sociais, mas não sabe se é verdadeira. O que fazer?",

        alternativas: [
            {
                texto: "Compartilhar rapidamente para avisar seus amigos.",
                correta: false,
                explicacao: "Compartilhar sem verificar pode espalhar desinformação."
            },
            {
                texto: "Acreditar porque muitas pessoas comentaram.",
                correta: false,
                explicacao: "Muitos comentários não comprovam que uma informação seja verdadeira."
            },
            {
                texto: "Pesquisar em fontes confiáveis antes de compartilhar.",
                correta: true,
                explicacao: "Correto! Verifique a origem, a data e a confirmação da notícia."
            }
        ]
    },

    {
        personagem: "Escudo Digital",
        emoji: "🛡️",
        fala: "Sua conta merece uma proteção extra!",

        pergunta: "Qual atitude ajuda a proteger uma conta contra invasões?",

        alternativas: [
            {
                texto: "Deixar a conta sem nenhuma proteção adicional.",
                correta: false,
                explicacao: "A ausência de proteções extras pode facilitar invasões."
            },
            {
                texto: "Ativar a verificação em duas etapas.",
                correta: true,
                explicacao: "Correto! A verificação em duas etapas cria uma camada adicional de segurança."
            },
            {
                texto: "Anotar a senha em comentários públicos.",
                correta: false,
                explicacao: "Nunca deixe suas senhas expostas em locais públicos."
            }
        ]
    },

    {
        personagem: "Guardiã Consciente",
        emoji: "🌐",
        fala: "Você está quase salvando a cidade!",

        pergunta: "Ao utilizar um computador público, qual atitude é mais segura?",

        alternativas: [
            {
                texto: "Salvar a senha para facilitar o próximo acesso.",
                correta: false,
                explicacao: "Salvar senhas em computadores públicos pode permitir que outras pessoas acessem sua conta."
            },
            {
                texto: "Deixar a conta aberta para voltar depois.",
                correta: false,
                explicacao: "Deixar uma conta aberta permite que outras pessoas acessem suas informações."
            },
            {
                texto: "Sair da conta e não salvar a senha ao terminar.",
                correta: true,
                explicacao: "Correto! Sempre encerre sua sessão e evite deixar seus dados armazenados."
            }
        ]
    }

];


/* CONFIGURAÇÃO DAS DUAS ROTAS

   Os atalhos são definidos internamente.
   Não são apresentados na tela de escolha.

   A posição 0 corresponde à primeira pergunta.
*/

const rotas = {

    aurora: {
        nome: "Trilha Aurora",

        perguntas: perguntas,

        atalhos: {
            0: 2,
            2: 2,
            5: 2,
            7: 2
        }
    },

    oceano: {
        nome: "Trilha Oceano",

        perguntas: perguntas,

        atalhos: {
            4: 2
        }
    }

};


/* VARIÁVEIS DO JOGO */

let rotaAtual = null;

let posicao = 0;

let perguntaAtual = 0;

let respostaSelecionada = false;

let jogoEncerrado = false;


/* CONTROLE DAS TELAS */

function mostrarTela(tela) {

    telaInicial.classList.add("escondido");
    telaRotas.classList.add("escondido");
    telaJogo.classList.add("escondido");
    telaFinal.classList.add("escondido");

    tela.classList.remove("escondido");

}


/* BOTÃO INICIAR */

botaoIniciar.addEventListener("click", () => {

    mostrarTela(telaRotas);

});


/* ESCOLHA DA ROTA */

document.querySelectorAll(".rota").forEach(botao => {

    botao.addEventListener("click", () => {

        const escolha = botao.dataset.rota;

        iniciarJogo(escolha);

    });

});


/* INICIAR UMA NOVA PARTIDA */

function iniciarJogo(escolha) {

    rotaAtual = rotas[escolha];

    posicao = 0;

    perguntaAtual = 0;

    respostaSelecionada = false;

    jogoEncerrado = false;

    nomeRota.textContent = rotaAtual.nome;

    barraProgresso.style.width = "0%";

    emojiPersonagem.textContent = "🕵️";

    nomePersonagem.textContent = "Detetive Dado";

    falaPersonagem.textContent = "Vamos proteger a cidade!";

    feedback.textContent = "";

    feedback.className = "feedback";

    botaoContinuar.classList.add("escondido");

    criarTabuleiro();

    atualizarTabuleiro();

    mostrarTela(telaJogo);

    carregarPergunta();

}


/* CRIAR AS DEZ CASAS DO TABULEIRO */

function criarTabuleiro() {

    casasTabuleiro.innerHTML = "";

    for (let i = 1; i <= 10; i++) {

        const casa = document.createElement("div");

        casa.classList.add("casa");

        casa.textContent = i;

        casa.dataset.numero = i;

        casasTabuleiro.appendChild(casa);

    }

}


/* ATUALIZAR A POSIÇÃO DO PERSONAGEM */

function atualizarTabuleiro() {

    const casas = document.querySelectorAll(".casa");

    casas.forEach((casa, indice) => {

        casa.classList.remove("atual", "concluida");

        const numeroCasa = indice + 1;

        if (numeroCasa <= posicao) {

            casa.classList.add("concluida");

        }

        if (numeroCasa === posicao) {

            casa.classList.add("atual");

        }

    });

    barraProgresso.style.width = (posicao / 10 * 100) + "%";

}


/* CARREGAR A PERGUNTA ATUAL */

function carregarPergunta() {

    if (posicao >= 10) {

        finalizarVitoria();

        return;

    }

    perguntaAtual = posicao;

    respostaSelecionada = false;

    const desafio = rotaAtual.perguntas[perguntaAtual];

    contador.textContent =
        "Desafio " + (perguntaAtual + 1) + " de 10";

    pergunta.textContent = desafio.pergunta;

    emojiPersonagem.textContent = desafio.emoji;

    nomePersonagem.textContent = desafio.personagem;

    falaPersonagem.textContent = desafio.fala;

    alternativas.innerHTML = "";

    feedback.textContent = "";

    feedback.className = "feedback";

    botaoContinuar.classList.add("escondido");

    desafio.alternativas.forEach((opcao, indice) => {

        const botao = document.createElement("button");

        botao.classList.add("alternativa");

        botao.textContent = opcao.texto;

        botao.addEventListener("click", () => {

            responderPergunta(indice);

        });

        alternativas.appendChild(botao);

    });

}


/* RESPONDER À PERGUNTA */

function responderPergunta(indice) {

    if (respostaSelecionada || jogoEncerrado) {

        return;

    }

    respostaSelecionada = true;

    const desafio = rotaAtual.perguntas[perguntaAtual];

    const resposta = desafio.alternativas[indice];

    const botoes = document.querySelectorAll(".alternativa");

    botoes.forEach((botao, i) => {

        botao.disabled = true;

        if (desafio.alternativas[i].correta) {

            botao.classList.add("correta");

        }

        if (i === indice && !resposta.correta) {

            botao.classList.add("errada");

        }

    });


    /* RESPOSTA ERRADA: GAME OVER */

    if (!resposta.correta) {

        feedback.textContent =
            "❌ " + resposta.explicacao;

        feedback.className = "feedback erro";

        jogoEncerrado = true;

        setTimeout(() => {

            finalizarDerrota(resposta.explicacao);

        }, 1600);

        return;

    }


    /* RESPOSTA CORRETA */

    feedback.textContent =
        "✅ " + resposta.explicacao;

    feedback.className = "feedback sucesso";


    /* VERIFICAR SE EXISTE UM ATALHO */

    const tamanhoAtalho = rotaAtual.atalhos[perguntaAtual] || 0;

    const avancar = 1 + tamanhoAtalho;

    const novaPosicao = Math.min(10, posicao + avancar);


    /* MENSAGEM DE MOVIMENTAÇÃO */

    if (tamanhoAtalho > 0) {

        const casasPuladas = novaPosicao - posicao - 1;

        if (casasPuladas > 0) {

            feedback.textContent +=
                "\n\n⚡ ATALHO ENCONTRADO! Você avançou " +
                avancar + " casas e pulou " +
                casasPuladas +
                " desafio(s)!";

        }

    } else {

        feedback.textContent +=
            "\n\nVocê avançou uma casa no percurso!";

    }


    posicao = novaPosicao;

    atualizarTabuleiro();

    botaoContinuar.textContent =
        posicao >= 10 ? "Concluir missão 🏆" : "Avançar →";

    botaoContinuar.classList.remove("escondido");

}


/* BOTÃO AVANÇAR */

botaoContinuar.addEventListener("click", () => {

    if (jogoEncerrado) {

        return;

    }

    if (posicao >= 10) {

        finalizarVitoria();

    } else {

        carregarPergunta();

    }

});


/* FINAL DE VITÓRIA */

function finalizarVitoria() {

    jogoEncerrado = true;

    emojiFinal.textContent = "🏆";

    etiquetaFinal.textContent = "MISSÃO CONCLUÍDA";

    tituloFinal.textContent = "Você conseguiu!";

    textoFinal.textContent =
        "Parabéns, Guardião! Você conseguiu atravessar a " +
        rotaAtual.nome +
        " e chegou ao castelo! Suas escolhas ajudaram a proteger " +
        "a cidade digital. Você demonstrou conhecimento e atenção " +
        "sobre segurança na internet!";

    mostrarTela(telaFinal);

}


/* FINAL DE DERROTA / GAME OVER */

function finalizarDerrota(explicacao) {

    jogoEncerrado = true;

    emojiFinal.textContent = "💔";

    etiquetaFinal.textContent = "GAME OVER";

    tituloFinal.textContent = "Sua missão foi interrompida!";

    textoFinal.textContent =
        "Uma escolha perigosa colocou a cidade digital em risco. " +
        "Não desanime! Aprenda com o desafio e tente novamente. " +
        "Lembre-se: " + explicacao;

    mostrarTela(telaFinal);

}


/* JOGAR NOVAMENTE */

botaoNovamente.addEventListener("click", () => {

    mostrarTela(telaRotas);

});


/* ESCOLHER OUTRO CAMINHO */

botaoEscolherRota.addEventListener("click", () => {

    mostrarTela(telaRotas);

});
