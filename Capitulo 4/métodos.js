// un método es una funcion dentro de un objeto
// y se accede a el mediante la notación de punto y sin parametros

let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    arrancar: function() {
      console.log("El coche ha arrancado.");
    }
}; 
  
coche.arrancar(); // Output: "El coche ha arrancado."

let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
      console.log("Hola, mi nombre es " + this.nombre);
    }
};

console.log(persona.saludar());//undefined

let perro = {
    nombre: "Fido",
    ladrar: function() {
      console.log(this.nombre + " está ladrando.");
    }
  };
  
  perro.ladrar(); // Output: "Fido está ladrando."

  // en estos dos ultimos ejemplos 'this' esta referenciando al mismo objeto
  // para que pueda acceder a su propiedad con función es decir el método "nombre" y obtener su valor

  let gato = {
    nombre: "Miau",
    maullar: () => {
      console.log(this.nombre);
    }
  };
  
  gato.maullar(); // Output: undefined (porque las funciones flecha no tienen su propio `this`)
  
  