/*Enunciado Ejercicio 4:
Crea el juego del ahorcado.
El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
 
Utiliza el método de entrada de datos habitual de tu lenguaje,
en el caso de JS, usaremos la función prompt.
 
Ejemplo:
juegoDelAhorcado('victor');  
 
// Salida:
Adivina la letra: i
La palabra es: _i___
Te quedan 5 intentos
 
*/
const palabraSecreta = "escalera";

function juegoDelAhorcado(palabraSecreta){
  //Crear variable palabra oculta con guinos bajos:
  let palabraOculta = "_".repeat(palabraSecreta.length)
  console.log(palabraOculta);
  //Crear variable con el numero de intentos que vamos a tener:
  let intentos = 5;
  //Crear un bucle para pedir letras que se va a ejecutar mientras que no se 
  //hayan adivinado todas las letras y aun queden intentos:
  while(intentos > 0 && palabraOculta !== palabraSecreta){
    //Pedimos una letra:
    let letra = prompt("Adivina una letra")
    //Actualizar valores de palabra oculta y de intentos, entonces,
    //Comprobar si la letra está en la palabra para actualizar palabraOculta 
    if(palabraSecreta.includes(letra)){
      //actualizar la variable palabraOculta y meter la letra en la posición correcta:
      for(let contadorLetras = 0; contadorLetras < palabraSecreta.length;contadorLetras++){
        if(letra === palabraSecreta[contadorLetras]){
          console.log(contadorLetras, palabraSecreta[contadorLetras]);

          //Convertir la palabraOculta en un array
          let palabraOcultaArray = Array.from(palabraOculta)
          

          //Seleccionar su indice y cambiar _ por la letra adivinada
          palabraOcultaArray[contadorLetras] = letra;
          console.log(palabraOcultaArray);

          //Unir el array en un string de nuevo y actualizar la variable palabraOculta.

          palabraOculta = palabraOcultaArray.join("");
          console.log(palabraOculta);

          intentos--
        }
      }

    }
    else{
      //Si no existe la letra, restar 1 intento:
        intentos-- //(es lo mismo: intentos = intentos -1;)
    }


    //Mostrar el estado actual de la palabraOculta y cuantos intentos quedan:
    console.log(`La palabra oculta es ${palabraOculta}`);
    console.log(`Te quedan ${intentos} intentos`);
  }
  
  if(palabraOculta === palabraSecreta){
    console.log(`¡Enhorabuena, has ganado! La palabra secreta era: ${palabraSecreta} `);
  }
  else{
    console.log(`Lo siento has perdido, la palabra secreta era: ${palabraSecreta}`);
  }

 
}
// const lanzarJuego = document.querySelector("#lanzarJuego").addEventListener("click", 
// juegoDelAhorcado())

//ESTO ES PARA QUE FUNCIONE EL BOTÓN DE JUGAR:
//Lo mismo, en dos líneas que se ve mejor:
const lanzarJuego = document.querySelector("#lanzarJuego");
lanzarJuego.addEventListener("click", () => juegoDelAhorcado("victor"));