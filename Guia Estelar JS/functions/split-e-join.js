// Manipulando Strings e Números

// Separe um texto que contêm espaços, em um um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque _

let phrase='Programar é muito legal'

let myArray=phrase.split(' ')//separa a string e converte para um array
console.log(myArray)

let phraseWithUnderscore= myArray.join('_') // o método join() junta o array novamente e tem como informar o que substituir no lugar na hora da junção 
console.log(phraseWithUnderscore)