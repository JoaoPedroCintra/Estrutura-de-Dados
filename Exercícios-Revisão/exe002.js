function principal() {
    let vet = [1,2,3,4,5,6,7,8,9,10]
    let opcao = ""

      console.log(vet)

    do {
        opcao = prompt(`Digite '1' apra inserir um número;
        \nDigite '2' para remover um número;
        \nDigite '3' para somar pares ou impares
        \nDigite '4' para somar os números entre 2 índices 
        \nDigite 0 para sair `)

        if (opcao == '1') {
            inserir(vet)

        } 
        
        else if (opcao == "2"){
           remover(vet)
        }

        else if (opcao == '3'){
            somarImpares_Pares(vet)
        }

        else if (opcao == '4'){
            somar_por_indice(vet)
        }

    } while (opcao != 0);
}


function inserir(vet) {
    let n
    let vetn = []    
    n = Number(prompt(`Digite o número de elementos a serem inseridos`))

    for (let i = 0; i < n; i++) {
        vetn.push(prompt(`Digite o ${i+1} elemento: `))
        vet.push(vetn[i])
    }
    console.log(`Novo vetor: ${vet}`)
}


function remover(vet) {
    let escolha = prompt(`Remover elemento pelo valor (v) ou índice (i)?`)

    if (escolha == 'v'){
        let elemento = Number(prompt(`Digite o valor do elemento`))
        vet.splice(vet.indexOf(elemento),1)
        console.log(vet)
    }

    else if (escolha == 'i'){
        let index = prompt(`Digite o índex do elemento`)
        vet.splice(index,1)
        console.log(vet)
    }
    else{
        alert(`Operação inválida!`)
    }
}


function somarImpares_Pares(vet) {
    let escolha = prompt(`Somar elementos pares(p) ou ímpares (i) do vetor: `)

    if(escolha == 'p'){
        let pares = 0
        for( i = 0 ; i < vet.length ; i++){
            if(vet[i]%2 == 0){
                pares = pares + vet[i]
            }
        }
        console.log(pares)
    }
    else if (escolha == 'i'){
        let impares = 0
        for( i = 0 ; i < vet.length ; i++){
            if(vet[i]%2 != 0){
                impares = impares + vet[i]
            }
        }
        console.log(impares)
    }
    else{
        alert(`Operação inválida!`)
    }
}

function  somar_por_indice(vet) {
    let n1 = Number(prompt(`Digite o índice inicial`))
    let n2 = Number(prompt(`Digite o índice final`))
    let soma = 0

    for(let i = n1; i < (n2+1) ; i++){
        soma += vet[i]
       
    }
    console.log(soma)
}