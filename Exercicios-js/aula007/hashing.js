function inserir_tabela(hash,alfabeto,letra){
    let indice = alfabeto.indexOf(letra) + 1
    let pos = indice % 13

    if(hash[pos] == undefined){
        hash[pos] = letra
    }
    else {
        while (hash[pos] != undefined) {
            pos++
        }
        hash[pos] = letra
    }

    console.log(hash)
}


let hash = []
let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
inserir_tabela(hash,alfabeto,"N")
inserir_tabela(hash,alfabeto,"I")
inserir_tabela(hash,alfabeto,"V")
inserir_tabela(hash,alfabeto,"O")
inserir_tabela(hash,alfabeto,"Z")
inserir_tabela(hash,alfabeto,"U")
inserir_tabela(hash,alfabeto,"A")
inserir_tabela(hash,alfabeto,"E")
inserir_tabela(hash,alfabeto,"F")
inserir_tabela(hash,alfabeto,"R")
inserir_tabela(hash,alfabeto,"B")
inserir_tabela(hash,alfabeto,"L")




/*  Segundo Jeito
function inserir_tabela(palavras,alfabeto,hash){
    let indice = 0
    let pos = 0
    for (let i = 0; i < alfabeto.length; i++) {
        indice = alfabeto.indexOf(palavras[i]) + 1
        pos = indice % 13
    
        if(hash[pos] == undefined){
            hash[pos] = palavras[i]
        }
        else {
            while (hash[pos] != undefined) {
                pos++
            }
            hash[pos] = palavras[i]
        }
        console.log(hash)
    }
 
}

let hash = []
let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let palavras = "NIVOZUAEFRBL"
alfabeto = alfabeto.split("")
palavras = palavras.split("")
inserir_tabela(palavras,alfabeto,hash)*/