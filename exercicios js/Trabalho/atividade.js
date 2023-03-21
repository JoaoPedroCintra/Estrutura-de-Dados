//Atividade Ordenação - João Pedro Cintra e Heitor Ramos

function bubblesort(vetor) {  
    let aux = 0
    for (let i = 0; i < vetor.length-1;i++) {
        for (let j = 0; j < vetor.length-i-1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                aux = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = aux
            }
        }
    }
       
    return vetor
}


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
        vetor[i] =  vetor[pos]
        vetor[pos] = aux
    }

    return vetor
}


function insercaoDireta(vetor) {

    for (let i = 1; i < vetor.length ; i++) {
        for(let j = 0; j < i ; j++){
            if (vetor[i] < vetor[j]) {
                var aux = vetor[i]
               for (let k = i; k > j; k--) {
                   vetor[k] = vetor[k-1]
               }
                vetor[j] = aux
            }
        }
    }

    return vetor
}



let vetor_ordenado = []
let vetor_invertido = []
let vetor_desordenado = []

for (let i = 0; i < 1000; i++) {
    vetor_ordenado.push(i+1)
  
}    

for(let j = 1000; j > 0; j --){
    vetor_invertido.push(j)
}

for(let k = 0; k < 1000; k++){
    vetor_desordenado.push(Math.floor(Math.random()*1000) )
}


//bubblesort 
let bubble_ordenado = vetor_ordenado.slice() 
let bubble_invertido = vetor_invertido.slice() 
let bubble_desordenado = vetor_desordenado.slice() 


//ordenado
console.log("----------bubblesort----------")
//console.log(bubble_ordenado)
console.log( bubblesort(bubble_ordenado))


console.time("vetor ordenado...")
bubblesort(bubble_ordenado)                                      
console.timeEnd("vetor ordenado...")


//invertido
//console.log(bubble_invertido)
console.log( bubblesort(bubble_invertido)) 

console.time("vetor invertido...")
bubblesort(bubble_invertido)                                    
console.timeEnd("vetor invertido...")


//desordenado
//console.log(bubble_desordenado )
console.log( bubblesort(bubble_desordenado)) 

console.time("vetor desordenado...")
bubblesort(bubble_desordenado)                  
console.timeEnd("vetor desordenado...")

console.log("\n")


//   Seleção Direta
let selecao_ordenado = vetor_ordenado.slice() 
let selecao_invertido = vetor_invertido.slice() 
let selecao_desordenado = vetor_desordenado.slice() 

//ordenado
console.log("----------Seleção Direta----------")
//console.log(selecao_ordenado)
console.log( selecaoDireta(selecao_ordenado))


console.time("vetor ordenado...")
selecaoDireta(selecao_ordenado)                                      
console.timeEnd("vetor ordenado...")


//invertido
//console.log(selecao_invertido)
console.log( selecaoDireta(selecao_invertido)) 

console.time("vetor invertido...")
selecaoDireta(selecao_invertido)                                    
console.timeEnd("vetor invertido...")


//desordenado
//console.log(selecao_desordenado )
console.log( selecaoDireta(selecao_desordenado)) 

console.time("vetor desordenado...")
selecaoDireta(selecao_desordenado)                  
console.timeEnd("vetor desordenado...")

console.log("\n")


// Inserção Direta
let insercao_ordenado = vetor_ordenado.slice() 
let insercao_invertido = vetor_invertido.slice() 
let insercao_desordenado = vetor_desordenado.slice() 


//ordenado
console.log("----------Inserção Direta---------- ")
//console.log(insercao_ordenado)
console.log( insercaoDireta(insercao_ordenado))


console.time("vetor ordenado...")
insercaoDireta(insercao_ordenado)                                      
console.timeEnd("vetor ordenado...")


//invertido
//console.log(insercao_invertido)
console.log( insercaoDireta(insercao_invertido)) 

console.time("vetor invertido...")
insercaoDireta(insercao_invertido)                                    
console.timeEnd("vetor invertido...")


//desordenado
//console.log(insercao_desordenado )
console.log( insercaoDireta(insercao_desordenado)) 

console.time("vetor desordenado...")
insercaoDireta(insercao_desordenado)                  
console.timeEnd("vetor desordenado...")

console.log("\n")