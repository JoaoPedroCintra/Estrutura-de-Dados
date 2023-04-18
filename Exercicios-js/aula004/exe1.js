//21/03/23
//Busca Binária Recursiva

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

function busca_binaria(vetor, inicio, fim, valorBusca) {     // retorna a posição
    var meio;
    if (inicio > fim) {
        return -1
    }
    else {
        meio = Math.floor((inicio + fim) / 2)

        if (vetor[meio] == valorBusca) {
            return meio
        }
        else if (valorBusca < vetor[meio]) {
            return busca_binaria(vetor, inicio, meio - 1, valorBusca)
        }
        else {
            return busca_binaria(vetor, meio + 1, fim, valorBusca)
        }
    }
}


let vetor = [7, 3, 9, 6, 1, 4, 10, 2]
ordenacao(vetor)
let result = busca_binaria(vetor, 0, vetor.length, 1)
console.log("vetor = " + vetor)
console.log(result)