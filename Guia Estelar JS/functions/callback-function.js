// callback function
// em tradução seria, chame de volta, ou seja, dentro de função tu vai chamar denovo outra função dentro de outra 

function sayMyname(name){
    console.log('Antes de executar a função callbakc')
    name()
    console.log('Depois de executar a função callback')
}

sayMyname(()=>{ console.log('estou em uma callback')}) 
// dentro da chamada de uma função, nós mandamos outra função (no exemplo utilizamos uma arrow function)