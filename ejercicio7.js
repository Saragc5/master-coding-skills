/*Enunciado Ejercicio 7:
Dada un array de enteros, detectar si esa lista
de números es una permutación del 1 al ultimo número del array.
 
En este caso una permutación es una secuencia de números
en orden sin que falte ninguno entre ellos.
 
Devolver el número faltante más grande.
 
El array puede venir desordenado.
 
Ejemplos:
permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
permutacion([1, 2, 3, 5]))     // Devuelve: 4
 
*/

function permutacion(numeros){
  //Ordenar el array
  numeros.sort((menor, mayor) => menor - mayor);
  
  //Pila de número faltantes:
  let numerosFaltantes = [];
  //Recorrrer el array para ver si el siguiente elemento existe y es el anterior más 1.
  // numeros.forEach((numero) => () =>{
  //   if(numero[1] == numero[0] + 1){
  //     return true
  //   }

  //   //Si todo es correcto, devolver el ultimo número
  //   else{
  //     return number;
  //   }
  // })
  for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i], i + 1);

    let numeroQueFalta = numeros[i] + 1;

    if(numeros[i+1] !== numeroQueFalta){
          numerosFaltantes.push(numeroQueFalta);
        }    
        
  }
 //Limpiar el ultimo elemento que me lo añade artificalmente pero no lo queremos:      
      numerosFaltantes.pop();

      //Si todo es correcto, devolver el ultimo número
      let resultado = numeros[numeros.length - 1];
      if(numerosFaltantes.length >= 1){
        resultado = numerosFaltantes[numerosFaltantes.length - 1]
      }
      else{
        return "No falta ningún número"
      }
      return resultado;

}
// permutacion([1, 2, 3, 5]);
// console.log(permutacion([2,1,4,6,8,10,3,7,9,5]));//no falta ninguno
console.log("El número más grande que falta en la secuencia es:" , permutacion([2,1,6,3,4,7,5]));//
// console.log(permutacion([2,1,4,6,8,10,3,7,9,5]));//
// console.log(permutacion([2,1,4,6,8,10,3,7,9,5]));//