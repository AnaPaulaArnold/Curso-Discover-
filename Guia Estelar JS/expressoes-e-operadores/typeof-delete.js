/*
    Operadores Unários
    typeof
    delete
*/

console.log(typeof "Ana") // retorna o tipo do que vem a seguir 

const person= {
    name : 'Ana',
    age : 20,
}

delete person.age // vai deletar essa propriedade dentro do objeto, se ela existir

console.log(person)