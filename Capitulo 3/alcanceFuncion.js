function miFuncion() {
  var variableV = 'var afuera del bloque';
  let variableL = 'let afuera del bloque';
  const variableC = 'const afuera del bloque';
  
  console.log(variableV); // Imprimirá 'var afuera del bloque'
  console.log(variableL); // Imprimirá 'let afuera del bloque'
  console.log(variableC); // Imprimirá 'const afuera del bloque'
  console.log("\n");
  
  {
    console.log(variableV); // Imprimirá 'var afuera del bloque'
    console.log(variableL); // Imprimirá 'let afuera del bloque'
    console.log(variableC); // Imprimirá 'const afuera del bloque'
    console.log("\n");
    
    var VarBloque = 'var dentro del bloque';
    let LetBloque = 'let dentro del bloque';
    const ConstBloque = 'const dentro del bloque';


    console.log(VarBloque); // Imprimirá 'var dentro del bloque'
    console.log(LetBloque); // Imprimirá 'let dentro del bloque'
    console.log(ConstBloque); // Imprimirá 'const dentro del bloque'
    console.log("\n");
  }
  
  console.log('^                         ^');
  console.log('| Se ha salido del bloque |');
  console.log(VarBloque); // Imprimirá 'Variable var bloque'
  //console.log(variableLetBloque); // Esto generaría un error
  //console.log(variableConstBloque); // Esto generaría un error
}

miFuncion();