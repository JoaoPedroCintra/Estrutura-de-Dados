//14/03/2023
//Busca Sequencial e Binária

function ordenacao(vetor) {

    for (let i = 1; i < vetor.length; i++) {
        for (let j = 0; j < i; j++) {
            if (vetor[i] < vetor[j]) {
                var aux = vetor[i]
                for (let k = i; k > j; k--) {
                    vetor[k] = vetor[k - 1]
                }
                vetor[j] = aux
            }
        }
    }
    return vetor
}

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

function Busca_binária(vetor, num) {
    let metade = Math.floor(vetor.lenght / 2)
    let resposta

    if (vetor[metade] > num) {
        for (let i = 0; i < metade; i++) {
            if (num == vetor[i]) {
                resposta = -1
                return resposta
            }
            else {
                resposta = "n existe"
            }
        }
        return resposta
    }


    else if (vetor[metade] < num) {

    }


    else if (vetor[metade] == 0) {

    } 

}



let vetor = [7, 3, 9, 6, 1, 4, 10, 2]
console.log(vetor)
ordenacao(vetor)
console.log(vetor)
result = Busca_binária(vetor, 6)
console.log(result)
