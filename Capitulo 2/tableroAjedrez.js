//Tablero de ajedrez

let lim = 9;

for(let i = 0; i < lim; i++){
	let fila = "", negro = "#", blanco = " ";
	for(let j = 0; j < lim; j++){
		if(j % 2 == 0 ){
			
		}
	}
	console.log(fila);
}


/*
Ejercicio Resuelto

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
    
  }
  board += "\n";
}

console.log(board);


1. La variable board se usara para crear el tablero, se crea con una cadena vacia.
2. Se usan dos ciclos para recorrer ya que es similar a una matriz.
3. El segundo ciclo es para imprimir las columnas (espacio por espacio de la matriz).
4. Dentro del segundo ciclo, se evalua la expresión (x + y) % 2, esta expresion determinas.
si la suma de los indices es un número par, entonces estamos en una casilla blanca (el espacio).
5. Si la expresion (x + y) % 2 == 0, es verdadera osea (es decir que estamos en una casilla blanca)
se agrega un espacio a la cadena-variable board.
6. Si es falso (es decir que estamos en una casilla negra) hace lo mismo pero al contrario
7. Despues de asignar un los caracteres a la fila afuera del ciclo anidado se le concatena un
salto de linea a la cadena-variable board
8. Al final despues de asignar todo, no es necesario que se imprima iteracion por iteracion
como se guarda en una variable se imprime al final y afuera de los dos ciclos
*/





/*
//Tejeda Coñito

let lim = 9, aux = 0;

for(let i = 0; i < lim; i++){
	let fila = "", negro = "#", blanco = " ", aux = 0; 

	for(let j = 0; j < lim; j++){
		fila += negro;
		fila += blanco;
        aux += 2;
        if(aux == lim-1){
          break;
          }
        
	}
    
    if(i % 2 == 0){
      console.log(blanco + fila);
    }else{
      console.log(fila);
    }
	
}

*/
