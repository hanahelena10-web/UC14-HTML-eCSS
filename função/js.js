
console.log("Olá, Luiz! Seja bem-vindo!");
console.log("Olá, Gustavo! Seja bem-vindo!");
console.log("Olá, Cecília! Seja bem-vinda!");


function darBoasVindas(nome) {
    console.log(`Olá, {nome}! Seja bem-vindo(a)!`);
}


darBoasVindas("Luiz");
darBoasVindas("Gustavo");
darBoasVindas("Cecília");


function apresentar(nome, idade) {
    console.log(`Olá, meu nome é {nome} e tenho {idade} anos.`);
}


apresentar("Luiz", 25);
apresentar("Gustavo", 30);
apresentar("Cecília", 28);






atividade


function verificarEstudos(nome) {
    console.log(`{nome} está estudando.`);
}


Estudando("Jennifer");
Estudando("Duda");
Estudando("cerlan");






function somar(a,b) {
    return a + b ;
}


somar(5, 3)


let resultado= somar (5, 3)


console.log(resultado);






function verificarNota(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
 
    if (media >= 6) {
        console.log(`Média: {media} - Aprovado!`);
    } else {
        console.log(`Média: {media} - Reprovado!`);
    }
}
 
verificarNota(10, 2);
verificarNota(10, 1);

//Continuando

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

let nome = prompt("Digite o nome do aluno:");
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media = calcularMedia(nota1, nota2);

console.log(`${nome} sua média é: ${media}`);

if (media >= 6) {
    console.log("Parabéns! Você foi aprovado(a)!");
}
else {
    console.log("Infelizmente você foi reprovado(a).");
}

function calcularViagem(hospedagem, alimentacao, passeios) {
    let total = hospedagem + alimentacao + passeios;
    return total;
}

let hospedagem = Number(prompt("Digite o custo da hospedagem:"));
let alimentacao = Number(prompt("Digite o custo da alimentação:"));
let passeios = Number(prompt("Digite o custo dos passeios:"));

let custoTotal = calcularViagem(hospedagem, alimentacao, passeios);

console.log(`Custo da hospedagem: R$ ${hospedagem.toFixed(2)}`);
console.log(`Custo da alimentação: R$ ${alimentacao.toFixed(2)}`);
console.log(`Custo dos passeios: R$ ${passeios.toFixed(2)}`);
console.log(`Custo total da viagem: R$ ${custoTotal.toFixed(2)}`);

if (custoTotal <= 2000) {
    console.log("A viagem está dentro do orçamento!");
} else {
    console.log("A viagem está fora do orçamento!");
}