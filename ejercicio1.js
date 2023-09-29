/*
Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.
 
Y añade una capacidad de buscar la información de varios superhéroes a la vez.
 
Ejemplo:
mostrarInformacionSuperheroe('Iron Man');
 
Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores
 
Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]]);
 
Salida:
Muestra la información de todos los superheroes
 
*/

//Creo el array de super heroes:
let infoSuperHeroes = {
  "Iron Man": {
    nombreReal: "Tony Stark",
    poderes: ["Tecnología avanzada", "Movilidad aérea"],
    equipo: "Los vengadores"
  },
  "Superman": {
    nombreReal: "Clark Kent",
    poderes: ["Vista láser", "Volar"],
    equipo: "Los otros"
  },
  "Viuda Negra": {
    nombreReal: "Natalia Romanov",
    poderes: ["Agilidad","Fuerza física",  "Sugestión"],
    equipo: "Los vengadores"
  },
  "Hulk": {
    nombreReal: "Doctor Tal",
    poderes: ["Fuerza extrema", "Transformarse en gigante"],
    equipo: "Los vengadores"
  }
}


function mostrarInformacionSuperheroe (aka) {
    if(aka in infoSuperHeroes){
      const informacion = infoSuperHeroes[aka];
      //console.log(informacion);
      //Ahora mostramos la info tal como pide el ejercicio:
      console.log(`###########${aka}##########`);
      console.log("Nombre real:", informacion.nombreReal);
      console.log(`Poderes: ${informacion.poderes.join(" , ")}`);
      console.log("Equipo:", informacion.equipo);
    }
    else{
      console.log(`${aka}"no existe en la lista"`);
    }
}
mostrarInformacionSuperheroe("Superman");

function mostrarInformacionDeVariosSuperheroes(nombres){
  //Recorrer sólo los nombres
  nombres.forEach(nombre => {
    //Aquí me saca la info del superheroe:

    mostrarInformacionSuperheroe(nombre)
    
  })


}
mostrarInformacionDeVariosSuperheroes(["Viuda Negra", "Superman"]);