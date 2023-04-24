//Fazer uma função que verifique se uma dada expressão aritmética possui ou não parênteses, colchetes e chaves corretamente utilizados, tanto número quanto posição
//usando pilha
var pilha = []
var vetor = []
let indice = 0
let expressao = "{(1+2)5} - [6+7]"
vetor = expressao.split("")

console.log(vetor)

for (var i = 0; i < vetor.length; i++) {
    
    if (vetor[i] == "{" || vetor[i] == "(" || vetor[i] == "[") {
        pilha.push(vetor[i])
    }
    else if (vetor[i] == "}" || vetor[i] == ")" || vetor[i] == "]") {
        pilha.push(vetor[i])

        indice = pilha.length - 1

        if (pilha[indice] == "}" && pilha[indice - 1] == "{") {
            pilha.splice((indice - 1), 2)
        }
        else if (pilha[indice] == "]" && pilha[indice - 1] == "[") {
            pilha.splice((indice - 1), 2)
        }
        else if (pilha[indice] == ")" && pilha[indice - 1] == "(") {
            pilha.splice((indice - 1), 2)
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