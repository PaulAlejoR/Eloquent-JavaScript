/*let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a.reverse());*/

let arregloRandom = [], i = 0, tamañoArreglo = 10;

for(i; i < tamañoArreglo; i++){
    arregloRandom[i] = Math.floor(Math.random() * 101);
}

console.log(arregloRandom);
function revertirArray(arreglo){
    let arregloNuevo = [], i = 0, ultimo = arreglo.length - 1;

    for(i; i < arreglo.length; i++){
        arregloNuevo[i] = arreglo[ultimo];
        ultimo--;
    }

    return arregloNuevo;
}

console.log(revertirArray(arregloRandom));