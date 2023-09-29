/*
Enunciado Ejercicio 14:
Dada una cadena de texto, comprobar si es un palindromo o no. 

******** No usar funciones de javascript, solo estructuras de control ********
 
Los palíndromos son palabras que se leen igual aun estando invertidas. 
Por ejemplo: ana, bob, otto, allivessevilla
 
Ejemplos:
esPalindromo("otto") // Devuelve: true
esPalindromo("victor") // Devuelve: false
 
*/
//CON FUNCIONES DE JAVASCRIPT:
// function esPalindromo(palabra){
//   let resultado = "";

//   //separo la palabra en un array de letras
//   const nuevoArraySeparoLetras = palabra.split("");
//   //le doy la vuelta a ese array y uno las letras para formar una nueva palabra
//   const leDoyLaVueltaAlArray = nuevoArraySeparoLetras.reverse();
//   const nuevaPalabra =  leDoyLaVueltaAlArray.join("");
//   console.log("La nueva palabra es : " , nuevaPalabra);

//     if(palabra === nuevaPalabra){
//       resultado = true
     
//     }
//     else{
//      resultado = false
//     }

//    return resultado;
  
// }
// console.log("Solución número 1: " , esPalindromo("sara"));

//Pero como ha dicho: No usar funciones de javascript, solo estructuras de control:
//(sin saber, era lo que intentaba hacer arriba hasta que le di cuenta de los protoipos de string que podía usar)
//HACEMOS:
function esPalindromo2(palabra){
  //Resuelto con estructuras de control:
  //Dividir la cadena de texto en un array de letras
 let letras = [];
 for(let i = 0; i < palabra.length; i++){
  letras.push(palabra[i]) //metemos las letras en el array vacío

 }
  //Invertir el array con un bucle
  let letrasInvertidas = [];
  for(let i = letras.length -1; i >= 0; i--){
    letrasInvertidas.push(letras[i]);//metemos las letras en el array vacío

  }

  //Unir todas las letras del array con un bucle y guardando el resultado en una variable
  let palabraInvertida = "";
  for(let i = 0;i < letrasInvertidas.length; i++){
    palabraInvertida += letrasInvertidas[i]//+= concatena, une cada letra del array de invertidas y hace una nueva palabra, es hacer un join()
  }

  //Devolver resultado
 return (palabra === palabraInvertida);
}
console.log("Solución número 2 :" , esPalindromo2("mamaamam"));