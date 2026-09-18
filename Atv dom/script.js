function mostrarCidade() {
  let cidade = document.getElementById("cidade").value;
  document.getElementById("mensagem").textContent = "Destino selecionado para a aventura: " + cidade + "!";
}

function destacarMensagem() {
  let p = document.getElementById("mensagem");
  p.style.color = "#134582";
  p.style.fontSize = "22px";
  p.style.backgroundColor = "#e2e8f0";
}

let total = 10;

function mudarContador(valor) {
  total = total + valor;
  document.getElementById("contador").textContent = total;
}