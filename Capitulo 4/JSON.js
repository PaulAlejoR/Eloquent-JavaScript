// funciones JSON.stringify y JSON.parse

// JSON.stringify puede tener como parametros aparte del valor,
// 'replacer': altera el comportamiento del proceso de conversion
// o un array de nombres de propiedades.
// 'space': se usa para agregar espacio en blando a la salida de JSON
// para hacerl más legible, puede ser un número (que especifica el número de espacios en blanco)
// o una cadena (que se usa como espacio)
let string = JSON.stringify({ardilla: false,
                             eventos: ["fin de semana", "toque un arbol"]});

console.log(string);
console.log(JSON.parse(string).eventos);                             
console.log("");

const lego = { numSerie: 42725, coleccion: "Icons", set: "flor de cerezo" };
const JSONStringify = JSON.stringify(lego);
console.log(lego);
console.log("");
// replacer
console.log(JSON.stringify(lego, ["set", "coleccion"]));
// {"set":"flor", "coleccion": "Icons"}
console.log("");

// spacer
console.log(JSON.stringify(lego, null, " "));
/*
{
    "numSerie": 42725,
    "coleccion": "Icons",
    "set": "flor de cerezo"
}
*/
console.log("");

console.log(JSON.stringify(lego, null, "cadena"));
console.log("");

console.log(JSON.stringify(lego, null, "3"));
console.log("");

// Trayendo un archivo JSON para usar las funciones de manera local sin usar navegador
const data = require('C:/Users/Lenovo/JavaScript/Eloquent JavaScript/Capitulo 4/test1.json');
console.log(data);