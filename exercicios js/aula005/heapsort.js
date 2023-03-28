let vetor = [3,7,1,6,4,5,2]



    var i = esquerda
    var j = direita
    var aux
    var pivotidx = (esquerda + direita)/2
    var pivot = parseInt(vetor[pivotidx.toFixed()])
    //partição
    while(i <= j){
        while(parseInt(vetor[i]) < pivot)
            i++
        while(parseInt(vetor[j]) > pivot)
            j--
        if( i <= j){
            aux = vetor[i]
            vetor[i] = vetor[j]
            vetor[j] = aux
            i++
            j--
        }
    }   

    //Recursão
    if(esquerda < j )
        quicksort(vetor,esquerda,j)
    if ( i < direita )
        quicksort(vetor,i,direita)
    return vetor
