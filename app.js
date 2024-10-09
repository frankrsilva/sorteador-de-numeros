const botaoSortear = document.querySelector("#btn-sortear");
const botaoReiniciar = document.querySelector("#btn-reiniciar");

let quantidadeNumeros = document.querySelector("#quantidade");
let min = document.querySelector("#de");
let max = document.querySelector("#ate");

let saida = document.querySelector("#saida__numeros");

let numerosSorteados = [];

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function verificaEntradas(min, max, qtd) {

    let qtdNumerosPossiveis = max - min + 1;

    if (min > max) {
        return false;
    } else if (qtdNumerosPossiveis < qtd) {
        return false;
    } else {
        return true;
    }
}

function adicionaNumeroLista(numero) {
    numerosSorteados.push(numero);
}

function exibirNumeros(lista) {
    saida.innerText = `Números sorteados: `

    for (item of lista) {
        if (item != lista[lista.length - 1]) {
            saida.innerText += ` ${item},`
        } else {
            saida.innerText += ` ${item}.`
        }
    }
}

function sortear() {
    let quantidadeNumeros = document.querySelector("#quantidade");
    quantidadeNumeros = Number(quantidadeNumeros.value);

    let min = document.querySelector("#de");
    min = Number(min.value);

    let max = document.querySelector("#ate");
    max = Number(max.value);

    let entradasValidas = verificaEntradas(min, max, quantidadeNumeros);

    if (entradasValidas) {
        for (i=1;i<=quantidadeNumeros;i++) {
            let numero = gerarNumeroAleatorio(min, max);
    
            while (numerosSorteados.includes(numero)) {
                numero = gerarNumeroAleatorio(min, max);
            }
    
            adicionaNumeroLista(numero);
        }
        exibirNumeros(numerosSorteados);
    } else {
        saida.innerText = "Números sorteados: entrada inválida."
    }

    min.value = "";
    max.value = "";
    quantidadeNumeros.value = "";

    botaoSortear.setAttribute("disabled", true);
    botaoReiniciar.removeAttribute("disabled");
}

function reiniciar() {
    numerosSorteados = [];
    botaoSortear.removeAttribute("disabled");
    botaoReiniciar.setAttribute("disabled", true);
    saida.innerText = "Números sorteados: nenhum até agora";
}