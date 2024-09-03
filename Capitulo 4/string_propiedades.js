// slice, indexOf y lastIndexOf en strings
console.log("panaderia".slice(0, 3));
console.log("panaderia".indexOf("a"));
console.log("panaderia".lastIndexOf("a"));
console.log("panaderia".lastIndexOf("d"));
console.log("uno dos tres".indexOf("tres") + "\n"); //<--- el caracter "t" que es donde empieza la palabra esta en la posicion 8

// trim
// elimina espacios, tabulaciones, saltos de línea y caracteres similares
console.log("   okey  \n".trim());

// padStart() agrega caracteres a un string con sus parametros
// el primer parametro es la longitud (cantidad) de caracteres 
// que se va agregar al string, ya contando los caracteres del string
// el segundo parametro es el caracter que se va a agregar
let cadena1 = 23, cadena2 = "Huevos peludos";
//console.log(cadena1.padStart(100, "|")); <--- no se ejecuta porque la variable tiene un valor numerico,
//                                              no un string, aparte no se esta usando el método para transformarla en un string
console.log("\n" + String(cadena1).padStart(20, "|"));
console.log(String(cadena2).padStart(13, ":0"));
console.log(String(91).padStart(3, "0"));

// split (dividir) y join (unir)
let oracion = "Huevos revueltos con tocino";
let palabras = oracion.split("o");
console.log("\n" + palabras);
console.log(palabras.join("0"));

// repeat


// acceder a carácteres individuales y obtener su longitud
let maincra = "El minecraft está a la altura del sexo";
console.log(maincra.length);
console.log(maincra[36]);
console.log(maincra[100]);
