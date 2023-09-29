<?php

$infoSuperHeroes = array(
  "Iron Man" => array(
      "nombreReal" => "Tony Stark",
      "poderes" => array("Tecnología avanzada", "Movilidad aérea"),
      "equipo" => "Los vengadores"
  ),
  "Superman" => array(
      "nombreReal" => "Clark Kent",
      "poderes" => array("Vista láser", "Volar"),
      "equipo" => "Los otros"
  ),
  "Viuda Negra" => array(
      "nombreReal" => "Natalia Romanov",
      "poderes" => array("Agilidad", "Fuerza física", "Sugestión"),
      "equipo" => "Los vengadores"
  ),
  "Hulk" => array(
      "nombreReal" => "Doctor Tal",
      "poderes" => array("Fuerza extrema", "Transformarse en gigante"),
      "equipo" => "Los vengadores"
  )
);
// Acceder a la información de un superhéroe
// echo "Nombre Real de Iron Man: " . $infoSuperHeroes["Iron Man"]["nombreReal"];
// echo "Poderes de Superman: " . implode(", ", $infoSuperHeroes["Superman"]["poderes"]);

function mostrarInformacionSuperheroe ($aka, $infoSuperHeroes){

  if (array_key_exists($aka, $infoSuperHeroes)){
    $informacion = $infoSuperHeroes[$aka];
    echo "###########" . $aka . "##########" . PHP_EOL;
    echo "Nombre real: " . $informacion["nombreReal"] . PHP_EOL;
    echo "Nombre real: " . implode(", ", $informacion["poderes"]) . PHP_EOL;
    echo "Nombre real: " . $informacion["equipo"] . PHP_EOL;
  }
  else{
    echo $aka . " no existe en la lista". PHP_EOL;
  }
}
mostrarInformacionSuperheroe("Batman", $infoSuperHeroes);


function mostrarInformacionDeVariosSuperheroes($nombres, $infoSuperHeroes){
  foreach($nombres as $nombre){
    if (array_key_exists($nombre, $infoSuperHeroes)){
      $informacion = $infoSuperHeroes[$nombre];
      echo "###########" . $nombre . "##########" . PHP_EOL;
      echo "Nombre real: " . $informacion["nombreReal"] . PHP_EOL;
      echo "Nombre real: " . implode(", ", $informacion["poderes"]) . PHP_EOL;
      echo "Nombre real: " . $informacion["equipo"] . PHP_EOL;
    }
    else{
      echo $nombre . " no existe en la lista". PHP_EOL;
    }
  }
}
mostrarInformacionDeVariosSuperheroes(["Viuda Negra", "Superman"], $infoSuperHeroes)

?>