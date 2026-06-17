// Banco de perguntas do jogo
const perguntas = [
    {
        texto: "Deepfakes só podem ser feitas em formato de vídeo.",
        respostaCorreta: false // É fake, também existem deepfakes de voz/áudio e fotos.
    },
    {
        texto: "Prestar atenção ao piscar dos olhos e movimentos da boca ajuda a detectar vídeos falsos.",
        respostaCorreta: true // É fato!
    },
    {
        texto: "Qualquer ferramenta de Inteligência Artificial cria imagens 100% perfeitas e impossíveis de rastrear.",
        respostaCorreta: false // É fake, a maioria deixa rastros digitais e imperfeições.
    }
];

let perguntaAtualIndex = 0;

function carregarPergunta() {
    if (perguntaAtualIndex < perguntas.length) {
        document.getElementById("texto-pergunta").innerText = perguntas[perguntaAtualIndex].texto;
        document.getElementById("resultado-jogo").innerText = "";
    } else {
        document.getElementById("pergunta-box").innerHTML = "<h3>Parabéns! Você concluiu o quiz sobre desinformação!</h3>";
    }
}

function verificarResposta(respostaUsuario) {
    const respostaCorreta = perguntas[perguntaAtualIndex].respostaCorreta;
    const resultadoTexto = document.getElementById("resultado-jogo");

    if (respostaUsuario === respostaCorreta) {
        resultadoTexto.style.color = "#27ae60";
        resultadoTexto.innerText = "Acertou! Excelente percepção crítica.";
    } else {
        resultadoTexto.style.color = "#c0392b";
        resultadoTexto.innerText = "Ops, resposta errada! Fique mais atento aos detalhes da mídia.";
    }

    // Avança para a próxima pergunta após 2 segundos
    perguntaAtualIndex++;
    setTimeout(carregarPergunta, 2500);
}

// Lógica do Formulário Interativo
function enviarDados(event) {
    event.preventDefault(); // Impede a página de recarregar
    
    const nome = document.getElementById("nome").value;
    const mensagemSucesso = document.getElementById("mensagem-sucesso");
    
    mensagemSucesso.innerText = `Obrigado pelo envio, ${nome}! Seus dados ajudam a mapear o alcance da desinformação.`;
    
    // Limpa o formulário
    document.getElementById("form-comunidade").reset();
}

// Inicializa a primeira pergunta quando a página carrega
window.onload = carregarPergunta;
