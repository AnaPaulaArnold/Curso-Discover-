// Array

const animals= [
    'Lion', 
    'Monkey', 
    'Cat',
    {
        name: 'Cow',
        age: 5
    }
]

// acessar valores de um array

console.log(animals) // imprime todos os elementos do array completo 
console.log(animals[0]) // Lion
console.log(animals[1]) // Monkey
console.log(animals[2]) // irá imprimir o Cat

// como saber o tamanho total de um array?
console.log(animals.length) // irá imprimir o tamanho total do array 


// impressao de um objeto dentro de um array
console.log(animals[3].age) // vai acessar o valor age do objeto dentro do array 