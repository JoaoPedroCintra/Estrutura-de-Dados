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

function quicksort(vetor,esquerda,direita) {
    var i = esquerda
    var j = direita
    var aux
    var pivotidx = (esquerda + direita)/2
    var pivot = parseInt(vetor[pivotidx.toFixed()])
    //partição
    while(i <= j){
        while(parseInt(vetor[i]) < pivot)
            i++
        while(parseInt(vetor[j]) > pivot)
            j--
        if( i <= j){
            aux = vetor[i]
            vetor[i] = vetor[j]
            vetor[j] = aux
            i++
            j--
        }
    }   

    //Recursão
    if(esquerda < j )
        quicksort(vetor,esquerda,j)
    if ( i < direita )
        quicksort(vetor,i,direita)
    return vetor

}   

// -----------------------------------------vetor com 100 elementos-----------------------------------------
let vetor_ordenado100 = []
let vetor_invertido100 = []
let vetor_desordenado100 = []

for (let i = 0; i < 100; i++) {
    vetor_ordenado100.push(i+1)
}    

for(let j = 100; j > 0; j --){
    vetor_invertido100.push(j)
}

for(let k = 0; k < 100; k++){
    vetor_desordenado100.push(Math.floor(Math.random()*100) )
}

// -----------------------------------------vetor com 1.000 elementos-----------------------------------------
let vetor_ordenado1000 = []
let vetor_invertido1000 = []
let vetor_desordenado1000 = []

for (let i = 0; i < 1000; i++) {
    vetor_ordenado1000.push(i+1)
}    

for(let j = 1000; j > 0; j --){
    vetor_invertido1000.push(j)
}

for(let k = 0; k < 1000; k++){
    vetor_desordenado1000.push(Math.floor(Math.random()*1000) )
}

// -----------------------------------------vetor com 10.000 elementos-----------------------------------------
let vetor_ordenado10000 = []
let vetor_invertido10000 = []
let vetor_desordenado10000 = []

for (let i = 0; i < 10000; i++) {
    vetor_ordenado10000.push(i+1)
}    

for(let j = 10000; j > 0; j --){
    vetor_invertido10000.push(j)
}

for(let k = 0; k < 10000; k++){
    vetor_desordenado10000.push(Math.floor(Math.random()*10000) )
}

// -----------------------------------------vetor com 100.000 elementos-----------------------------------------
let vetor_ordenado100000 = []
let vetor_invertido100000 = []
let vetor_desordenado100000 = []

for (let i = 0; i < 100000; i++) {
    vetor_ordenado100000.push(i+1)
}    

for(let j = 100000; j > 0; j --){
    vetor_invertido100000.push(j)
}

for(let k = 0; k < 100000; k++){
    vetor_desordenado100000.push(Math.floor(Math.random()*100000) )
}

//-----------------------------------------bubblesort100-----------------------------------------

let bubble_ordenado100 = vetor_ordenado100.slice() 
let bubble_invertido100 = vetor_invertido100.slice() 
let bubble_desordenado100 = vetor_desordenado100.slice() 

//ordenado
console.log("----------bubblesort100----------")
console.log( bubblesort(bubble_ordenado100))

console.time("vetor ordenado...")
bubblesort(bubble_ordenado100)                                      
console.timeEnd("vetor ordenado...")

//invertido
console.log( bubblesort(bubble_invertido100)) 

console.time("vetor invertido...")
bubblesort(bubble_invertido100)                                    
console.timeEnd("vetor invertido...")

//desordenado
console.log( bubblesort(bubble_desordenado100)) 

console.time("vetor desordenado...")
bubblesort(bubble_desordenado100)                  
console.timeEnd("vetor desordenado...")
console.log("\n")


// -----------------------------------------Seleção Direta100-----------------------------------------

let selecao_ordenado100 = vetor_ordenado100.slice() 
let selecao_invertido100 = vetor_invertido100.slice() 
let selecao_desordenado100 = vetor_desordenado100.slice() 

//ordenado
console.log("----------Seleção Direta100----------")
console.log( selecaoDireta(selecao_ordenado100))

console.time("vetor ordenado...")
selecaoDireta(selecao_ordenado100)                                      
console.timeEnd("vetor ordenado...")

//invertido
console.log( selecaoDireta(selecao_invertido100)) 

console.time("vetor invertido...")
selecaoDireta(selecao_invertido100)                                    
console.timeEnd("vetor invertido...")

//desordenado
console.log( selecaoDireta(selecao_desordenado100)) 

console.time("vetor desordenado...")
selecaoDireta(selecao_desordenado100)                  
console.timeEnd("vetor desordenado...")
console.log("\n")

// -----------------------------------------Inserção Direta100 -----------------------------------------

