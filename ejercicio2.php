<?php

function simplificarRuta($ruta){
   //Crear la variable pila para almacenar las partes de la ruta
  $pila = [];
  //Dividir la ruta en sus diferentes partes usando el separador /
  $partes = explode("/", $ruta);

   // Recorrer cada parte
   foreach ($partes as $parte) {
    // Ignorar las partes vacías o puntos (.) que indican el directorio actual
    if ($parte === "" || $parte === ".") {
      continue;
    }
    // Manejar los puntos dobles (..) que indican retroceder un directorio
    if ($parte === "..") {
      // Si la pila no está vacía, retroceder un nivel eliminando el último elemento
      if (!empty($pila)) {
        array_pop($pila);
      }
    } else {
      // Agregar la parte actual a la pila
      array_push($pila, $parte);
    }
  }
 // Reconstruir la ruta simplificada utilizando las partes en la pila
 $rutaSimplificada = "/" . implode("/", $pila);

 return $rutaSimplificada;
}

echo simplificarRuta("/home/") . "\n";
echo simplificarRuta("/x/./y/../../z/") . "\n";
echo simplificarRuta("/../") . "\n";
echo simplificarRuta("home//pruebas");

















?>