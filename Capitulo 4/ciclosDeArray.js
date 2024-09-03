let arreglo = [1, 2, 3], i = 0;


// funciona sin la variable valor
for(let valor of arreglo){
    //console.log(valor);
    console.log(arreglo[i]);
    i++;
}

for(; i < arreglo.length; i++){
    console.log(arreglo[i]);
}