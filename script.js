
const perguntas = [
    {
        pergunta: "Se você vir um vídeo de um político falando algo absurdo, o que deve fazer primeiro?",
        opcoes: [
            "Compartilhar imediatamente para alertar os amigos.",
            "Procurar em agências de checagem ou jornais confiáveis se o vídeo é real.",
            "Acreditar, afinal, se está em vídeo, deve ser verdade."
        ],
        correta: 1 // Segunda opção (começa do 0)
    },
    {
        pergunta: "O que define uma 'Deepfake'?",
        opcoes: [
            "Uma notícia escrita com erros de português.",
            "Um meme engraçado feito no Photoshop.",
            "Vídeos ou áudios gerados por inteligência artificial que imitam pessoas reais."
        ],
        correta: 2 // Terceira opção
    },
    {
        pergunta: "Qual é a melhor forma de combater a desinformação?",
        opcoes: [
            "Desenvolver o pensamento crítico e checar as fontes antes de repassar algo.",
            "Parar de usar a internet por completo.",
            "Apenas ler títulos de notícias."
        ],
        correta: 0 // Primeira opção
    }
];

let perguntaAtual = 0;

const elementoPergunta = document.getElementById("pergunta");
const elementoAlternativas = document.getElementById("alternativas");
const elementoResultado = document.getElementById("resultado");

function carregarPergunta() {
    if (perguntaAtual < perguntas.length) {
        elementoPergunta.textContent = perguntas[perguntaAtual].pergunta;
        elementoAlternativas.innerHTML = "";
        elementoResultado.textContent = "";

        perguntas[perguntaAtual].opcoes.forEach((opcao, index) => {
            const botao = document.createElement("button");
            botao.textContent = opcao;
            botao.classList.add("btn-opcao");
            botao.onclick = () => verificarResposta(index);
            elementoAlternativas.appendChild(botao);
        });
    } else {
        elementoPergunta.textContent = "Parabéns! Você concluiu o quiz de Cidadania Digital!";
        elementoAlternativas.innerHTML = "";
        elementoResultado.textContent = "Continue sendo um internauta atento e consciente.";
    }
}

function verificarResposta(selecionada) {
    if (selecionada === perguntas[perguntaAtual].correta) {
        elementoResultado.textContent = "Resposta Correta! 🎉";
        elementoResultado.style.color = "green";
    } else {
        elementoResultado.textContent = "Resposta Errada. ❌ Fique mais atento!";
        elementoResultado.style.color = "red";
    }

    // Espera 2 segundos e passa para a próxima pergunta
    setTimeout(() => {
        perguntaAtual++;
        carregarPergunta();
    }, 2000);
}

// Inicia o jogo
carregarPergunta();
