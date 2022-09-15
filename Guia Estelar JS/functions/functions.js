// Manipulando Arrays

let techs=['html','css','js']

// adicionar um item no fim
techs.push("nodejs") // o método push já sabe qual é o ultimo elemnto do array e adiciona automaticamente
console.log(techs)

// adicionar um item no começo
techs.unshift('SQL') // já sabe o começo do array e adicionar um novo elmento no início dele 
console.log(techs)

// remover item do fim
techs.pop() // ñ precisa de argumentos, ele já vai remover automaticamente o último elemento do array
console.log(techs)

// remover item do começo
techs.shift() // remove automaticamente do início, ñ precisa de argumentos 
console.log(techs)

// pegar somente alguns elementos do array
console.log(techs.slice(0,2)) // slice() tu consegue delimitar como percorrer num array 

// remover 1 ou mais itens em qualquer posição do array
techs.splice(1,2)// no primeiro argumento tu diz qual o índice que tu quer tirar e no segundo quantos a partir dele tu vai tirar
console.log(techs)

// encontrar a posição de um elemento no array
techs=['html','css','js']
let index=techs.indexOf('js') // indexOf encontra a posição no array do que você passou de argumento para ele procurar 
console.log(index)
