//14/03/2023
// Introdução sobre Recursividade

function fatorial(num) {
   if (num == 0){
        return 1;
    }
    else{
        return (num * fatorial(num-1));
    }
}

var result = fatorial(4)
console.log(result)