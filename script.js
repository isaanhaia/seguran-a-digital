const caixaPerguntas =
    document.querySelector(".titulo-pergunta");

const caixaAlternativas =
    document.querySelector(".alternativas");

const caixaMensagem =
    document.querySelector(".mensagem");

const nomePersonagem =
    document.querySelector(".nome-personagem");

const pontuacao =
    document.querySelector(".pontuacao");

const caminhoAtual =
    document.querySelector(".caminho-atual");


/*
========================================
PERGUNTAS DO JOGO
========================================

Cada pergunta possui:

personagem
pergunta
alternativas

Cada alternativa possui:

texto
proxima = número da próxima pergunta
pontos = pontos ganhos
mensagem = mensagem educativa
*/


const perguntas = [

    /* 0 */

    {
        personagem: "Pensa-Pensa",

        pergunta:
            "Você acabou de entrar na Cidade Digital. Antes de começar sua aventura, o que deve fazer?",

        alternativas: [

            {
                texto:
                    "Pensar antes de clicar e procurar caminhos seguros.",

                proxima: 1,

                pontos: 10,

                mensagem:
                    "Boa escolha! Na internet, pensar antes de agir ajuda a evitar problemas."
            },


            {
                texto:
                    "Clicar em todos os botões para descobrir o que acontece.",

                proxima: 2,

                pontos: 0,

                mensagem:
                    "Cuidado! Clicar sem verificar pode levar você para lugares perigosos."
            },


            {
                texto:
                    "Pedir ajuda a um adulto de confiança.",

                proxima: 3,

                pontos: 10,

                mensagem:
                    "Muito bem! Pedir ajuda é uma atitude inteligente quando algo parece estranho."
            }

        ]
    },


    /* 1 */

    {
        personagem: "Senhor Senha",

        pergunta:
            "Um personagem misterioso pede sua senha para abrir uma porta secreta. O que você faz?",

        alternativas: [

            {
                texto:
                    "Entrego minha senha porque ele prometeu ajudar.",

                proxima: 4,

                pontos: 0,

                mensagem:
                    "Senhas são pessoais. Nunca entregue sua senha para desconhecidos."
            },


            {
                texto:
                    "Não entrego e procuro um adulto de confiança.",

                proxima: 5,

                pontos: 10,

                mensagem:
                    "Excelente! Sua senha funciona como uma chave. Ela deve ficar protegida."
            }

        ]
    },


    /* 2 */

    {
        personagem: "Capitão Isca",

        pergunta:
            "Você clicou em um botão sem verificar e apareceu uma mensagem dizendo que ganhou um prêmio. O que faz?",

        alternativas: [

            {
                texto:
                    "Continuo clicando para pegar o prêmio.",

                proxima: 0,

                pontos: 0,

                mensagem:
                    "Você voltou ao começo! Algumas mensagens usam prêmios para tentar enganar as pessoas."
            },


            {
                texto:
                    "Paro e peço ajuda antes de continuar.",

                proxima: 6,

                pontos: 10,

                mensagem:
                    "Boa! Parar quando algo parece estranho pode proteger você de golpes."
            }

        ]
    },


    /* 3 */

    {
        personagem: "Alerta",

        pergunta:
            "Você encontra uma mensagem assustadora na internet. Qual é a melhor atitude?",

        alternativas: [

            {
                texto:
                    "Resolver tudo sozinho.",

                proxima: 2,

                pontos: 0,

                mensagem:
                    "Quando algo assusta ou incomoda, você não precisa resolver sozinho."
            },


            {
                texto:
                    "Sair da situação e contar para um adulto.",

                proxima: 7,

                pontos: 10,

                mensagem:
                    "Muito bem! Adultos de confiança podem ajudar em situações difíceis."
            }

        ]
    },


    /* 4 */

    {
        personagem: "Detetive Dado",

        pergunta:
            "Uma pessoa que você conheceu online pergunta seu endereço e telefone. O que você faz?",

        alternativas: [

            {
                texto:
                    "Passo as informações para fazer amizade.",

                proxima: 3,

                pontos: 0,

                mensagem:
                    "Informações pessoais precisam ser protegidas."
            },


            {
                texto:
                    "Não compartilho e procuro ajuda.",

                proxima: 7,

                pontos: 10,

                mensagem:
                    "Muito bem! Endereço e telefone são informações pessoais."
            }

        ]
    },


    /* 5 */

    {
        personagem: "Senhor Senha",

        pergunta:
            "Você encontrou uma porta que pode levar diretamente ao Portal Seguro. Qual é sua escolha?",

        alternativas: [

            {
                texto:
                    "Usar uma senha forte e seguir pelo caminho seguro.",

                proxima: 8,

                pontos: 20,

                mensagem:
                    "Você encontrou um ATALHO! Uma senha forte ajuda a proteger suas contas."
            },


            {
                texto:
                    "Usar a senha '123456'.",

                proxima: 4,

                pontos: 0,

                mensagem:
                    "Senhas fáceis são mais fáceis de descobrir. Você voltou para outra missão."
            }

        ]
    },


    /* 6 */

    {
        personagem: "Link",

        pergunta:
            "Um link parece interessante, mas você não conhece o site. O que deve fazer?",

        alternativas: [

            {
                texto:
                    "Verificar o link antes de clicar.",

                proxima: 9,

                pontos: 10,

                mensagem:
                    "Boa escolha! Ser curioso é ótimo, mas verificar primeiro é ainda melhor."
            },


            {
                texto:
                    "Clicar rapidamente.",

                proxima: 2,

                pontos: 0,

                mensagem:
                    "Ops! Você caiu novamente em uma armadilha."
            }

        ]
    },


    /* 7 */

    {
        personagem: "SuperAmigo",

        pergunta:
            "Você vê uma criança sendo ofendida em um jogo online. O que faz?",

        alternativas: [

            {
                texto:
                    "Participar das brincadeiras para não ficar de fora.",

                proxima: 3,

                pontos: 0,

                mensagem:
                    "Palavras também podem machucar. Cyberbullying não é brincadeira."
            },


            {
                texto:
                    "Ajudar a pessoa e procurar um adulto.",

                proxima: 9,

                pontos: 10,

                mensagem:
                    "Excelente! Respeito também deve existir nos jogos e nas redes."
            }

        ]
    },


    /* 8 */

    {
        personagem: "Gameiro",

        pergunta:
            "Você está jogando e outro jogador pede uma informação pessoal. O que faz?",

        alternativas: [

            {
                texto:
                    "Não compartilho meus dados.",

                proxima: 9,

                pontos: 10,

                mensagem:
                    "Muito bem! Jogos devem ser divertidos, mas a segurança vem primeiro."
            },


            {
                texto:
                    "Passo meus dados porque ele parece legal.",

                proxima: 4,

                pontos: 0,

                mensagem:
                    "Mesmo que alguém pareça legal, não devemos compartilhar informações pessoais."
            }

        ]
    },


    /* 9 */

    {
        personagem: "Fotinha",

        pergunta:
            "Você quer publicar uma foto. Qual pergunta deve fazer antes?",

        alternativas: [

            {
                texto:
                    "Eu gostaria que outras pessoas vissem essa foto?",

                proxima: 10,

                pontos: 10,

                mensagem:
                    "Muito bem! O que colocamos na internet pode ser salvo e compartilhado."
            },


            {
                texto:
                    "Quantas curtidas vou ganhar?",

                proxima: 6,

                pontos: 0,

                mensagem:
                    "Curtidas não são mais importantes que sua segurança. Você voltou para aprender."
            }

        ]
    },


    /* 10 */

    {
        personagem: "Pensa-Pensa",

        pergunta:
            "Você chegou perto do Portal Seguro! Qual pergunta deve fazer antes de clicar, postar ou compartilhar?",

        alternativas: [

            {
                texto:
                    "Será que isso é seguro?",

                proxima: 11,

                pontos: 20,

                mensagem:
                    "Você encontrou o caminho certo!"
            },


            {
                texto:
                    "Vou clicar primeiro e pensar depois.",

                proxima: 2,

                pontos: 0,

                mensagem:
                    "Ops! Pensar depois pode ser tarde demais. Você voltou para a aventura."
            }

        ]
    },


    /* 11 = FINAL */

    {
        personagem: "Todos os Guardiões",

        pergunta:
            "Você chegou ao Portal Seguro! Você aprendeu a proteger suas informações, desconfiar de golpes, respeitar outras pessoas e pensar antes de agir. Parabéns!",

        alternativas: [],

        final: true
    }

];


