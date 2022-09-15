// Object

const person={
    name: 'Ana Paula',
    age: 20,
    weight: 68.9,
    isAdmin: true
}


console.log(person.name) // imprime somente o name do objeto

// fazendo interpolação com objetos 
console.log(`O nome é ${person.name} e sua idade é ${person.age} anos, tendo como peso ${person.weight}kg.`)