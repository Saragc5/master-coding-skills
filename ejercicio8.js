/*Enunciado Ejercicio 8:
Crea un algoritmo al cual le pase un número entero
y me lo convierta a número romano
 
Ejemplos:
enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV
 
*/
/* 
El profesor lo hace con dos arrays, ver el vídeo para comprar, yo lo he hecho iterando un objeto.
*/

function enteroARomano(numero){


  //Variable para guardar string final
  let resultado = "";

  //El equivalente en numero decimales(los nuestros)
  const equivalenciaNumerosRomanos = {
    M : 1000,
    D : 500,
    C : 100,
    L : 50,
    X : 10,
    V : 5,
    I : 1,
    
  }

  //Bucle recorrer numero decimales

    //Bucle para iterar mientras el numero sea mayor o igiual al numero decimal que estoy recorriendo

    //ACtualizar numero para restar el valor decimal que ya he agregado al resultado de numero romanos
   
    let clave = Object.keys(equivalenciaNumerosRomanos);
    let valores = Object.values(equivalenciaNumerosRomanos);


    //Recorremos el objeto
      for(let i=0;i < valores.length;i++){
        valorEnRomano = clave[i];
        valorDecimal= valores[i];     
        // console.log("iterando sobre el objeto: " + clave[i] + ":" + valores[i]);
       
        while( numero >= valores[i]){
        
            // console.log("console log del while " +valores[i]);

            //Aquí vamos sumando, cuando encuenta una clave justamente menor que el numero la coge y pasa el siguiente
            resultado = resultado +  clave[i];
            // console.log("resultado: " + resultado);
    
            //Esto va restado al numero dado, el valor de la clave que ha cogido en el paso anterior, al final para salir del bucle, me debe dar 0 porque es lo que finalmente me va quedando por averiguar del numero para pasarlo a romano.
            numero = numero - valores[i];
            // console.log("numero es " + numero);
          } 

         
        }
        
         
      
      // console.log("probando que salgo del bucle");
     
      
    
     

  

  //Devolver resultado
  return "El resultado es: " + resultado;

}

console.log(enteroARomano(1504));