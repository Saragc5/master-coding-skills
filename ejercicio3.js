/*
Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
 
*/
//Mi solución:
// const fechaSept = new Date('Dec 1, 2023');
// const fechaOct = new Date('Dec 24, 2023');

// console.log(fechaSept, " - ", fechaOct);

// function restarFechas(fecha1, fecha2){

//   return fecha2 - fecha1

// }
// console.log(restarFechas(fechaSept, fechaOct));



//Solución profesor:
function diferenciaDeDias(fecha1, fecha2){
  //Dar el formato correcto a las fechas:(reescribimos las variables con un tertniario, así comprobamos si tienen formate Date y si no lo tiene, se lo asignamos)
   fecha1 = fecha1 instanceof Date ? fecha1: new Date(fecha1)
   fecha2 = fecha2 instanceof Date ? fecha2: new Date(fecha2)
  //Obtener la diferencia en milisegundos entre las dos fechas:(hay que hacerlo así)
  const diferenciaMilisegundos = Math.abs(fecha1.getTime() - fecha2.getTime());
  //Math.abs me saca el valor absoluto entre las dos fechas para que el resultado con el que voy a trabajar sea positivo, si no, tendría que estar poniendo las fechas en orden para que no me diera negativo.(como he hecho yo arriba)
  //Dividir la diferencia en milisegundos entre el numero de molisegundosque tiene un día y redondearla para sacar los días:
  const dias = Math.floor(diferenciaMilisegundos / (1000 * 60 *60 *24));
  //(1000 de un milisegundo  * 60minutos *60segunos *24horas)
  //Math.floor lo ponemos por si no diera un numero entero, para que me lo pase a entero.

  if(isNaN(dias)){
    return "Formato de fechas incorrecto, usa el formato americano: 'month day, year'"
  }//esto es por si me diera mal algún formato introducido.

  return "La diferencia son " + dias + " días";

}
console.log(diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023'));
console.log(diferenciaDeDias('03-03-2023', '08-09-2023'));
console.log(diferenciaDeDias('03/03/2023', '08/09/2023'));