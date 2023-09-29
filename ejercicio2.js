/*
Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
 
*/

function simplificarRuta(ruta){
  //Crear la variable pila para almacenar las partes de la ruta
  let pila = [];
  //Dividir la ruta en sus diferentes partes usando el separador /
  const partes = ruta.split("/")

  //Recorrer cada parte
  for(const parte of partes){
    //No queremos elementos vacíos, entonces,
    //Si la parte es .. quito en ultimo elemento:
    if(parte === ".."){
      pila.pop();
    }

    //Si la parte es diferente a "." a ".." o a una cadena vacía, entonces guardo esa pila
    else if(parte !== "." && parte !== ""){
      pila.push(parte)
    }
  }

  //Reconstruir la ruta:
  let rutaSimplificada =  `/${pila.join("/")}`

  return rutaSimplificada;


}
console.log(simplificarRuta( "/home/"));
console.log(simplificarRuta("/x/./y/../../z/"));
console.log(simplificarRuta("/../"));
console.log(simplificarRuta("/home//pruebas"));