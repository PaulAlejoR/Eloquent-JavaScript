//FizzBuzz

for(let i = 1; i < 101; i++){
	
	if((i % 3 == 0) && (i % 5 == 0)){
		console.log("FizzBuzz");
	} else if (i % 5 == 0){
		console.log("Buzz");
	} else if (i % 3 == 0){
		console.log("Fizz");
	} else {
		console.log(i);
	}
}


/*
Ejercicio Resuelto

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

1. Se crea el for con el limite de 1 a 100.

2. Crear una variable de salida ('output') con una cadena vacia.

3. Crear un if en donde se le saque el residuo del numero de la
iteracion con el numero 3, y si se cumple concatenar "Fizz" a la variable.

4. Crear un if en donde se le saque el residuo del numero de la
iteracion con el numero 5, y si se cumple concatenar "Buzz" a la variable.

5. Si output es una cadena no vacía (es decir, si se ha concatenado al
menos una de las cadenas "Fizz" o "Buzz" a output), entonces se imprime
el valor de output usando console.log(). De lo contrario, si output
sigue siendo una cadena vacía, se imprime el valor de n.

Lo ultimo recuerda el Capitulo 1, tema de "Corto circuito de operadores logicos" ó
"Short-Circuiting of logical operators"

*/
