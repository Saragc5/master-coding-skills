/*
Enunciado Ejercicio 11:
 Crea una función a la cual le pase un array de numeros
 y un numero que será el resultado de la suma de dos de los valores
 //Me devolverá un array con esos dos números que suman el resultado
 
Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]
 
*/

function sumarDos(miArray, numero){
  let resultado = "";

  //le he de decir que del array me sume numero hasta que la suma me dé el numero que se pasa coomo segundo parametro
  let sumaAcumulada = 0;
  let arrayNuevo = [];  
  
  //que para cada dos posiciones del array, me las sume y las compare con el numero,
 for(let i=0; i < miArray.length; i++){
   sumaAcumulada += miArray[i];
   arrayNuevo.push(miArray[i])
   console.log(sumaAcumulada, arrayNuevo);
   
   //le digo que si suma que va acumulando es igual al numero, que me devuelva el nuevo array con el valor de esas posiciones
   if(sumaAcumulada === numero){
    return arrayNuevo
   }
   //aquí le digo que si la suma es mayor, que reinicie contadores y empiece en la siguiente posición
   else if(sumaAcumulada > numero){
      sumaAcumulada = 0;
      arrayNuevo = [];
      i = i - 1;
      //con esto el bucle vuelve a iniciarse

   }
   
 }



  return resultado;
}

// console.log("El resultado es:  ", sumarDos([1, 2, 3, 4], 6));

/*
Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]
 
*/

function sumarDosNumeros(numeros, resultado){

  let arrayResultado= [];

  for(let i = 0; i < numeros.length;i++){
    let numeroComprobado = numeros[i];
    let difResultadoYNumeroComprobado = resultado - numeroComprobado //segundo numero es igual a resultado menos el numero de la posicion por la que va iterando el bucle
    console.log("Número comprobado : ", numeroComprobado, "Dif del resultado con el núm comprobado : " , difResultadoYNumeroComprobado );

    //En el if le digo la clave:
    //Si números incluye el numero que es la diferencia entre el numero que estoy comprobado y el resultado, pues esa es la solución. Si compruebo 5 y el resultado es 9 y en el array hay una posición donde esté el número 4, ésa es la solución.[5, 4]
    if(numeros.includes(difResultadoYNumeroComprobado) && difResultadoYNumeroComprobado !== numeroComprobado){
     
      arrayResultado = [numeroComprobado, difResultadoYNumeroComprobado]
      return arrayResultado

    }
    else{
      return "No se puede hallar el resultado con este array"
    }
    
  }

  

}
console.log("El resultado es:  ", sumarDosNumeros([8, 3, 7, 12, 6, 90, 1], 22));
