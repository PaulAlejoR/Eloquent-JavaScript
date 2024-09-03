function suma(inicio, final){
    let i = 0, suma = 0;
    
    // Caso cuando el primer argumento es mayor al segundo rango(57, 33)
    if(inicio > final){
        let resultado = inicio - final;
        
        for(i; i < resultado + 1; i++){
            suma += final;
            final++;
        }

        return suma;
    } else {
        // Caso en donde el segundo argumento es mayor rango(2, 13)
        let resultado = final - inicio;
        
        for(i; i < resultado + 1; i++){
            suma += inicio;
            inicio++;
        }

        return suma;
    }
}

console.log(suma(100, 0));