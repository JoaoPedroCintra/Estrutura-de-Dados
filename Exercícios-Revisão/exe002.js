function principal() {
    let vet = []
    let opcao = ""


    opcao = prompt(`Digite 'i' apra inserir um número;\nDigite 'r' para remover um número;\nDigite 's' para somar os números `)

    if (opcao == 'i') {
        let n
         n = Number(prompt(`Digite o número de elementos a serem inseridos`))
        let vetn = []

        for (let i = 0; i < n; i++) {
            vetn.push(prompt(`Digite o ${i+1} elemento: `))
            vet.push(vetn[i])
        }
    console.log(`Novo vetor: ${vet}`)

    } else if (opcao == "r"){
        
    }
}