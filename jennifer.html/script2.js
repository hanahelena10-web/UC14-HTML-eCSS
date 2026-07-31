const nomeProduto = prompt("Digite o nome do produto:");
const precoOriginal = parseFloat(prompt("Digite o preço original do produto (ex: 150.00):"));
const percentualDesconto = parseFloat(prompt("Digite o percentual de desconto (%):"));

const valorDesconto = precoOriginal * (percentualDesconto / 100);
const precoFinal = precoOriginal - valorDesconto;

const formatarMoeda = (valor) => {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const precoOriginalFormatado = formatarMoeda(precoOriginal);
const valorDescontoFormatado = formatarMoeda(valorDesconto);
const precoFinalFormatado = formatarMoeda(precoFinal);

const resultado = `
Resumo do Desconto - ${nomeProduto}:
Preço Original: ${precoOriginalFormatado}
Desconto (${percentualDesconto}%): ${valorDescontoFormatado}
Preço Final: ${precoFinalFormatado}
`;

console.log(resultado);
alert(resultado);
