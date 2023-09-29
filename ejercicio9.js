/*
Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array
 
Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8
 
*/

const { log } = require("console");

function sumaPares(miArray){

  //Declaro la variable donde voy a meter el resultado:
  let resultado = "";
  
  //Creo el array nuevo donde mostrar el mapeo de los números que son pares, lo hago averiguando los que haciendoles el modulo, darían 0:
  const arrayMapeado = miArray.map((numero) =>  numero % 2)  
  console.log(arrayMapeado);

  //Recorro el array buscando los valores que sean = 0 porque esos números son los que son pares, y devuelvo un nuevo array con ellos:
  //Creo un nuevo array vacío para meterlos dentro:
  const posicionesConCero = [];
  //recorro el arrayMapeado
  for (let i = 0; i < arrayMapeado.length; i++){
    if(arrayMapeado[i] === 0){
      posicionesConCero.push(i);
    }
  }
  console.log("las posiciones con 0 son: " + posicionesConCero);
  
  //Ahora tengo que decirle que me busque en el array original, las posicionesConCero y me diga su valor, 
  //para eso creo este array vacío:
  const valoresDeLasPosiciones = [];
  //ahora recorro las posiciones
  posicionesConCero.forEach((posicion) => {
    //le digo que si la posicion es mayor o igual que 0 y la posicion es menor que la longitud del array:
    if(posicion >= 0 && posicion < miArray.length){
      //le digo que me lo meta en el nuevo array valoresDeLasPosiciones lo que va encontrando
      valoresDeLasPosiciones.push(miArray[posicion])
    }
  })
  console.log("Los valores son: " + valoresDeLasPosiciones);

 
  //cuando ya sepa en que i esta cada par, tendre que sumarlos, meto el valor en el resultado
  resultado = valoresDeLasPosiciones.reduce((a,b) => a+b, 0)


  return resultado;
}

console.log("Resultado: " ,sumaPares( [2, 13, 6, 15]));