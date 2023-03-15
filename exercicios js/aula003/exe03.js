//14/03/2023
//Busca Binária      ANTES

/*function ordenacao(vetor) {

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
result = Busca_binária(vetor, )
console.log(result)*/




//14/03/2023
//Busca Binária    DEPOIS

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

function busca_binaria(vetor, num) {

    let metade = 0
    if(vetor.length%2 == 0){
        metade = vetor.lenght/2
    }else{
        metade =  Math.floor(vetor.lenght / 2) + 1
    }

    if (vetor[metade] > num) {
        for (let i = 0; i < metade; i++) {
            if (num == vetor[i]) {
                
                return -1
            }
           
        }
        return "n existe"
    }


    else if (vetor[metade] < num) {
        for (let i = vetor.lenght; i > metade ; i--) {
            if (num == vetor[i]) {
                
                return 1
            }
           
        }
        return "n existe"
    }


    else{
       return 0
    } 


}


let vetor = [7, 3, 9, 6, 1, 4, 10, 2]
console.log(vetor)
ordenacao(vetor)
console.log(vetor)
let result = busca_binaria(vetor, 6)
console.log(result)