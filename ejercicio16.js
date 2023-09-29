/*
Enunciado Ejercicio 16:
Crea una función que meta en una caja de asteriscos la frase 
que le pasemos por parametro
 
Ejemplos:
mostrarTextoCaja('Hola soy Víctor Robles WEB');
 
**********
* Hola   *
* soy    *
* Víctor *
* Robles *
* WEB    *
**********
 
*/
let frase = 'Hola soy Víctor Robles WEB, desarrollador, profesor y tengo un canal de youtube';

function mostrarTextoCaja(frase){

  
  //separo el texto en palabras y luego ver cuántos caracteres tiene la palabra más larga:
  let arrayDePalabras = frase.split(" ")
  console.log(arrayDePalabras, "largo de array:", arrayDePalabras.length);

  let longitudMaxima = 0;

  arrayDePalabras.forEach(palabra => {
    longitudMaxima = Math.max(longitudMaxima, palabra.length)
    
  });

  console.log(arrayDePalabras, "longitud máxima:",longitudMaxima);

  //Huecos por defecto extra:
    const huecosPorDefecto = 4;
  //imprimir primera linea del marco
  const asteriscosTotales = longitudMaxima + huecosPorDefecto;
  console.log("*".repeat(asteriscosTotales) );

  //recorrer palabras y mostrar una por línea dentro de la caja
  arrayDePalabras.forEach(palabra => {
    //creo una constantes para los espacios de despues de la palabra que no son fijos nunca:
    const espacios = " ".repeat(longitudMaxima - palabra.length);
    console.log(`* ${palabra}${espacios} *` );
  })



  //imprimir la última linea de asteriscos final
  console.log("*".repeat(asteriscosTotales) );



  // return resultado; (esta funcion no requiere que devuelva nada así que no hace falta que ponga el return)
}

console.log(mostrarTextoCaja(frase));