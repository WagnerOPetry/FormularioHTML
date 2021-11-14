function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function () {
        console.log(this.responseText)
    }

    return request.responseText
}


function cadastrarColaborador() {
    event.preventDefault();
    let url = "https://cafe-app-back.herokuapp.com/colaborado/listar"
    let nome = document.getElementById("nome").value
    let cpf = document.getElementById("cpf").value
    let item = document.getElementById("item").value
    console.log(nome);
    console.log(cpf);
    console.log(item);

    body = {
        "name": nome,
        "cpf": cpf,
        "item": item
    }

    fazPost(url, body);
}