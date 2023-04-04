function bubblesortjaque(vetor) {
    let aux = 0
    for (let j = 0; j < vetor.length-1;j++) {
        for (let i = 0; i < vetor.length-j-1; i++) {
            if (vetor[i] > vetor[i + 1]) {
                aux = vetor[i]
                vetor[i] = vetor[i + 1]
                vetor[i + 1] = aux
            }
        }
    }

}

let vetor = [5, 4, 3, 2, 1]
bubblesortjaque(vetor)
console.log(vetor)

console.time("bubblesort...")
bubblesortjaque(vetor)                                              
console.timeEnd("bubblesort...")



