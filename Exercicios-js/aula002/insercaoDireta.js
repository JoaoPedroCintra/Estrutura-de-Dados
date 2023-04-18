function insercaoDireta(vetor) {

    for (let i = 1; i < vetor.length ; i++) {
        let analisado = vetor[i]

        for(let j = i; j >=0 ; j--){
            if (analisado < vetor[j-1]) {
                let aux = analisado
                analisado = vetor[j-1]
                vetor[j-1] = aux
            }

        }
    }
}
   

vetor = [7, 3, 1, 9, 2]

console.log(vetor)
insercaoDireta(vetor)
console.log(vetor)

console.time()
insercaoDireta(vetor)
console.timeEnd()