// isso se chama 
// function expression ou 
// function anonymous 
// pois a função não tem nome e sim está atribuída numa constante
const sum = function(number1, number2){ 
    // parâmetros (parameters)
    total=(number1+number2) // não devemos criar variáveis assim sem escopo
    return total
    
}

let number1=34
let number2=6

console.log(`o número 1 é ${number1} `)
console.log(`o número 2 é ${number2} `)
console.log(`a soma é ${sum(number1,number2)} `)