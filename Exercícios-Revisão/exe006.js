function principal() {
    let num = Number(prompt(`Digite quantos números da sequencia de fibonacci devem aparecer: `))
    let n1 = 0
    let n2 = 1
    let result = 0
    let vetor = []

    for(let i = 0 ; i < num; i++){
        n1 = n2
        n2 = result
        result = n1 + n2
        vetor.push(result)
        console.log(`${n1} + ${n2}     result = ${result}`)
    }

    console.log(vetor)
}