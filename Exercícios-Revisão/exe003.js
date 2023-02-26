function principal() {
    let vetor = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,13,13]
    let repeated = 0
    let msg = ""
    let num = 0
    let m = 0

    console.log(vetor)
    for (let i = 0; i < vetor.length; i++) {
        repeated = 0

        for(let j= 0; j<vetor.length;j++ ){        
           
            if(vetor[i] == vetor[j]){      
                repeated += 1
            }
        }

        if(m < repeated){
            m = repeated
            num = vetor[i]
            msg = `O ${num} foi o que mais apareceu -- qtd:${m}`
        }

    }
    console.log(msg)
}