let insercao_ordenado100 = vetor_ordenado100.slice() 
let insercao_invertido100 = vetor_invertido100.slice() 
let insercao_desordenado100 = vetor_desordenado100.slice() 


//ordenado
console.log("----------Inserção Direta100---------- ")
console.log( insercaoDireta(insercao_ordenado100))

console.time("vetor ordenado...")
insercaoDireta(insercao_ordenado100)                                      
console.timeEnd("vetor ordenado...")

//invertido
console.log( insercaoDireta(insercao_invertido100)) 

console.time("vetor invertido...")
insercaoDireta(insercao_invertido100)                                    
console.timeEnd("vetor invertido...")

//desordenado
console.log( insercaoDireta(insercao_desordenado100)) 

console.time("vetor desordenado...")
insercaoDireta(insercao_desordenado100)                  
console.timeEnd("vetor desordenado...")
console.log("\n")
// -----------------------------------------Quicksort100 -----------------------------------------

let quick_ordenado100 = vetor_ordenado100.slice() 
let quick_invertido100 = vetor_invertido100.slice() 
let quick_desordenado100 = vetor_desordenado100.slice() 


//ordenado
console.log("---------- Quicksort100---------- ")
console.log( quicksort(quick_ordenado100,0,quick_ordenado100.length-1))

console.time("vetor ordenado...")
quicksort(quick_ordenado100,0,quick_ordenado100.length-1)                                     
console.timeEnd("vetor ordenado...")

//invertido
console.log( quicksort(quick_invertido100,0,quick_invertido100.length-1)) 

console.time("vetor invertido...")
quicksort(quick_invertido100,0,quick_invertido100.length-1)                                    
console.timeEnd("vetor invertido...")

//desordenado
console.log( quicksort(quick_desordenado100,0,quick_desordenado100.length-1)) 

console.time("vetor desordenado...")
quicksort(quick_desordenado100,0,quick_desordenado100.length-1)                 
console.timeEnd("vetor desordenado...")
console.log("\n")


//-----------------------------------------bubblesort1.000-----------------------------------------

let bubble_ordenado1000 = vetor_ordenado1000.slice() 
let bubble_invertido1000 = vetor_invertido1000.slice() 
let bubble_desordenado1000 = vetor_desordenado1000.slice() 


//ordenado
console.log("----------bubblesort1.000----------")
console.log( bubblesort(bubble_ordenado1000))

console.time("vetor ordenado...")
bubblesort(bubble_ordenado1000)                                      
console.timeEnd("vetor ordenado...")

//invertido
console.log( bubblesort(bubble_invertido1000)) 

console.time("vetor invertido...")
bubblesort(bubble_invertido1000)                                    
console.timeEnd("vetor invertido...")

//desordenado
console.log( bubblesort(bubble_desordenado1000)) 

console.time("vetor desordenado...")
bubblesort(bubble_desordenado1000)                  
console.timeEnd("vetor desordenado...")
console.log("\n")


//-----------------------------------------Seleção Direta1.000-----------------------------------------
let selecao_ordenado1000 = vetor_ordenado1000.slice() 
let selecao_invertido1000 = vetor_invertido1000.slice() 
let selecao_desordenado1000 = vetor_desordenado1000.slice() 

//ordenado
console.log("----------Seleção Direta1.000----------")
console.log( selecaoDireta(selecao_ordenado1000))

console.time("vetor ordenado...")
selecaoDireta(selecao_ordenado1000)                                      
console.timeEnd("vetor ordenado...")

//invertido
console.log( selecaoDireta(selecao_invertido1000)) 

console.time("vetor invertido...")
selecaoDireta(selecao_invertido1000)                                    
console.timeEnd("vetor invertido...")

//desordenado
console.log( selecaoDireta(selecao_desordenado1000)) 

console.time("vetor desordenado...")
selecaoDireta(selecao_desordenado1000)                  
console.timeEnd("vetor desordenado...")
console.log("\n")


///-----------------------------------------Inserção Direta1.000-----------------------------------------

let insercao_ordenado1000 = vetor_ordenado1000.slice() 
let insercao_invertido1000 = vetor_invertido1000.slice() 
let insercao_desordenado1000 = vetor_desordenado1000.slice() 


//ordenado
console.log("----------Inserção Direta1.000---------- ")
console.log( insercaoDireta(insercao_ordenado1000))

console.time("vetor ordenado...")
insercaoDireta(insercao_ordenado1000)                                      
console.timeEnd("vetor ordenado...")

//invertido
console.log( insercaoDireta(insercao_invertido1000)) 

console.time("vetor invertido...")
insercaoDireta(insercao_invertido1000)                                    
console.timeEnd("vetor invertido...")

//desordenado
console.log( insercaoDireta(insercao_desordenado1000)) 

