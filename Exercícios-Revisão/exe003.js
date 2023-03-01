function principal() {
    let vetor = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,13,13]
    let cont = 0
    let msg = ""
    let num = 0
    let m = 0

    console.log(vetor)
    for (let i = 0; i < vetor.length; i++) {
        cont = 0

        for(let j= 0; j<vetor.length;j++ ){        
           
            if(vetor[i] == vetor[j]){      
                cont += 1
            }
        }      

        if(m < cont){
            m = cont
            num = vetor[i]
            msg = `O ${num} foi o que mais apareceu -- qtd:${m}`
        }
        
    }
    console.log(msg)
}
