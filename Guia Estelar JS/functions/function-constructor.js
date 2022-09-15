/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword 
*/

function Person(name,age){ // é uma boa prática a primeira letra ser maiúscula numa função construtora 
    
    // esse 'this' referência quem está fora
    this.name=name
    this.age=age
}
const ana = new Person('Ana', 20) // com a palavra 'new' passa a ser uma função construtora

const joao= new Person('João',26)

console.log(ana)
console.log(joao)


/* Basicamente usamos para inserir um novo valor num objeto, mas utilizando a função como um padrão de valores para inserção */