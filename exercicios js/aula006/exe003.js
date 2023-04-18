//Fazer uma função que verifique se uma dada expressão aritmética possui ou não parênteses, colchetes e chaves corretamente utilizados, tanto número quanto posição
//usando pilha
var pilha = []
var vetor = []
let cont = 0

expressao = "{(1+2)5}[6+7]"
vetor = expressao.split("")

console.log(vetor)

for (var i = 0; i < vetor.length; i++) {

    if (vetor[i] == "{" || vetor[i] == "(" || vetor[i] == "[") {
        pilha.push(vetor[i])
        console.log(pilha)
        cont++
    }

    if (vetor[i] == "}" && pilha[cont - 1] == "{") {
        pilha.pop()
    }
    else if (vetor[i] == "]" && pilha[cont - 1] == "[") {
        pilha.pop()

    }
    else if (vetor[i] == ")" && pilha[cont - 1] == "(") {
        pilha.pop()
    }

}

console.log(pilha)