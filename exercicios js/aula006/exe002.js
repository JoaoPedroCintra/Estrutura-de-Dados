/*
-------------------------------------------Pilha-------------------------------------------

é usada para avaliação de expressões aritméticas,chamada e retorno de procedimentos e funções e busca exaustiva

todas inserções e remoções são feitas na mesma extremidade, chamada topo

o ultimo ítem inserido é o primeiro a ser removido (Last in first out - LIFO)

push() insere
pop() remove


func clear(){
    while (!empty){
    pop()
    }
}

func top(){
    if(!empty){
    x = pop()
    push(x)
    }
}

*/

var pilha = []
var x

x = 5
pilha.push(x)
pilha.push(1)
pilha.push(2)


console.log("Pilha: " + pilha)

x = pilha.pop()
console.log("Elemento: " + x)
console.log("Pilha: " + pilha)
