let vetor = [5, 4, 3, 2, 1]
let aux = 0

for (let j = 0; j < vetor.length;j++) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > vetor[i + 1]) {
            aux = vetor[i]
            vetor[i] = vetor[i + 1]
            vetor[i + 1] = aux
        }
    }
}

console.log(vetor)

/*  
aux = 5
vet[i] = 4
vet[j] = 5

*/