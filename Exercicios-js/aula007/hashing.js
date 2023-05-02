function inserir_tabela(hash,letra){
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
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

inserir_tabela(hash,"N")
inserir_tabela(hash,"I")
inserir_tabela(hash,"V")
inserir_tabela(hash,"O")
inserir_tabela(hash,"Z")
inserir_tabela(hash,"U")
inserir_tabela(hash,"A")
inserir_tabela(hash,"E")
inserir_tabela(hash,"F")
inserir_tabela(hash,"R")
inserir_tabela(hash,"B")
inserir_tabela(hash,"L")



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