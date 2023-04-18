/*
-------------------------------------------Fila-------------------------------------------

É uma lista linear na qual as remoções são feitas no início e todas as inserções no fim
Implementação estática - FIFO (First in First out)

Operações básicas:
    Inserir -> append ou insert
    Remover -> serve ou delete

Outras operações:
    Limpar -> clear
    Tamanho -> size
    Começo -> front
    Final -> rear


    function clear() {
    while(!empty()){
        server()
    }
}

*/


var fila = []
var x

//x = parseInt(prompt("Digite um número"))
x = 7
fila.push(x)
fila.push(1)
fila.push(2)

//alert("Fila: " + fila)
console.log("Fila: " + fila) 

x = fila.shift()      // shift é o remover do js
console.log("elemento: " + x)
console.log("fila: " + fila)