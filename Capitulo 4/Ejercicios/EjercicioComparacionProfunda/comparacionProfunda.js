// se aplica el fallo de corto circuito

function igualdadProfunda(a, b){
    if ((typeof null != a && typeof null != typeof b) && (typeof null == b && typeof null != typeof a)){
        console.log("aqui hay null");
    } else {
        console.log("aqui no hay null");
    } 

}

let objeto1 = {
    cadena: "Cadena",
    valor: 23,
    decimales: 91.77,
    sinValor: null,
    sinDefinir: undefined
};

let objeto2 = {
    cadena: "Palabra",
    valor: 32,
    decimales: 91.77,
    conValor: "otra palabra",
    definido: 12
};

let objetoTest = {};
//console.log(typeof a == typeof null);
console.log(igualdadProfunda(objetoTest, objeto1));