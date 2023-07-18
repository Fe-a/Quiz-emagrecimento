const questao = document.querySelector('#h1-questao');
const divQuestao = document.querySelector('#questao')
const h1MainQuiz = document.querySelector('#h1MainQuiz');
const btnYellow = document.querySelector('#btn-sim');
const btnRed = document.querySelector('#btn-nao');
const spanQuestao = document.querySelector('span');
const textoQuestao = document.querySelector('.text_questao');
const ul = document.querySelector('ul');

// TEXTOS DAS QUESTÕES
const questaoDois = "Já tentou fazer dietas malucas ou reeducação alimentar antes?";
const questaoTres = "Você gostaria de aprender um método que promete perder os pneus indesejados sem fazer loucuras? ";
const questaoQuatro = "O vídeo de apresentação a seguir tem um limite de mulheres que podem assistir ao mesmo tempo. Você pretende assistir até o final?";


const textoPFaseCinco = () => {
    const p = document.createElement('p');
    p.innerHTML = 'Se você concordar com todos termos acima, clique no botão "Eu Concordo" para poder assitir a esta apresentação privada.';
    p.style.fontSize = '10pt';
    p.style.color = 'black';
    p.style.textAlign = 'center';
    p.style.fontWeight = '600';
    divQuestao.appendChild(p);
}

const botaoFaseCinco = () => {
    const botao = document.createElement('button');
    botao.innerHTML = 'EU CONCORDO';
    divQuestao.appendChild(botao);
    botao.className = 'btnFaseCinco';

}

const textosFaseCinco = () => {
    console.log("chegamos até aqui")
    textoQuestao.remove(); // remove o texto da questão


    questao.innerHTML = 'Parabéns!, antes que você assista a apresentação onde é compartilhado o método " 3s " do especialista Michael Fiori, nós simplismente pedimos que cada pessoa aceite nossos 3 termos de uso.';
    questao.style.fontSize = '10pt';
    questao.style.color = 'black';
    questao.style.textAlign = 'center';
    btnRed.remove();
    btnYellow.remove();

}



let click = 1;
const btnAmareloClicado = btnYellow.addEventListener("click", () => {
    //questao.innerHTML = "Questão 2:"
    if (click <= 4) {
        const numeroQuestao = +spanQuestao.innerHTML;
        spanQuestao.innerHTML = numeroQuestao + 1;
        click += 1
        if (click == 2) {
            textoQuestao.innerHTML = questaoDois;
            console.log("Agora o Texto tem a questão 2");
        } if (click == 3) {
            textoQuestao.innerHTML = questaoTres;
            console.log("Agora o Texto tem a questão 3");
        } if (click == 4) {
            textoQuestao.innerHTML = questaoQuatro;
            console.log("Agora o Texto tem a questão 4");
        } if (click == 5) {
            textosFaseCinco()
            textoPFaseCinco()
            botaoFaseCinco()
            ul.style.display = 'flex';

            const imgFaseCinco = document.querySelector('#img-fasecinco');
            const imgPrincipal = document.querySelector('#img-emagrecimento');
            imgPrincipal.remove();
            imgFaseCinco.style.display = 'block';

            h1MainQuiz.innerHTML = 'Parabéns! Baseado nas suas respostas você está qualificada.';
            console.log("Agora o Texto tem a questão 5");
        }
        console.log(click)
    }
    //textos()

    console.log("botão amarelo: clicado")

})
const btnVermelhoClicado = btnRed.addEventListener("click", () => {
    //questao.style.color = "blue";
    //questao.innerHTML = "Questão 2:"
    if (click <= 4) {
        const numeroQuestao = +spanQuestao.innerHTML;
        spanQuestao.innerHTML = numeroQuestao + 1;
        click += 1
        if (click == 2) {
            textoQuestao.innerHTML = questaoDois;
            console.log("Agora o Texto tem a questão 2");
        } if (click == 3) {
            textoQuestao.innerHTML = questaoTres;
            console.log("Agora o Texto tem a questão 3");
        } if (click == 4) {
            textoQuestao.innerHTML = questaoQuatro;
            console.log("Agora o Texto tem a questão 4");
        } if (click == 5) {
            textosFaseCinco()
            textoPFaseCinco()
            botaoFaseCinco()
            ul.style.display = 'flex';
            const imgFaseCinco = document.querySelector('#img-fasecinco');
            const imgPrincipal = document.querySelector('#img-emagrecimento');
            imgPrincipal.remove();
            imgFaseCinco.style.display = 'block';


            h1MainQuiz.innerHTML = 'Parabéns! Baseado nas suas respostas você está qualificada.';


            console.log("Agora o Texto tem a questão 5");
        }
        console.log(click)
    }
    console.log("botão vermelho: clicado")

})

window.onload = () => {
    btnAmareloClicado
    btnVermelhoClicado
    console.log("Deu bom!")
}