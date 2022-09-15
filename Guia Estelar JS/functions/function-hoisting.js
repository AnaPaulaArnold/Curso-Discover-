// function hoisting

sayMyName()

function sayMyName(){
    console.log('Ana')
}

/* Vai fazer o hoisting dessa maneira*/

// Agora fazendo assim:

anotherFunction()

const callFunction = function anotherFunction(){
    console.log('teste de hoisting com função anonymous')
}

/* Assim vai retornar um erro, pois funções em expressões não sofrem hoisting independente se elas são const, let, var, etc...*/