//pega o menor elemento e coloca na primeira posição e assim por diante
function selecaoDireta(vetor){
    
    for(var i = 0; i < vetor.length; i++){
        var menor = vetor[i]
        var pos = i

        for(var j = i + 1; j < vetor.length; j++){
            if(vetor[j] < menor){
                aux = vetor[j]
                menor = vetor[j]
                pos = j
            }
        }
        var aux = vetor[i]
        vetor[i] = vetor[pos]
        vetor[pos] = aux
    }
}
let vetor = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

console.log(vetor)
selecaoDireta(vetor)
console.log(vetor)


console.time(`selecaoDireta...`)
selecaoDireta(vetor)
console.timeEnd(`selecaoDireta...`)
