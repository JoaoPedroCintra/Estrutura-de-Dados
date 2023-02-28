let vetor = [ 7,3,1,9,2];
let menor = 0
let posicao

    for (let i = 0; i < vetor.length; i++) {
        menor = vetor[i]
        for (let j = 0; j < vetor.length; j++) {
            if(menor > vetor[j]){
                menor = vetor[j]
                posicao = j
            }
        }                                                   //ta errado
        vetor[posicao] = vetor[i]
        vetor[i] = menor

    }

console.log(vetor)



//email jaque: profa.jaqueline@gmail.com