function insercaoDireta(vetor) {

    for (let i = 0; i < vetor.length ; i++) {
        let analisado = vetor[i]
        for(let j = i; j >=0 ; j--){
            if (analisado < vetor[j]) {
                let aux = analisado
                analisado = vetor[j]
                vetor[j] = aux
            }
        }
    }
}

vetor = [7, 3, 1, 9, 2]

console.log(vetor)
insercaoDireta(vetor)
console.log(vetor)

console.time(`insercaoDireta...`)
insercaoDireta(vetor)
console.timeEnd(`insercaoDireta...`)