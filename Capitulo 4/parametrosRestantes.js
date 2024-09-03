// notación de 3 puntos (...)
// se usa en dos contextos "OPERADOR DE PROPAGACIÓN" y "PARAMETROS REST"

// PARAMETROS REST
// Se usa en la definición de una función y acepta
// un número indefinido de elementos como un array
function maximo(...numeros){
    let resultado = -Infinity;
    
    for(let numero of numeros){
        if(numero > resultado) resultado = numero;
    }

    return resultado;
}

//tambien sirve para llamar un array con argumentos
//let numeros = [5, 1, 23, 7];

//console.log(maximo(...numeros));
console.log(maximo(4, 1, 9, -2));

// OPERADOR DE PROPAGACIÓN
// Se usa cuando se espera una lista de valores y la
// notación puede expandir una expresión que puede ser
// iterada (como un array) en elementos individuales


// 1° forma
let palabras = ["nunca", "aprenderas"]
console.log("");
console.log(["tu", ...palabras, "completamente"]);

// 2° forma
let partes = ['hombros', 'rodillas'], cancion = ['cabeza', ...partes, 'y', 'dedos'];
let dorsalesB = [23, 91, 33, 12, 77, 34];
console.log(cancion);

// 3° forma
console.log(maximo(8, ...dorsalesB, 28));

// propagación con objetos
console.log("\nCon objetos");
let persona = { nombre: 'Juan', edad: 30 };
let empleado = { ...persona, puesto: 'Desarrollador' };

console.log(empleado);
// { nombre: 'Juan', edad: 30, puesto: 'Desarrollador' }


// ejemplo con ya todo junto
// Usando parámetros rest en una función
function concatenar(delimitador, ...cadenas) {
    return cadenas.join(delimitador);
}
  
// la coma es el delmitador, es decir el primer parametro
console.log("\nEjemplo ya usando todo");
console.log(concatenar(', ', 'Hola', 'mundo', 'de', 'JavaScript')); // "Hola, mundo, de, JavaScript"
  
// Usando operador de propagación para combinar arrays
let numeros = [1, 2, 3];
let masNumeros = [4, 5, 6];
let todosLosNumeros = [...numeros, ...masNumeros];
  
console.log(todosLosNumeros); // [1, 2, 3, 4, 5, 6]
  
// Usando operador de propagación para clonar un objeto
let original = { a: 1, b: 2 };
let copia = { ...original, c: 3 };
  
console.log(copia); // { a: 1, b: 2, c: 3 }
  
