/*
Primera versión: la recursión nuca termina porque no tiene un caso base

function esPar(a){
	if(esPar(a - 2) % 2 == 0){
		return true;
	}
	if(esPar(a - 2) % 2 == 1){
		return true;
	}
}

console.log(esPar(57));

Segunda versión: solo funciona con numeros enteros positivos
function esPar(a){
	if(a == 0){
		return true;
	}else if(a == 1){
		return false;
	}else{
		return esPar(a - 2);
	}
}
*/

//Tercera versión: funciona con todos los numeros enteros, no muy grandes 2135861684
function esPar(a){
	if(a == 0){
		return true;
	}else if(a == 1){
		return false;
	}else if(a > 1){
		return esPar(a - 2);
	}else{
		return esPar(a + 2);
	}
}

//Con los casos 50 y 75 bien,
console.log(esPar(50));
console.log(esPar(-57));

/*
Ejercicio resuelto del libro

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);  <--- lo que hace esta parte es
  else return isEven(n - 2);
}

que en el caso de ser negativo convertir el número a positivo
para volver a comparar los dos primeros casos base y en el caso
de ser un número diferente de 1 y 0 usar el ultimo caso que es
restar ese numero para que de uno de los primeros casos base
*/