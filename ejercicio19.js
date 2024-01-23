/*
Enunciado Ejercicio 19:
Crea una función que simule el lanzamiento de dos dados.
 
Ejemplos:
dados();
 
*/
  const dados1 = [1,2,3,4,5,6]
  const dados2 = [1,2,3,4,5,6]
  let dadosNumber = [dados1, dados2]

function dados(){  

  const numAleatorio1 = Math.floor(Math.random() * dados1.length)
  const numAleatorio2 = Math.floor(Math.random() * dados2.length)
  console.log(numAleatorio1, numAleatorio2);

  let resultado = [numAleatorio1, numAleatorio2]
  
 
  return resultado
};
console.log(dados());
