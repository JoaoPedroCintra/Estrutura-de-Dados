function principal() {
    let vet1 = []
    let vet2 = []
    let vet3 = []

    for (let i = 0; i < 5; i++) {
       vet1.push(prompt(`Digite o valor ${i+1} do vetor1: `))        
    }
    console.log(`vetor1: ${vet1}`)
    for (let i = 0; i < 5; i++) {
       vet2.push(prompt(`Digite o valor ${i+1} do vetor2: `))      
    }
    console.log(`vetor2: ${vet2}`)
    for (let i = 0; i < 5; i++) {
            vet3.push(vet1[i], vet2[i])
    }

    console.log(`vet3: ${vet3}`)
}