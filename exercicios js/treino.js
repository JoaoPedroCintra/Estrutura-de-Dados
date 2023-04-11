function contador (n){
    if (n == 10 ) {
        return 10
    }
    return console.log(n),contador(n+1)
}

let sequencia = contador(1)
console.log(sequencia)


function passos(inicio,fim,t_passo) {
    if (inicio >= 40) {
        return 0
    }
   console.log(inicio)
    return 1 + passos(inicio + t_passo,fim,t_passo)
}
let result = passos(0,40,1)
console.log(result)