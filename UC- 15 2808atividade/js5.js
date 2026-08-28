const usuarioCorreto = "admin";
const senhaCorreta = "1234";

const usuario = prompt("Usuário:");
const senha = prompt("Senha:");

if (usuario === usuarioCorreto && senha === senhaCorreta) {
  console.log("Login realizado com sucesso!");
} else if (usuario !== usuarioCorreto) {
  console.log("Usuário incorreto.");
} else {
  console.log("Senha incorreta.");
}