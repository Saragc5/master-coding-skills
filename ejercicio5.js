/*Enunciado Ejercicio 5:
Dado un array de personas con nombres y apellidos
crear una función para ordenar el array por los apellidos
en orden alfabético
 
Ejemplo:
ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]);  
 
*/


function ordenarPorApellidos(personas) {
  //crear una variable con un nuevo array de aepllidos:
  const apellidos = personas.map((persona) => persona.split(" ")[1]);
  console.log(apellidos);
  //ordenamos el array por orden alfabetico
  const apellidosOrdenados = apellidos.sort();

  //Ahora debemos hacer que la funcion devuelva un array completo, nombre + apellidos por orden de apellidos:
  //hago map sobre los apellidos
  const personasOrdenadas = apellidos.map((apellido) => {
    //me creo la variable nombre de pila para mostrar nombre y apellidos
    const nombreDePila = personas.find((nombreCompleto) => {
      //hago un find diciendole en la condición que a todo el nombre completo, le hacemos un split para separar por el espacio
      //que hay entre nombre y apellido y de ahí coon [1] le digo que me coja el apellido y luego lo igualamos a la variable apellido
      //que es sobre la que hemos estado haciendo map para ordenar las personas, un poco más arriba

      return nombreCompleto.split(" ")[1] === apellido;
    });
    return nombreDePila;
  });

  return personasOrdenadas;
}

console.log(ordenarPorApellidos([
  "Víctor Robles",
  "Antonio Alcantara",
  "Al Pacino",
  "Robert DeNiro",
  "Brad Pitt",
  "Sylvester Stallone"
]));