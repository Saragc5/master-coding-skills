/*
Enunciado Ejercicio 10:
Crea una función que reciba un DNI (8 números) y calcule la letra del DNI
 
Es un proceso matemático facil que se basa en obtener el 
resto de la división entera del número de DNI y el número 23. 
Y con el resto se obtiene la letra, usandolo como posición o indice
dentro de un array de letras.
 
Este sería el array de letras:
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
                'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
 
Ejemplos:
generarLetraDNI("25439343");  // Resultado: 25439343D
 
*/

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
                'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function generarLetraDNI(numero){
  //DEclaro mi variable resultado:
  let resultado = "";

  //Hallo el numero que da para buscar la posicion en el array
  let posicionLetra = numero % 23;
  console.log(posicionLetra);
  //Busco la letra en el arrray con la posición que me da la parte anterior
  let letraParaElDni = letras[posicionLetra];
  console.log(letraParaElDni);

  //Meto en resultado
  resultado = numero + letraParaElDni;


  return resultado;
}

console.log("El resultado para este DNI es: " , generarLetraDNI(10562028));