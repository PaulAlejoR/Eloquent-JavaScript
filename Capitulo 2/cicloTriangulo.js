//Ciclo de un triangulo

let gato = "#";

for(let i = 0; i < 7; i++){
	//console.log(gato += gato);
	switch(i){
		case 0:
			console.log(gato);
			break;
			
		case 1:
			console.log(gato + gato);
			break;
			
		case 2:
			console.log(gato + gato + gato);
			break;
			
		case 3:
			console.log(gato + gato + gato + gato);
			break;
			
		case 4:
			console.log(gato + gato + gato + gato + gato);
			break;
			
		case 5:
			console.log(gato + gato + gato + gato + gato + gato);
			break;
			
		case 6:
			console.log(gato + gato + gato + gato + gato + gato + gato);
			break;
	}
}


/*
Ejercicio resuelto

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);


1. Se declara una variable con el caracter.
2. "variable.length" nos dara la longitud de la cadena en cada iteracion
eso no dara el control para saber donde se va a detener el ciclo.
3. ' line += "#" ' actualizara la variable y agregara otro caracter (#).
4. Imprime la variable que contine la cadena.


NOTA: no se puede usar 'line++', porque esta actualización sucinta solo aplica
para numeros no para cadenas ni valores booleanos.

Segunda opcion
let gato = "";
for (let i = 0; i < 8; i++)
  console.log(gato += "#");}

*/
