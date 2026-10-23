/* ===== ANO AUTOMÁTICO ===== */
const ano = document.querySelector("#ano");
if (ano) {
  ano.textContent = new Date().getFullYear();
}

/* ===== MENU HAMBÚRGUER ===== */
const botaoMenu = document.querySelector("#botao-menu");
const menu = document.querySelector("#menu-principal");

if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", () => {
    const aberto = menu.classList.toggle("open");
    botaoMenu.setAttribute("aria-expanded", String(aberto));
    botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    botaoMenu.textContent = aberto ? "✕" : "☰";
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      botaoMenu.setAttribute("aria-expanded", "false");
      botaoMenu.setAttribute("aria-label", "Abrir menu");
      botaoMenu.textContent = "☰";
    });
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
      menu.classList.remove("open");
      botaoMenu.setAttribute("aria-expanded", "false");
      botaoMenu.setAttribute("aria-label", "Abrir menu");
      botaoMenu.textContent = "☰";
    }
  });
}

/* ===== MODO CLARO / ESCURO ===== */
const botaoTema = document.querySelector("#botao-tema");

if (botaoTema) {
  botaoTema.addEventListener("click", () => {
    const modoClaro = document.body.classList.toggle("light-mode");
    botaoTema.textContent = modoClaro ? "☾" : "☼";
    botaoTema.setAttribute(
      "aria-label",
      modoClaro ? "Ativar modo escuro" : "Ativar modo claro"
    );
  });
}

/* ===== SAUDAÇÃO DINÂMICA ===== */
const saudacao = document.querySelector("#saudacao");

if (saudacao) {
  const hora = new Date().getHours();
  let cumprimento = "Boa noite";

  if (hora < 12) {
    cumprimento = "Bom dia";
  } else if (hora < 18) {
    cumprimento = "Boa tarde";
  }

  saudacao.textContent = `${cumprimento}, eu sou [seu nome].`;
}

/* ===== VALIDAÇÃO DO FORMULÁRIO ===== */
const formulario = document.querySelector("#form-contato");
const feedback = document.querySelector("#mensagem-formulario");

if (formulario && feedback) {
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      return;
    }

    feedback.textContent =
      "Formulário validado! O envio real ainda precisa ser conectado a um serviço.";
    formulario.reset();
  });
}

/* ===== VOLTAR AO TOPO ===== */
const voltarTopo = document.querySelector("#voltar-topo");

if (voltarTopo) {
  voltarTopo.addEventListener("click", (evento) => {
    evento.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