console.time("vetor desordenado...")
insercaoDireta(insercao_desordenado1000)                  
console.timeEnd("vetor desordenado...")
console.log("\n")

// -----------------------------------------Quicksort1.000 -----------------------------------------

let quick_ordenado1000 = vetor_ordenado1000.slice() 
let quick_invertido1000 = vetor_invertido1000.slice() 
let quick_desordenado1000 = vetor_desordenado1000.slice() 


//ordenado
console.log("---------- Quicksort1.000---------- ")
console.log( quicksort(quick_ordenado1000,0,quick_ordenado1000.length-1))

console.time("vetor ordenado...")
quicksort(quick_ordenado1000,0,quick_ordenado1000.length-1)                                     
console.timeEnd("vetor ordenado...")

//invertido
console.log( quicksort(quick_invertido1000,0,quick_invertido1000.length-1)) 

console.time("vetor invertido...")
quicksort(quick_invertido1000,0,quick_invertido1000.length-1)                                    
console.timeEnd("vetor invertido...")

//desordenado
console.log( quicksort(quick_desordenado1000,0,quick_desordenado1000.length-1)) 

console.time("vetor desordenado...")
quicksort(quick_desordenado1000,0,quick_desordenado1000.length-1)                 
console.timeEnd("vetor desordenado...")
console.log("\n")

// 10.000 elementos 
//-----------------------------------------bubblesort10.000-----------------------------------------
let bubble_ordenado10000 = vetor_ordenado10000.slice() 
let bubble_invertido10000 = vetor_invertido10000.slice() 
let bubble_desordenado10000 = vetor_desordenado10000.slice() 


//ordenado
console.log("----------bubblesort10.000----------")
console.log( bubblesort(bubble_ordenado10000))

console.time("vetor ordenado...")
bubblesort(bubble_ordenado10000)                                      
console.timeEnd("vetor ordenado...")

//invertido
console.log( bubblesort(bubble_invertido10000)) 

console.time("vetor invertido...")
bubblesort(bubble_invertido10000)                                    
console.timeEnd("vetor invertido...")

//desordenado
console.log( bubblesort(bubble_desordenado10000)) 

console.time("vetor desordenado...")
bubblesort(bubble_desordenado10000)                  
console.timeEnd("vetor desordenado...")
console.log("\n")

//-----------------------------------------Seleção Direta10.000-----------------------------------------
let selecao_ordenado10000 = vetor_ordenado10000.slice() 
let selecao_invertido10000 = vetor_invertido10000.slice() 
let selecao_desordenado10000 = vetor_desordenado10000.slice() 

//ordenado
console.log("----------Seleção Direta10.000----------")
console.log( selecaoDireta(selecao_ordenado10000))

console.time("vetor ordenado...")
selecaoDireta(selecao_ordenado10000)                                      
console.timeEnd("vetor ordenado...")

//invertido
console.log( selecaoDireta(selecao_invertido10000)) 

console.time("vetor invertido...")
selecaoDireta(selecao_invertido10000)                                    
console.timeEnd("vetor invertido...")

//desordenado
console.log( selecaoDireta(selecao_desordenado10000)) 

console.time("vetor desordenado...")
selecaoDireta(selecao_desordenado10000)                  
console.timeEnd("vetor desordenado...")
console.log("\n")


///-----------------------------------------Inserção Direta10.000-----------------------------------------
let insercao_ordenado10000 = vetor_ordenado10000.slice() 
let insercao_invertido10000 = vetor_invertido10000.slice() 
let insercao_desordenado10000 = vetor_desordenado10000.slice() 


//ordenado
console.log("----------Inserção Direta10.000---------- ")
console.log( insercaoDireta(insercao_ordenado10000))

console.time("vetor ordenado...")
insercaoDireta(insercao_ordenado10000)                                      
console.timeEnd("vetor ordenado...")

//invertido
console.log( insercaoDireta(insercao_invertido10000)) 

console.time("vetor invertido...")
insercaoDireta(insercao_invertido10000)                                    
console.timeEnd("vetor invertido...")

//desordenado
console.log( insercaoDireta(insercao_desordenado10000)) 

console.time("vetor desordenado...")
insercaoDireta(insercao_desordenado10000)                  
console.timeEnd("vetor desordenado...")
console.log("\n")

// -----------------------------------------Quicksort10.000 -----------------------------------------

let quick_ordenado10000 = vetor_ordenado10000.slice() 
let quick_invertido10000 = vetor_invertido10000.slice() 
let quick_desordenado10000 = vetor_desordenado10000.slice() 


//ordenado
console.log("---------- Quicksort10.000---------- ")
console.log( quicksort(quick_ordenado10000,0,quick_ordenado10000.length-1))

