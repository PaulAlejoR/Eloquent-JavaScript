// dependiendo de la notación que se ocupe es como podemos
// nombrar las vinculaciones

let sneaker = {
    marca : "nike",
    laces: "planos",
    ciudadesExportación: ["Vietnam", "USA", "Mexico"]
};

console.log(sneaker.marca);
console.log(sneaker.laces);
console.log(sneaker.modelo);

sneaker.marca = "adidas";
sneaker.modelo = "Jordan 4";

console.log(sneaker.marca);
console.log(sneaker.modelo);
sneaker["450yeezy"] = false;
console.log(sneaker["450yeezy"]);


// no se puede crear la propiedad con caracteres que no
// sean la excepcion en la notación de punto (" ") y ("$")
/*console.log(sneaker.450yeezy);
sneaker.450yeezy = false;*/


// vinculaciones que son y no son permitidas
let descripciones = {
	Trabajo: "Fui a trabajar",
	"Árbol tocado": "toque ub arbol",
	34: "numero 34"
};

// asi no se puede entrar a una propiedad
//console.log(descripciones.34);

// forma correcta de poder acceder a propiedades que
// que empiezan con caracteres especificos
console.log("\n" + descripciones[34]);
console.log(descripciones["34"]);


// in y delete
let objeto = {izquierda: 1, derecha: 2};

console.log("\n" + delete objeto.arriba);
let revisar1 = "derecha" in objeto, revisar2 = "abajo" in objeto; 
console.log(revisar1 + "\t" + revisar2);

// keys (llaves-claves)
let claves = Object.keys(sneaker);
//console.log("\n" + claves); <--- la salida es en un cadena porque el array que se obtiene
// se concatena con el operado '+' y lo convierte a una cadena
console.log("\n", claves);
console.log(Object.keys(descripciones));
console.log(Object.keys({mj: 23, dr: 91, sp: 33}));

//assign
let objetoCopia = descripciones;
Object.assign(objetoCopia, objeto);
console.log("\n", objetoCopia);