/* Exerc

    1. Declare uma variável de nome weight

    2. Que tipo de dado é a variavel acima?

    3. Declare uma variável e atribua os valores para cada um dos dados: 
        * name: String
        * age: Number (integer)
        * stars: number (float)
        * isSubcribed: Boolean

*/

let weight= 88

console.log(typeof weight)

let person={
    name: 'Ana Paula',
    age: 20,
    stars: 4.5,
    isSubcribed: true

}

console.log(`O nome é ${person.name}, 
             a idade é ${person.age} anos,
             sua classificação é ${person.stars},
             e seu status de inscrita é ${person.isSubcribed}
`)


/*
    4. Declare a variável student

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

    4.2 Mostre no console a seguinte mensagem:
     <name> de iade <age> pesa <weight> kg.
    Atenção, substituia <name <age> e <weight> pelos valores de cada propriedade do objeto

*/

let student ={
    name: 'Ana Paula',
    weight: 68.0,
    age: 20,
    stars: 4.5,
    isSubcribed: true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhuma valor, ou seja, somente o Array vazio.
*/

let students=[]

console.log(students)

/*
    6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copiar e colar o objeto, maus usar o objeto criado e inserir ele no Array)
*/

students=[student] // atribuindo o objeto na posição 0 do  array


/*
    7. Coloque no console o valor da posição zero do array acima
*/

console.log(students[0]) // imprimindo o array[0]

/*
    8. Crie um novo student e coloque na posição 1 do array students
*/

students[1]={
    name: 'João',
    weight: 84.6,
    age: 25,
    stars: 4.8,
    isSubcribed: true
}

console.log(students)

/*
    9. Sem rodar o código responda qual éa resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou. 

    console.log(a)
    var a = 1
*/

console.log(a)
var a = 1

// Resposta deu undefined, acertei uhul!