let atual = 0;

let pontos = 0;


/*
========================================
MOSTRAR PERGUNTA
========================================
*/


function mostraPergunta() {

    let perguntaAtual =
        perguntas[atual];


    nomePersonagem.textContent =
        perguntaAtual.personagem;


    caixaPerguntas.textContent =
        perguntaAtual.pergunta;


    pontuacao.textContent =
        pontos;


    caixaAlternativas.textContent = "";


    caixaMensagem.textContent = "";


    caminhoAtual.textContent =
        "Aventura";


    if (perguntaAtual.final == true) {

        mostraFinal();

        return;

    }


    for (
        let alternativa of perguntaAtual.alternativas
    ) {

        let botao =
            document.createElement("button");


        botao.textContent =
            alternativa.texto;


        botao.addEventListener(
            "click",
            function() {

                escolher(alternativa);

            }
        );


        caixaAlternativas.appendChild(
            botao
        );

    }

}


/*
========================================
ESCOLHA DO JOGADOR
========================================
*/


function escolher(alternativa) {


    pontos =
        pontos + alternativa.pontos;


    caixaMensagem.textContent =
        alternativa.mensagem;


    atual =
        alternativa.proxima;


    /*
    Pequena pausa para o jogador
    conseguir ler a mensagem.
    */

    setTimeout(
        function() {

            mostraPergunta();

        },

        900
    );

}


/*
========================================
FINAL
========================================
*/


function mostraFinal() {

    caminhoAtual.textContent =
        "Portal Seguro";


    caixaPerguntas.textContent =
        "Parabéns! Você chegou ao Portal Seguro!";


    caixaMensagem.textContent =
        "Sua pontuação foi " +
        pontos +
        " pontos. Você aprendeu que segurança na internet começa com boas escolhas!";


    let botao =
        document.createElement("button");


    botao.textContent =
        "Jogar novamente";


    botao.addEventListener(
        "click",
        function() {

            location.reload();

        }
    );


    caixaAlternativas.appendChild(
        botao
    );

}


mostraPergunta();
