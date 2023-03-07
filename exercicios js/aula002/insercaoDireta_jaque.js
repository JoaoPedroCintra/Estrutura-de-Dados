function insercaoDireta(vetor) {

    for (let i = 1; i < vetor.length ; i++) {
        for(let j = 0; j < i ; j++){
            if (vetor[i] < vetor[j]) {
                var aux = vetor[i]
               for (let k = i; k > j; k--) {
                   vetor[k] = vetor [k-1]
               }
            }
            vetor[j] = aux
        }
    }
}
   

vetor = [7, 3, 1, 9, 2]

console.log(vetor)
insercaoDireta(vetor)
console.log(vetor)

console.time('insercaoDireta...')
insercaoDireta(vetor)
console.timeEnd('insercaoDireta...')