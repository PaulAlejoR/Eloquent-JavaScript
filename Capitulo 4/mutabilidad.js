// mutabilidad ejemplo 1
let objeto1 = {valor: 10};
let objeto2 = objeto1;
let objeto3 = {valor: 10};

console.log(objeto1 == objeto2); // true
console.log(objeto1 == objeto3); // false

objeto1.valor = 15;
console.log(objeto2.valor);
console.log(objeto3.valor);

// ejemplo 2
const puntuacion = {visitantes: 0 , locales: 0};
// Esto está bien 
puntuacion.visitantes = 1;
// Esto no está permitido
puntuacion = {visitantes: 1 , locales: 1};

// aqui se ejemplifica mejor la referenciación de objetos
// recordar que const es un tipo de declaración fijo
const persona = { nombre: "Ana", edad: 30 };

// Modificación de propiedades (válido)
persona.edad = 31; 
persona.ciudad = "Madrid"; 
console.log(persona);

// Reasignación de la referencia (no válido)
persona = { nombre: "Carlos", edad: 25 }; // Error: Assignment to constant variable.
