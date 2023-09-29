/*Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años
 
Ejemplo:
bisiestos(2023);
 
// Salida:
2024
2028
2032
2036
2040
2044
2048
2052
 
*/

function bisiestos (anio){
  //Un año bisiesto es un año de 366 días cada 4 años. El último año bisiesto fue 2020
  // ultimoAnoBisiesto = 2020;
  // let proxAnoBisiesto = ultimoAnoBisiesto +4

  //Tener variable limite de años:
  const limiteAnios = 30;

  //Bucle que se ejecute tantas veces como años limites tengamos
  for(let i = 0; i < limiteAnios; i++ ){ 
    //Comprobar si el 29 de febrero de ese año existe
    const fecha = new Date(anio,1,29).getMonth();
    //getMonth() nos devuelve 1 cuando es febrero (recordar es un array, el indice 0 es enero)
    //new Date(año, mes(es un array, enero es 0, febrero es 1, etc), día)
    //BUSCAMOS QUE NOS DEVUELVA 1
    // console.log(anio, fecha);

    if(fecha === 1){
      console.log(anio);
    }

    //Si existe, entonces ese año es bisiesto

    anio++
  }
  
}

bisiestos(2023)