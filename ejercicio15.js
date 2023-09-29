/*
Enunciado Ejercicio 15:
Dada un array de palabras, crear una función que lo devuelva ordenado
por la longitud de sus palabras de menor a mayor
 
Ejemplos:
ordenarPorLongitud([
  "Hola",
  "soy",
  "Víctor Robles",
  "como",
  "estas",
  "hoy",
  "amigo",
  "yo",
  "voy",
  "a",
  "estudiar",
  "ahora"
]);
 
*/
const miArray = [
  "Hola",
  "soy",
  "Sara",
  "supercalisfras",
  "estasandro"
  
];
function ordenarPorLongitud(miArray){
  let resultado = [];

  
  //ordeno los arrays del miArray por longitud de posiciones:
  resultado = miArray.sort((a,b) => b.length - a.length)
   
  //cuento en los arrays dentro del array ppal, la longitud de sus posiciones y que me los devuelva ordenador de menor a mayor, con un map
  

  //devuelvo resultado
  return "resultado: " + resultado;
}
// console.log(ordenarPorLongitud(miArray));
console.log(ordenarPorLongitud([
  "Hola",
  "soy",
  "Víctor Robles",
  "como",
  "estas",
  "hoy",
  "amigo",
  "yo",
  "voy",
  "a",
  "estudiar",
  "ahora"
]));