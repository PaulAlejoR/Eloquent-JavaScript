// unshift y shift
// unshift agrega y shift elimina de una cola
// generar aleatorios random = Math.floor(Math.random() * 21)

let array = [0, 23, 77, 91, 12, 32, 45, 34, 28, 8, 33, 3];

console.log(array);

array.push(1);
console.log(array);

array.unshift(-1);
console.log(array);

array.shift();
console.log(array);

array.shift();
console.log(array);

//indexOf y lastIndexOf

let arr = [7, 10, 23, 3, 91, 28, 33];

console.log("\n" + [0, 1, 2, 3, 2, 1, 0].indexOf(2));
console.log([0, 1, 2, 3, 2, 1, 0].lastIndexOf(2));

console.log(arr.indexOf(123));
console.log(arr.lastIndexOf(-2));
console.log(arr.indexOf(10));
console.log(arr.lastIndexOf(10));
console.log(arr.lastIndexOf(3));


// slice (rebanar)
// cuando tiene 2 parametros (indices) no toma el valor del segundo parametro (indice)
// cuando solo se da un parametro (indice) tomara todo desde ese parametro (indice) hasta el final
// cuando no tiene ningun parametro hace una copia de todo el arreglo

let random = [], i;

for(i = 0; i < 10; i++)
    random[i] = Math.floor(Math.random() * 101)

console.log(random);
// fuera del rango por el indice
//console.log(random.slice(4, 10));
console.log(random.slice(4, 9));
console.log(random.slice(7));
console.log(random.slice(9));
console.log(random.slice(10));
console.log(random.slice());

// concat (concatenar)
var num1 = [[1]];
var num2 = [2, [3]];

var nums = num1.concat(num2);

console.log(nums);
// Da como resultado: [[1], 2, [3]]
num1[0].push(4);// modifica el primer elemento de num1
console.log(nums);// Da como resultado: [[1, 4], 2, [3]]
nums[0].push(23);
//nums.unshift(91);
console.log(nums);