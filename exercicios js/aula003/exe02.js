//14/03/2023
//Busca Sequencial meu
function Busca_Sequencial(vetor, num) {
    let posicao = 0
    for (let i = 0; i < vetor.length; i++) {
        if (num == vetor[i]) {
            posicao = i
           return i
        }
        else {
            posicao = -1
        }
    }

    return posicao
}

let vetor = [7, 3, 9, 6, 1, 4, 10, 2]
console.log(vetor)
let result = Busca_Sequencial(vetor, 6)
console.log(result)








//Busca Sequencial Jaqueline
function Busca_Sequencial(vetor, num) {
    for (let i = 0; i < vetor.length; i++) {
        if (num == vetor[i]) {
           return i
        }
    }
    return -1
}

let vetor = [7, 3, 9, 6, 1, 4, 10, 2]
console.log(vetor)
let result = Busca_Sequencial(vetor, 6)
console.log(result)