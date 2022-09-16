/* 
    new 

    * left-hand-side expression
    * criar um novo objeto
*/

let name = new String('Ana') // O new vai criar um objeto com funçaõ construtora 
name.surName = "Arnold"
let age = new Number(20)
let data = new Date('2022-09-08')

console.log(name.surName, age, data)

console.log(data.__proto__) // mostra as propriedades já padrões do date 
