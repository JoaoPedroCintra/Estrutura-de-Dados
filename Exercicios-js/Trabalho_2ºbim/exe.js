function trabalho_1(expressao) {
    var pilha = []
    let vetor = expressao.split("")
    console.log(vetor)

    for (var i = 0; i < vetor.length; i++) {
        
        if (vetor[i] == "{" || vetor[i] == "(" || vetor[i] == "[") {
            pilha.push(vetor[i])
        }
        else if (vetor[i] == "}" || vetor[i] == ")" || vetor[i] == "]") {
            pilha.push(vetor[i])

           let indice = pilha.length - 1

            if (pilha[indice] == "}" && pilha[indice - 1] == "{") {
             // pilha.splice((indice - 1), 2)
               pilha.pop()
               pilha.pop()
            }
            else if (pilha[indice] == "]" && pilha[indice - 1] == "[") {
               pilha.pop()
               pilha.pop()
            }
            else if (pilha[indice] == ")" && pilha[indice - 1] == "(") {
                pilha.pop()
                pilha.pop()
            }
        }
    }

    if(pilha.length == 0){
        console.log("A Expressão está correta!! \npilha vazia :")
        console.log(pilha)
    }
    else {
        console.log("Erro! A pilha não está vazia:")
        console.log(pilha)
    }
}

let expressao = "{(1+25) - [6+7]}"
trabalho_1(expressao)