function rango(inicio, final){
    let arreglo = [], i = 0;
    
    // Caso cuando el primer argumento es mayor al segundo rango(57, 33)
    if(inicio > final){
        let resultado = inicio - final;
        
        for(i; i < resultado + 1; i++){
            arreglo[i] = final;
            final++;
        }

        return arreglo;
    } else {
        // Caso en donde el segundo argumento es mayor rango(2, 13)
        let resultado = final - inicio;
        
        for(i; i < resultado + 1; i++){
            arreglo[i] = inicio;
            inicio++;
        }

        return arreglo;
    }
}

console.log(rango(1, 10));