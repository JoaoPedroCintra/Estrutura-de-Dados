function principal(){
    let vetor = [1,2,2,3,4,5,5,6,7,7,7,8,9,10,-6]
    let opcao = ""

    console.log(vetor);

    do{
        opcao = prompt(`Digite 1 para saber a quantidade de números negativos;
        \nDigite 2 para calcular a média dos números pares;
        \nDigite 3 para calcular a soma dos números múltiplos de 3 e de 5;
        \nDigite 4 para listar todos os números ímpares;
        \nDigite 5 para Mostrar o menos elemento;
        \nDigite 6 para Mostrar a posição do maior elemento;
        \nDigite 7 para Verificar se o vetor possui números repetidos;
        \nDigite 8 para Remover todos os números repetidos;
        \nDigite 0 para finalizar.`)

        if (opcao == '1'){
            negativos(vetor);
        }
        else if (opcao == '2'){
            media_pares(vetor)
        }
        else if (opcao == '3'){
            multiplos(vetor)
        }
        else if (opcao == '4'){
            impares(vetor)
        }
        else if (opcao == '5'){
            menor_elemento(vetor)
        }
        else if (opcao == '6'){
            posicao_maior(vetor)
        }
        else if (opcao == '7'){
            repetidos(vetor)
        }
        else if (opcao == '8'){
            sem_repetidos(vetor)
        }
        else{
            
        }

    }while (opcao != 0);

}

function negativos(vetor){

    let contador = 0;

    vetor.forEach(element => {
        if(element < 0){
            contador++
        }
    });
    console.log(contador)

}

function media_pares(vetor) {
    let media
    let soma_pares = 0
    let cont = 0

    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i]%2 == 0){
            soma_pares+= vetor[i]
            cont++
        }
    }

    if(cont!= 0){
        media = soma_pares/cont
        console.log(`Média: ${media}`)
    }
    else{
        console.log(`Não há pares!`)
    }
   
}

function multiplos(vetor) {
    let multiplos3 = 0
    let multiplos5 = 0
    let soma = 0

    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i]%3 == 0){
           multiplos3 += vetor[i]
        }
        else if(vetor[i]%5 == 0){
            multiplos5 += vetor[i]
        }
    }

    soma = multiplos3 + multiplos5
    console.log(`A soma dos múltiplos de 3 e 5 é = ${soma}`)
   
}

function impares(vetor) {
    let impares = []

    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i]%2 != 0){
          impares.push(vetor[i])
        }
    }

    console.log(impares)

}

function  menor_elemento(vetor){
    let menor = vetor[0]

    for (let i = 0; i < vetor.length; i++) {

       if(menor > vetor[i]){
         menor = vetor[i]
       }
    }
    console.log(`Menor elemento: ${menor}`)
}

function posicao_maior(vetor) {
    let posicao = 0
    let maior = vetor[0]

    for (let i = 0; i < vetor.length; i++) {

        if(maior < vetor[i]){
          maior = vetor[i]
          posicao = i
        }
     }
     console.log(`Maior: ${maior}\nPosição: ${posicao}`)
}


function repetidos(vetor) {
    let vetor2 =[]
    let msg = ""
    for (let i = 0; i < vetor.length; i++) {    
         vetor2.push(vetor[i])

    }

    vetor.forEach((valor,index)=> {
       
        for (let i = 0; i < vetor2.length; i++) {
            if (valor == vetor2[i] && index != i) {    
                msg = "Há numeros repetidos"
            }else{
                msg= "Não há repetidos"
            }
       }
        
    });
    console.log(msg)
}


function sem_repetidos(vetor) {
    let n_repetido = []

 
   vetor.forEach((valor,index) => {
       for (let i = 0; i < vetor.length; i++) {
        if (valor == vetor[i]) {
            if (index != i) {
                vetor.splice(i,1)
            }
        }
        
       }
   });

   console.log(vetor)

}