console.time("vetor ordenado...")
quicksort(quick_ordenado10000,0,quick_ordenado10000.length-1)                                     
console.timeEnd("vetor ordenado...")

//invertido
console.log( quicksort(quick_invertido10000,0,quick_invertido10000.length-1)) 

console.time("vetor invertido...")
quicksort(quick_invertido10000,0,quick_invertido10000.length-1)                                    
console.timeEnd("vetor invertido...")

//desordenado
console.log( quicksort(quick_desordenado10000,0,quick_desordenado10000.length-1)) 

console.time("vetor desordenado...")
quicksort(quick_desordenado10000,0,quick_desordenado10000.length-1)                 
console.timeEnd("vetor desordenado...")
console.log("\n")


//-----------------------------------------bubblesort100.000-----------------------------------------
let bubble_ordenado100000 = vetor_ordenado100000.slice() 
let bubble_invertido100000 = vetor_invertido100000.slice() 
let bubble_desordenado100000 = vetor_desordenado100000.slice() 


//ordenado
console.log("----------bubblesort100.000----------")
console.log( bubblesort(bubble_ordenado100000))


console.time("vetor ordenado...")
bubblesort(bubble_ordenado100000)                                      
console.timeEnd("vetor ordenado...")


//invertido
console.log( bubblesort(bubble_invertido100000)) 

console.time("vetor invertido...")
bubblesort(bubble_invertido100000)                                    
console.timeEnd("vetor invertido...")


//desordenado
console.log( bubblesort(bubble_desordenado100000)) 

console.time("vetor desordenado...")
bubblesort(bubble_desordenado100000)                  
console.timeEnd("vetor desordenado...")
console.log("\n")


//-----------------------------------------Seleção Direta100.000-----------------------------------------
let selecao_ordenado100000 = vetor_ordenado100000.slice() 
let selecao_invertido100000 = vetor_invertido100000.slice() 
let selecao_desordenado100000 = vetor_desordenado100000.slice() 

//ordenado
console.log("----------Seleção Direta100.000----------")
console.log( selecaoDireta(selecao_ordenado100000))

console.time("vetor ordenado...")
selecaoDireta(selecao_ordenado100000)                                      
console.timeEnd("vetor ordenado...")


//invertido
console.log( selecaoDireta(selecao_invertido100000)) 

console.time("vetor invertido...")
selecaoDireta(selecao_invertido100000)                                    
console.timeEnd("vetor invertido...")


//desordenado
console.log( selecaoDireta(selecao_desordenado100000)) 

console.time("vetor desordenado...")
selecaoDireta(selecao_desordenado100000)                  
console.timeEnd("vetor desordenado...")
console.log("\n")


///-----------------------------------------Inserção Direta100.000-----------------------------------------
let insercao_ordenado100000 = vetor_ordenado100000.slice() 
let insercao_invertido100000 = vetor_invertido100000.slice() 
let insercao_desordenado100000 = vetor_desordenado100000.slice() 


//ordenado
console.log("----------Inserção Direta100.000---------- ")
console.log( insercaoDireta(insercao_ordenado100000))

console.time("vetor ordenado...")
insercaoDireta(insercao_ordenado100000)                                      
console.timeEnd("vetor ordenado...")


//invertido
console.log( insercaoDireta(insercao_invertido100000)) 

console.time("vetor invertido...")
insercaoDireta(insercao_invertido100000)                                    
console.timeEnd("vetor invertido...")


//desordenado
console.log( insercaoDireta(insercao_desordenado100000)) 

console.time("vetor desordenado...")
insercaoDireta(insercao_desordenado100000)                  
console.timeEnd("vetor desordenado...")
console.log("\n")

// -----------------------------------------Quicksort100.000 -----------------------------------------

let quick_ordenado100000 = vetor_ordenado100000.slice() 
let quick_invertido100000 = vetor_invertido100000.slice() 
let quick_desordenado100000 = vetor_desordenado100000.slice() 


//ordenado
console.log("---------- Quicksort100.000---------- ")
console.log( quicksort(quick_ordenado100000,0,quick_ordenado100000.length-1))

console.time("vetor ordenado...")
quicksort(quick_ordenado100000,0,quick_ordenado100000.length-1)                                     
console.timeEnd("vetor ordenado...")

//invertido
console.log( quicksort(quick_invertido100000,0,quick_invertido100000.length-1)) 

console.time("vetor invertido...")
quicksort(quick_invertido100000,0,quick_invertido100000.length-1)                                    
console.timeEnd("vetor invertido...")

//desordenado
console.log( quicksort(quick_desordenado100000,0,quick_desordenado100000.length-1)) 

console.time("vetor desordenado...")
quicksort(quick_desordenado100000,0,quick_desordenado100000.length-1)                 
console.timeEnd("vetor desordenado...")
console.log("\n")