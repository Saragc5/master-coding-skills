/*
Enunciado Ejercicio 13:
Crea una funcion que calcule el area de un cuadrado, un rectangulo o un triangulo
 
Ejemplos:
calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }); 
 
Devuelve: 27
 
*/

function calcularAreaPoligono(objeto){

  let resultado = 0;
 
  // let areaTriangulo = base*altura/ 2;
  // let areaCuadrado = lado * lado;
  // let areaRectangulo = largo * ancho; 

  //Tengo que extraer del objeto, su tipo para evaluarlo en el switch
  //Itero sobre el objeto:
  const valoresDelObjetoRecibido = Object.values(objeto);
  // console.log(valoresDelObjetoRecibido);
  //cojo la primera posicion y se la paso al switch
  const tipoDePoligono = valoresDelObjetoRecibido[0];
  // console.log(tipoDePoligono);
  

  //Una vez tengo el tipo, lo evalúo en el swift y que entre en el caso que sea y haga las operaciones, luego ese resultado lo meto en la variable resultado y es lo que me mostrará la funcion grande:
 switch (tipoDePoligono){
  case "triangulo" :
    let areaTriangulo = valoresDelObjetoRecibido[1]*valoresDelObjetoRecibido[2]/ 2;
    // console.log("El área del triángulo es: ", areaTriangulo);
    resultado = "El área del triángulo es: " + areaTriangulo;
    break;
  case "cuadrado":
    let areaCuadrado = valoresDelObjetoRecibido[1]*valoresDelObjetoRecibido[1];
    // console.log("El área del cuadrado es: ", areaCuadrado);
    resultado = "El área del cuadrado es: " + areaCuadrado;
    break;
  case "rectangulo":
    let areaRectangulo = valoresDelObjetoRecibido[1]*valoresDelObjetoRecibido[2];
    // console.log("El área del rectángulo es: ", areaRectangulo);
    resultado = "El área del rectángulo es: " + areaRectangulo;
    break;
  default:
    console.log("Sorry, no puedo calcular");
 } 

  return resultado;

}
console.log(calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }));
console.log(calcularAreaPoligono({ tipo: 'cuadrado', lado: 6 }));
console.log(calcularAreaPoligono({ tipo: 'rectangulo', largo: 6, ancho: 9 }));