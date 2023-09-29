<?php 
// Definición de una clase
class Persona {
    // Propiedades, PRIMERO HAY QUE CREAR EL OBJETO:
    public $nombre;
    public $edad;
    
    // Constructor, AHORA LLAMAMOS AL CONSTRUCTOR
    public function __construct($nombre, $edad) {
        $this->nombre = $nombre;
        $this->edad = $edad;
    }
    
    // Método
    public function saludar() {
        echo "Hola, soy {$this->nombre} y tengo {$this->edad} años.";
    }
}

// Creación de un objeto a partir de la clase Persona
$persona1 = new Persona("Juan", 30);

// Llamada a un método
$persona1->saludar();




?>