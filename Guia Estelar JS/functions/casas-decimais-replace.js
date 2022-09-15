// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number=155882.555878445

console.log(number.toFixed(2)) // trás somente 2 casas decimais após a vírgula 

let number2=number.toFixed(2)

console.log(number2.replace('.',',')) // fez a troca de ponto para vírgula 


// Podemos fazer tudo junto numa mesma linha atrelando vários métodos também:
console.log(number.toFixed(2).replace('.',','))