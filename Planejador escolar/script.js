let pegos = [];


let totaldepegos = 0;
let usosconcluidos = 0;




function adicionaropego() {
    const nome = document.getElementById("qual é o usado").value.trim();
    const uso = document.getElementById("tipo de uso").value.trim();
    const quantidade = document.getElementById("quantidade de uso").value;
    const mensagem = document.getElementById("mensagem");


    if (nome === "" || uso === "" || quantidade === "") {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
        return;
    }


    const duplicado = pegos.some(function (pego) {
        return pego.nome.toLowerCase() === nome.toLowerCase();
    });


    if (duplicado) {
        mensagem.textContent = "Esse pego já foi adicionado!";
        mensagem.style.color = "red";
        return;
    }


    const novoPego = {
        nome: nome,
        uso: uso,
        quantidade: quantidade,
        concluida: false
    };


    pegos.push(novoPego);
    totaldepegos++;


    mensagem.textContent = "Pego adicionado com sucesso!";
    mensagem.style.color = "green";


    atualizarContadores();
    exibirpegos();
    limparcampo();
}




function exibirpegos() {
    const lista = document.getElementById("listapegos");


    lista.innerHTML = "";


    pegos.forEach(function (pego, indice) {


        const card = document.createElement("div");


        card.className = "card-pego";


        const titulo = document.createElement("h3");
        titulo.textContent = pego.nome;


        const tipo = document.createElement("p");
        tipo.textContent = "Tipo de uso: " + pego.uso;


        const quantidade = document.createElement("p");
        quantidade.textContent = "Quantidade: " + pego.quantidade;


        const status = document.createElement("p");


        if (pego.concluida) {
            status.textContent = "Status: concluído";
            status.style.color = "green";
        } else {
            status.textContent = "Status: pendente";
            status.style.color = "orange";
        }


        const botaoConcluir = document.createElement("button");


        if (pego.concluida) {
            botaoConcluir.textContent = "Já concluído";
            botaoConcluir.disabled = true;
        } else {
            botaoConcluir.textContent = "Marcar como usado";


            botaoConcluir.onclick = function () {
                concluirUso(indice);
            };
        }


        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";


        botaoRemover.onclick = function () {
            removerPego(indice);
        };
        card.appendChild(titulo);
        card.appendChild(tipo);
        card.appendChild(quantidade);
        card.appendChild(status);
        card.appendChild(botaoConcluir);
        card.appendChild(botaoRemover);


        lista.appendChild(card);
    });
}




function concluirUso(indice) {


    if (pegos[indice].concluida === true) {
        return;
    }


    pegos[indice].concluida = true;
    usosconcluidos++;


    atualizarContadores();
    exibirpegos();
}




function removerPego(indice) {


    if (pegos[indice].concluida === true) {
        usosconcluidos--;
    }


    pegos.splice(indice, 1);
    totaldepegos--;


    atualizarContadores();
    exibirpegos();
}




function atualizarContadores() {


    document.getElementById("contador").textContent =
        "Pegos cadastrados: " + totaldepegos;


    document.getElementById("contadorConcuidas").textContent =
        "Pegos usados com sucesso: " + usosconcluidos;
}




function limparcampo() {


    document.getElementById("qual é o usado").value = "";
    document.getElementById("tipo de uso").value = "";
    document.getElementById("quantidade de uso").value = "";
}




function saidaquiusado() {


    const mensagem = document.getElementById("mensagem");


    if (pegos.length === 0) {
        mensagem.textContent = "Não existe nenhum pego para remover!";
        mensagem.style.color = "red";
        return;
    }


    const removido = pegos.pop();


    if (removido.concluida === true) {
        usosconcluidos--;
    }


    totaldepegos--;


    mensagem.textContent = "Último pego removido!";
    mensagem.style.color = "green";


    atualizarContadores();
    exibirpegos();
}




function alterarmodo() {


    document.body.classList.toggle("modo-aniquilacao");


    const botao = document.querySelector(
        'button[onclick="alterarmodo()"]'
    );


    if (document.body.classList.contains("modo-aniquilacao")) {
        botao.textContent = "modo normal";
    } else {
        botao.textContent = "modo aniquilação";
    }
}




atualizarContadores();
exibirpegos();



