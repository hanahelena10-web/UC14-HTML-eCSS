
const nomeCompleto = prompt("Digite seu nome completo:");
const cargo = prompt("Digite seu cargo ou função:");
const empresa = prompt("Digite o nome da sua empresa ou escola:");
const email = prompt("Digite seu e-mail:");


const nomeMaiusculo = nomeCompleto.toUpperCase();


const cartao = `

 CARTÃO DE VISITA DIGITAL    
 Nome:    ${nomeMaiusculo}
 Cargo:   ${cargo}
 Empresa: ${empresa}
 E-mail:  ${email}

`;

console.log(cartao);


alert("Cartão de visita gerado com sucesso! Verifique o console.");

