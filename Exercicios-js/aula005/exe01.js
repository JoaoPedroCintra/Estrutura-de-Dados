//28/03/2023
//Torre de Hanoi 

function hanoi (n,origem,destino,aux){
    if (n == 1) {
        console.log("Mova o disco do pino "+ origem + " para o pino "+ destino)
    }
    else{
        hanoi(n-1,origem,aux,destino)
        console.log("Mova o disco do pino " + origem + " para o pino " + destino)
        hanoi(n-1,aux,destino,origem)
    }
}

hanoi(3,"A","B","C")




/*  hanoi(2,"A","C","B") {
            hanoi(1,A,B,C){
                console.log("Mova o disco do pino "+ A + " para o pino "+ B)
            }
        console.log("Mova o disco do pino " + A + " para o pino " + C)
            hanoi(1,B,C,A){
                console.log("Mova o disco do pino "+ B + " para o pino "+ C)
            }

    }

    console.log("Mova o disco do pino " + A + " para o pino " + B)

    hanoi(2,"C","B","A") {
            hanoi(1,C,B,A){
                console.log("Mova o disco do pino "+ C + " para o pino "+ B)
            }
        console.log("Mova o disco do pino " + C + " para o pino " + B)
            hanoi(1,A,B,C){
                console.log("Mova o disco do pino "+ A + " para o pino "+ B)
            }
    }

*/