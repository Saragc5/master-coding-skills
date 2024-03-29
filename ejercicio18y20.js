/*
Enunciado Ejercicio 18:
Dado un array de usuarios, mostrar sólo los que tengan más de 20 años
y en su nombre tengan la letra "o" y "n"
 
  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
 
Ejemplos:
filtrarUsuarios(usuarios);
 
Devuelve: 
[
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Jason', edad: 56}
]
 
*/
const usuarios = [
  { nombre: 'Antonio', edad: 20 },
  {nombre: "Sara", edad: 19},
  { nombre: 'Juan', edad: 23 },
  { nombre: 'Pepe', edad: 12 },
  { nombre: 'Raul', edad: 28 },
  { nombre: 'Paco', edad: 38 },
  { nombre: 'Jason', edad: 56},
  { nombre: 'Dafne', edad: 45}
];

function filtrarUsuarios(usuarios){  
  let resultado = {};   
  resultado = usuarios.filter((usuarios) => { return usuarios.edad > 20})
  return resultado
}
console.log(filtrarUsuarios(usuarios));

// function ordenarUsuarios(datos, propiedad){
  
//   return datos.sort((a,b) => {
//     if(typeof a[propiedad] == "number"){
//       console.log(a[propiedad] - b[propiedad])
//       return  a[propiedad] - b[propiedad]
//     }else if(typeof a[propiedad] == "string"){
//       return  a[propiedad].localeCompare(b[propiedad])
//     }
//   })  
// }
// console.log(ordenarUsuarios(usuarios, "nombre"))