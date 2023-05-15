// Nomes: Heitor Ramos e João Pedro Cintra     3ºADS_M
// Hashing Linear
function inserir_tabela(vet_hash, chave) {
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let indice = alfabeto.indexOf(chave) + 1
    let pos = indice % 13

    if (vet_hash[pos] == undefined) {
        vet_hash[pos] = chave.toUpperCase()
    }
    else {
        while (vet_hash[pos] != undefined) {
            pos++     
        }
        if(pos == 13){
            pos = 0

            while (vet_hash[pos] != undefined) {
                if(vet_hash[pos] != undefined){
                    pos++
                }
                if(vet_hash[pos] == undefined && pos < 13){
                    vet_hash[pos] = chave.toUpperCase()
                    break
                }
                else if(pos == 13){
                    console.log(`A tabela está cheia! \nNão foi possivel inserir a letra: ${chave}.`)               
                    break
                }
            }
        }else{
            vet_hash[pos] = chave.toUpperCase()
        }
    }
    console.log(vet_hash)
}

function Buscar_chaves(vet_hash, chave) {
    chave = chave.toUpperCase()
    let indx = vet_hash.indexOf(chave)
    console.log(indx)
}

let vet_hash = []
inserir_tabela(vet_hash, "N")
inserir_tabela(vet_hash, "I")
inserir_tabela(vet_hash, "V")
inserir_tabela(vet_hash, "O")
inserir_tabela(vet_hash, "Z")
inserir_tabela(vet_hash, "U")
inserir_tabela(vet_hash, "A")
inserir_tabela(vet_hash, "E")
inserir_tabela(vet_hash, "F")
inserir_tabela(vet_hash, "R")
inserir_tabela(vet_hash, "L") 
inserir_tabela(vet_hash, "K") // k % 13 = 11 ocupa pos[11] e a única que sobra é a pos[4]
inserir_tabela(vet_hash, "h") // h % 13 = 8, percorre o vetor até o fim, volta para o início e se instala na pos[4]
inserir_tabela(vet_hash, "C") //Neste momento a tabela está cheia, para qualquer elemento inserido terá uma mensagem de erro.
Buscar_chaves(vet_hash, "e") // retorna a posição em que está no vetor


/*
Segundo Jeito - inserindo dados todos de uma vez

function inserir_tabela(palavras,vet_hash){
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    palavras = palavras.toUpperCase() 
    let indice = 0
    let pos = 0
    for (let i = 0; i < alfabeto.length; i++) {
        indice = alfabeto.indexOf(palavras[i]) + 1
        pos = indice % 13
    
        if(vet_hash[pos] == undefined){
            vet_hash[pos] = palavras[i]
        }
        else {
            while (vet_hash[pos] != undefined) {
                pos++
            }
            vet_hash[pos] = palavras[i]
        }
        console.log(vet_hash)
    }
}

let vet_hash = []
let palavras = "NIVOZUAeFrBL"
inserir_tabela(palavras,vet_hash)*/