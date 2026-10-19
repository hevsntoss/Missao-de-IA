const caixaPrincipal = document.querySelector(".caixa-Principal");
const caixaPerguntas = document.querySelector(".caixa-Perguntas");
const caixaAlternativas = document.querySelector(".caixa-Alternativas");
const caixaResultado = document.querySelector(".caixa-Resultado");
const textoResultado = document.querySelector(".texto-Resultado");

const perguntas = [
{
    enunciado : "1)Qual animal consegue regenerar partes do próprio corpo?",
    alternativas : [
        "A) Axolote",
        "B) Coelho"
    ]
},
{
    enunciado : "2)Qual planeta tem o dia mais longo do Sistema Solar?",
    alternativas : [
        "A) Marte",
        "B) Vênus"
    ]
},
{
    enunciado : "3)O que aconteceria se a Terra parasse de girar de repente?",
    alternativas : [
        "A) Haveria consequências catastróficas",
        "B) Nada mudaria"
    ]
},
{
    enunciado : "4)Qual destes animais pode reconhecer o próprio reflexo no espelho?",
    alternativas : [
        "A) Golfinho",
        "B) Galinha"
    ]
},
{
    enunciado : "5)Qual lugar do planeta é conhecido por ter lagos que parecem cor-de-rosa?",
    alternativas : [
        "A) Austrália",
        "B) Canadá"
    ]
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();