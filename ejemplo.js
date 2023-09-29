// Definición de una clase similar a la clase Persona en PHP
class Persona {
  //DIRECTAMENTE SE LLAMA AL CONSTRUCTOR Y SE CREAN LAS PROPS DEL OBJETO:
  constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
  }

  //Método ( La palabra clave function no es requerida cuando defines métodos dentro de una clase utilizando esta sintaxis.)
  saludar() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}






// Creación de un objeto a partir de la clase Persona
const persona1 = new Persona("Juan", 30);

// Llamada al método
persona1.saludar();


//SIN USAR CLASES:
// Definición de un objeto similar a la clase Persona en PHP
const persona2 = {
  nombre: "Juan",
  edad: 30,
  saludar: function() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
};

// Llamada al método
persona2.saludar();
