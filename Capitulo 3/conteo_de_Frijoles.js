/*
Para que pueda servir la ultima parte tiene que
pasarse la misma cadena para que sepa de donde va a 
restar ese indice
"huevos".length["huevos" - 1];

USO INCORRECTO:
"huevos".length[String.length - 1];
"String.length" intenta acceder a una propiedad 'length'
de la funcion "String", no de la instancia de la cadena "huevos"

String es el 'constructor' para cadenas de texto en JS y no
tiene una propiedad 'length' predefinida, por lo que es undefined
*/

//Primera version solo para contar el F's
const contarFs = (palabra) => {
    contador = 0;

    for(let i = 0; i < palabra.length; i++) {
        if(palabra[i] == "F"){
            contador += 1;
        }
    }

    return contador;
};

let cadena = "Feo con F de Foco Fundido";
console.log("Contador de Fs " + contarFs(cadena));


//Segunda version para contar caracteres en general
const contarCaracteres = (palabra, caracter) => {
    contador = 0;

    for(let i = 0; i < palabra.length; i++) {
        if(palabra[i] == caracter){
            contador += 1;
        }
    }

    return contador;
};

let string = "Feo con F de Foco Fundido";
console.log("Contador de caracter especifico " + contarCaracteres(cadena, "o"));


/*
La solucion es modular porque se hace dos invocaciones con funciones
diferentes para el primer caso (invocación) que es contar "B" despues ya
se puede usar en cualquier caso (caracter especifico)

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
*/