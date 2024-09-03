// Métodos que realizan operaciones y retornan valores
let numerosPrueba = [91, 23, 77, 12, 34, 8, 33, 28, 45];

// Valores absolutos ------------------------------------ Del libro
console.log(Math.abs(-23));
console.log(Math.abs(23));
// Retorna arcoseno en RADIANES
console.log("\n" + Math.acos(0));
console.log(Math.acos(1));
console.log(Math.acos(2));
// Retorna el coseno hiperbólico inverso de x
console.log("\n" + Math.acosh(0));
console.log(Math.acosh(1));
console.log(Math.acosh(2));
// Arcoseno en RADIANES
console.log("\n" + Math.asin(0));
console.log(Math.asin(1));
// Seno hiperbólico inverso de x
console.log("\n" + Math.asinh(0));
console.log(Math.asinh(1));
// Arcotangente en RADIANES
console.log("\n" + Math.atan(0));
console.log(Math.atan(1));
// Arcotangente del cociente de argumentos
console.log("\n" + Math.atan2(1, 7));
console.log(Math.atan2(3, 2));
// Tangente hiperbólico inverso de x
console.log("\n" + Math.atanh(0));
console.log(Math.atanh(1));
// Raíz cúbica
console.log("\n" + Math.cbrt(8));
// Retorna el entero mayor o igual más proximo a x --------------------------------- Del libro
console.log("\n" + Math.ceil(1.4));
// Retorna el número de ceros de encabezamiento de un entero de 32 bits.
console.log("\n" + Math.clz32(1));
// Retorna el coseno de x (dado en radianes).
console.log("\n" + Math.cos(Math.PI / 3));
// Coseno hiperbolico de x
console.log("\n" + Math.cosh(0));
// Retorna 'E^x' (elevada a la x) y 'E' es el número de Euler
console.log("\n" + Math.exp(1));
console.log(Math.exp(25));
// Retorna 'E^x - 1'
console.log("\n" + Math.expm1(1));
// Retorna el entero menor o igual más proximo a x ---------------------------------- Del libro
console.log("\n" + Math.floor(1.6));
// Regresa el valor flotante simple más cercano de un número
console.log("\n" + Math.fround(5.5));
console.log(Math.fround(1.6));
// Retorna la raíz cuadrada de la suma de sus argumentos
console.log("\n" + Math.hypot(3, 4));
console.log(Math.hypot(...numerosPrueba));
// Realiza la multiplicación de enteros de 32 bits
console.log("\n" + Math.imul(2, 4));
console.log(Math.imul(7, 23, 91));
console.log(Math.imul(7));
// Retorna el logaritmo natural (base E) de x.
console.log("\n" + Math.log(Math.E));
// Retorna el logaritmo natural de 1 + x
console.log("\n" + Math.log1p(1));
// Retorna el logaritmo en base 10 de x
console.log("\n" + Math.log10(100));
// Retorna el logaritmo en base 2 de x
console.log("\n" + Math.log2(8));
// Retorna el mayor de cero o más números --------------------------------- Del libro
console.log("\n" + Math.max(1, 5, 3, 2));
console.log(Math.max(...numerosPrueba));
// Retorna el menor de cero o más números --------------------------------- Del libro
console.log("\n" + Math.min(1, 5, 3, 2));
console.log(Math.min(...numerosPrueba));
// Retorna la base elevada al exponente Math.pow(base, exponent)
console.log("\n" + Math.pow(2, 3));
// Retorna un número pseudo-aleatorio entre 0 y 1 --------------------------------- Del libro
console.log("\n" + Math.random());
// Retorna el valor de un número redondeado al entero más cercano
console.log("\n" + Math.round(1.5));
console.log(Math.round(1.2));
// Retorna el signo de un número, indicado si el número es positivo, negativo o cero
console.log("\n" + Math.sign(-5));
console.log(Math.sign(+5));
console.log(Math.sign(0));
console.log(Math.sign(0.23));
// Retorna el seno de un número
console.log("\n" + Math.sin(Math.PI / 2));
// Retorna el seno hiperbolico de un número
console.log("\n" + Math.sinh(1));
// Retorna la raíz cuadrada de un número
console.log("\n" + Math.sqrt(4));
// Retorna la tangente de un número
console.log("\n" + Math.tan(Math.PI / 4));
// Retorna el tangente hiperbolico de un número
console.log("\n" + Math.tanh(1));
// Retorna la parte entera del número x, eliminando los dígitos fraccionarios
console.log("\n" + Math.trunc(1.7));
console.log(Math.trunc(0.7));
console.log(Math.trunc(-3.7));