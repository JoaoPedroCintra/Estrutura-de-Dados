//Fazer uma função que verifique se uma dada expressão aritmética possui ou não parênteses, colchetes e chaves corretamente utilizados, tanto número quanto posição
//usando pilha
var pilha = []

expressao = "{()}[]"
pilha = expressao.split("")

console.log(pilha)
var vetor = []

for (var i=0;i<pilha.length;i++)
{
    if(pilha[i] == "(" || pilha[i] == "[" || pilha[i] == "{" || pilha[i] == ")" || pilha[i] == "]" || pilha[i] == "}")
    {
        vetor.push(pilha[i])
    }
}

console.log(vetor)
var vetor2 = []
i = 0
while(vetor[i] == "(" || vetor[i] == "[" || vetor[i] == "{")
{
    vetor2.push(vetor[i])
    i++
}

vetor2.length * vetor.shift()



console.log(vetor2)
console.log(vetor)