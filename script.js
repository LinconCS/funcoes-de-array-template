/*
//revisão de funções
function minhaFuncao(parametro1, parametro2, parametro3, parametroCallback){
  console.log('OLAR EASLEY')

parametro1
parametro2
parametro3

parametroCallback()
}
*/

// Prática Guiada I - Callbacks

// const numeros = [3, 67, 12, 90, -56, 98, 35, 24]

// function triplicarNumeros(arrayDeNumeros) {
//   const arrayTriplicado = []

//   // for(let i = 0; i < array.length; i++)
//   // fot(let index in array)
//   // for (let element of array)
//   for(let numero of arrayDeNumeros){
//     const numeroTriplicado = numero * 3
//     arrayTriplicado.push(numeroTriplicado)
//   }

//   return arrayTriplicado
// }

// // console.log(triplicarNumeros([4, 6, 98, -9, 251]))
// // console.log(triplicaNumeros(numeros))


// function retornarPares(arrayDeNumeros){
//   const arrayPares = []

//   for(let numero of arrayDeNumeros){
//     if(numero % 2 === 0){
//       arrayPares.push(numero)
//     }
//   }

//   return arrayPares
// }

// // console.log(retornarPares(numeros))


// function manipulaNumeros (arrayDeNumeros, callback) {
//   const novoArray = callback(arrayDeNumeros)

//   return novoArray
// }

// console.log('TRIPLICANDO', manipulaNumeros([98, 56, 74, 30, 31, 89, -3, 47, 99], triplicarNumeros))

// console.log('SÓ PARES', manipulaNumeros([98, 56, 74, 30, 31, 89, -3, 47, 99], retornarPares))



// Prática Guiada II - map()
// const numeros = [3, 67, 12, 90, -56, 98, 35, 24]

// const numerosTriplicados = numeros.map((elemento, indice, arrayOriginal) => {
//   // console.log(indice, elemento)
//   return elemento * 3
// })

// console.log(numerosTriplicados)


// // Prática Guiada III - filter()

// const numerosPares = numeros.filter((elemento, indice, arrayOriginal) => {
//   return elemento % 2 === 0
// })

// console.log(numerosPares)

// const numerosParesTriplicados = numerosPares.map((numero, indice, arrayOriginal) =>{
//   return numero * 3
// })

// console.log(numerosParesTriplicados)



// Exercício de Fixação

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

// Parte 1

const mudaPropriedadeVida = (poke) => {
  poke.vida = 100

  
  return poke
}
const objetoQualquer = {
  nome: 'lincon',
  tipo: 'ser humano'

}

// invocando a função com objeto criado no momento da invocação
// console.log(completaVida({
//   nome: 'pikachu',
//   tipo: 'elétrico',
//   vida: 25
// }))

// console.log(mudaPropriedadeVida(objetoQualquer))

// invocando a função para cada um dos objetos dentro do array
// console.log(mudaPropriedadeVida(pokemons[0]))
// console.log(mudaPropriedadeVida(pokemons[1]))
// console.log(mudaPropriedadeVida(pokemons[2]))
// console.log(mudaPropriedadeVida(pokemons[3]))
// console.log(mudaPropriedadeVida(pokemons[4]))
// console.log(mudaPropriedadeVida(pokemons[5]))

// Parte 2
// const pokemonsVidaCheia = pokemons.map((poke, indice, arrayOriginal) => {
//  //lógica
// })

// const pokemonsVidaCheia = pokemons.map(mudaPropriedadeVida)

// console.log(pokemonsVidaCheia)


// Parte 3

// const pokemonsDeFogo = pokemons.filter((pokemon, indice, arrayOriginal) => {
//   return pokemon.tipo === 'fogo'
// })

// console.log(pokemonsDeFogo)