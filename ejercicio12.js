const { log } = require("console");

/*
Enunciado Ejercicio 12:
Crea un programa que cuente las palabras de un texto y me diga cuántas veces aparece en el texto
 
Ejemplos:
contarPalabras("El perro de san roque no tiene el rabo 
porque es un perro muy muy malo");
 
Devuelve:
{
  el: 2,
  perro: 2,
  de: 1,
  san: 1,
  roque: 1,
  no: 1,
  tiene: 1,
  rabo: 1,
  porque: 1,
  es: 1,
  un: 1,
  muy: 2,
  malo: 1
}
*/

function contarPalabras(frase){

  let resultado = {};

  //primero que la frase la separe en un array y que sea todo minuscula para el conteo:
  let arrayDeFrase = frase.toLowerCase().split(" ");
  console.log(arrayDeFrase);

  //que cuente las palabras que sean iguales y me las meta en el objeto resultado con clave:palabra y valor:número de veces que se repiten
  //Seginifica: que al arrayDeFrase en cada elemento me muestre ese elemento y me diga si se suma con otro igual o smplement hay uno
  let objetoConRepeticiones = arrayDeFrase.forEach(el => (resultado[el] = resultado[el] + 1 || 1))
  console.log(objetoConRepeticiones);
  
  return resultado;
}

console.log(contarPalabras("El perro de san roque no tiene el rabo rabo rabo porque es un perro muy malo"));