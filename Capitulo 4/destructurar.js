// DESTRUCTURACIÓN

// ARRAYS (ARREGLOS)
const numeros = [1, 2, 3, 4];
// Sin destructuración
const primis = numeros[0], segus = numeros[1];

// Con destructuración
const [primero, segundo, tercero] = numeros;
console.log(primero, segundo, tercero);
//console.log(cuarto);
console.log("");

// Usando el operador 'rest'
const [primerr, segundoo, ...resto] = numeros;
console.log(primerr, segundoo, resto);
console.log(resto);
console.log("");

// OBJETOS
const PERSONA = {
  NOMBRE: "Juan",
  EDAD: 30,
  CIUDAD: "Madrid"
};
// Sin destructuración
const nombree = PERSONA.NOMBRE,  edadd = PERSONA.EDAD;

// Con destructuración
const { NOMBRE, EDAD, CIUDAD } = PERSONA;
console.log(NOMBRE, EDAD, CIUDAD);
console.log("");

// Renombrando las variables en la destructuración 
const {NOMBRE: nombrePersona, EDAD: edadPersona} = PERSONA;
console.log(nombrePersona, edadPersona);
console.log("");

// Estableciendo valores si la propiedad no existe
const persona = { nombre: "Juan" };
  
const { nombre, edad = 25 , genero } = persona;
console.log(nombre, edad, genero);  // "Juan", 25, undefined

const { genero: generoModificado = "Masculino"} = persona;
console.log(nombre, edad, generoModificado, genero);  // "Juan", 25, Masculino, undefined
console.log("");


// Con ANIDACION

// ARRAYS
const numbers = [1, [2, 3], 4];
const [one, [two, three], four] = numbers;
console.log(one, two, three, four);
console.log("");

// OBJETOS
const person = {
  name: "Juan",
  adress: {
    street: "Calle Principal",
    city: "Puebla"
  }
};

const {name, adress: {street, city}} = person;
console.log(name, street, city);

// EJEMPLO COMBINADO
const datos = {
  id: 42,
  informacion: {
    nombre: "Juan",
    colores: ["rojo", "verde"]
  }
};
  
const {
  id,
  informacion: { nombreee, colores: [colorPrimario, colorSecundario] }
} = datos;
console.log("");
console.log(id, nombreee, colorPrimario, colorSecundario);
console.log("");


// Destructuración anidada con ARRAYS Y OBJETOS
const arreglo = [1, 2, [3, 4, 4], 6, 7];

const [first, second, [third, ...restInner], ...restOuter] = arreglo;
console.log(first, second, third);
console.log(...restInner, restOuter);

console.log("");

const object = {
  a: 1, b: 2,
  nested: {
    c: 3, d: 4, e: 5
  },
  f: 6, g: 7
}

const {a, b, nested: {c, ...restNested}, ...restOutter} = object;
//const {a, b, nested, ...restOutter} = object;
console.log(a, b, c);
console.log(...restNested, restOutter);