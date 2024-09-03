function rango(inicio, final, paso){
    let arreglo = [], i = 0;
    
    if(paso == undefined){ // Primer caso sin el ultimo argumento (cantidad de saltos en el array)

        if(inicio > final){
            let resultado = inicio - final;
        
            for(i; i < resultado + 1; i++){
                arreglo[i] = final;
                final++;
            }

            return arreglo;
        } else {
            let resultado = final - inicio;
        
            for(i; i < resultado + 1; i++){
                arreglo[i] = inicio;
                inicio++;
            }   

            return arreglo;
        }

    } else {

        // Falta validar con números negativos
        // Caso cuando el primer argumento es mayor al segundo rango(57, 33)
        if(inicio > final){
            let resultado = inicio - final;
            let salto = resultado / paso;
        
            for(i; i < salto; i++){
                arreglo[i] = final;
                final += paso;
            }

            return arreglo;
        } else {
            // Caso en donde el segundo argumento es mayor rango(2, 13)
            let resultado = final - inicio;
            let salto = resultado / paso;
        
            for(i; i < salto; i++){
                arreglo[i] = inicio;
                inicio += paso;
            }   

            return arreglo;
        }
    }
}

console.log(rango(5, 2, -1));