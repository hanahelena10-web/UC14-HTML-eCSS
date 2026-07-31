const senha = prompt("Digite a senha para verificação:");

const tamanhoValido = senha.length >= 8;
const temMaiuscula = /[A-Z]/.test(senha);
const temMinuscula = /[a-z]/.test(senha);

let classificacao = "Fraca";
if (tamanhoValido && temMaiuscula && temMinuscula) {
  classificacao = "Forte";
}

console.log("=== Análise de Força de Senha ===");
console.log(`Tamanho da senha: ${senha.length} caracteres`);
console.log(`Possui letras maiúsculas: ${temMaiuscula ? "Sim" : "Não"}`);
console.log(`Possui letras minúsculas: ${temMinuscula ? "Sim" : "Não"}`);
console.log(`Classificação final: ${classificacao}`);

alert(`Análise da Senha:\nTamanho: ${senha.length} caracteres\nClassificação: ${classificacao}`);