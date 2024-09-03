// objeto que creara los nodos que se deseen
let nodo = {
    valor: null,
    siguiente: null
};

// objeto que contendra todos los nodos (valores) que se agreguen
// esta referenciado con "lista"
let lista = { // referencia
    nodo_inicial: null,
    indice: 0
};

function arrayLista(arr){

    for(let value of arr){
        let aux = value;
        aux++;

        if(lista.nodo_inicial === null && lista.indice === 0 && value !== aux){
            let nodoNew = nodo;
            nodoNew.valor = value;
            nodoNew.siguiente = aux;
            lista.nodo_inicial = nodoNew;
        }else{
            let nodoNew = nodo;
            nodoNew.valor = value;
            nodoNew.siguiente = aux;
            nodoNew.siguiente = lista.nodo_inicial;
            lista.indice++;
        }
    }

    console.log(lista);
}

let arreglo = [1, 2, 3, 4, 5];

arrayLista(arreglo);