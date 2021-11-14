function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(colaborador) {
    console.log(colaborador)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdItem = document.createElement("td");
    tdId.innerHTML = colaborador.id
    tdNome.innerHTML = colaborador.name
    tdItem.innerHTML = colaborador.item

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdColaborador);

    return linha;
}

function main() {
    let data = fazGet("https://cafe-app-back.herokuapp.com/colaborado/listar");
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main()