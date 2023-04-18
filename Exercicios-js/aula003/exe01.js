//14/03/2023
// Exemplos de Recursividade 


//fibonacci
function fib(num) {
    if (num == 1 || num == 2) {
       return 1
    }
    else {
       return(fib(num-1) +  fib(num-2)) 
    }
}

var fibonacci = fib(8)
console.log(fibonacci)



//Potencia

function potenciacao(num,expoente){
    if(expoente == 0){
        return 1
    }
    return (num * potenciacao(num,expoente-1))
}

var result = potenciacao(2,4)
console.log(result)
