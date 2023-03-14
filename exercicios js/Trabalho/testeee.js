function bubblesort(vetor) {  
    let testes =[]
    for (let i = 0; i < 1000; i++) {
        testes.push(vetor[i])
    }  
   
    let aux = 0
    for (let i = 0; i < testes.length-1;i++) {
        for (let j = 0; j < testes.length-i-1; j++) {
            if (testes[j] > testes[j + 1]) {
                aux = testes[j]
                testes[j] = testes[j + 1]
                testes[j + 1] = aux
            }
        }
    }
       
    return testes
}


function selecaoDireta(vetor){

    let testes =[]
    for (let i = 0; i < 1000; i++) {
        testes.push(vetor[i])
    }  
    
    for(var i = 0; i < testes.length; i++){
        var menor = testes[i]
        var pos = i

        for(var j = i + 1; j < testes.length; j++){
            if(testes[j] < menor){
                aux = testes[j]
                menor = testes[j]
                pos = j
            }
        }
        var aux = testes[i]
        testes[i] = testes[pos]
        testes[pos] = aux
    }

    return testes
}


function insercaoDireta(vetor) {

    let testes =[]
    for (let i = 0; i < 1000; i++) {
        testes.push(vetor[i])
    }  

    for (let i = 1; i < testes.length ; i++) {
        for(let j = 0; j < i ; j++){
            if (testes[i] < testes[j]) {
                var aux = testes[i]
               for (let k = i; k > j; k--) {
                   testes[k] = testes[k-1]
               }
                testes[j] = aux
            }
        }
    }

    return testes
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


//teste1 bubblesort
console.log("bubblesort ")
//console.log(vetor_ordenado)
console.log( bubblesort(vetor_ordenado))

console.time("vetor ordenado:...")
bubblesort(vetor_ordenado)                                      
console.timeEnd("vetor ordenado:...")


//teste2 bubblesort
//console.log(vetor_desordenado)
console.log( bubblesort(vetor_desordenado)) 

console.time("vetor desordenado:...")
bubblesort(vetor_desordenado)                                    
console.timeEnd("vetor desordenado:...")


//teste3 bubblesort
//console.log(vetor_invertido )
console.log( bubblesort(vetor_invertido)) 

console.time("vetor invertido:...")
bubblesort(vetor_invertido)                  
console.timeEnd("vetor invertido:...")

console.log("\n")




//teste1 Seleçao Direta
console.log("seleçao direta")
//console.log(vetor_ordenado)
console.log( selecaoDireta(vetor_ordenado))

console.time("vetor ordenado:...")
selecaoDireta(vetor_ordenado)                                      
console.timeEnd("vetor ordenado:...")

 
//teste2 Seleçao Direta
//console.log(vetor_desordenado)
console.log( selecaoDireta(vetor_desordenado)) 

console.time("vetor desordenado:...")
selecaoDireta(vetor_desordenado)                                    
console.timeEnd("vetor desordenado:...")




//teste3 Seleçao Direta
//console.log(vetor_invertido)
console.log( selecaoDireta(vetor_invertido)) 
console.time("vetor invertido:...")
selecaoDireta(vetor_invertido)                  
console.timeEnd("vetor invertido:...")


console.log("\n")


//teste1 Inserção Direta
console.log("Inserção direta")
//console.log(vetor_ordenado)
console.log( insercaoDireta(vetor_ordenado))

console.time("vetor ordenado:...")
insercaoDireta(vetor_ordenado)                                      
console.timeEnd("vetor ordenado:...")


//teste2 Inserção Direta
//console.log(vetor_desordenado)
console.log( insercaoDireta(vetor_desordenado)) 

console.time("vetor desordenado:...")
insercaoDireta(vetor_desordenado)                                    
console.timeEnd("vetor desordenado:...")


//teste3 Inserção Direta
//console.log(vetor_invertido)
console.log( insercaoDireta(vetor_invertido)) 

console.time("vetor invertido:...")
insercaoDireta(vetor_invertido)                  
console.timeEnd("vetor invertido:...")