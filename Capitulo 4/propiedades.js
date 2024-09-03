//Notación con punto (.)
let persona = {
    nombre: "Juan",
    edad: 30,
    //excepciones
    _guionBajo: "cadena",
    $signoDinero: 23,
    77: "luka doncic",
    45: "numero"
  };
  
  console.log(persona.nombre); // "Juan"
  console.log(persona.edad); // 30
  console.log(persona._guionBajo);
  console.log(persona.$signoDinero);
  console.log(persona[45]);
  console.log(persona[77]);


  //Notación con corchetes ([])
  let person = {
    nombre: "Juan",
    apellido: "alejo",
    "fecha de nacimiento": "01/01/1990",
    //"01/01/1990": "FN",
    edad: 30,
    1: "uno"
  };
  
  console.log("\n" + person["nombre"]); // "Juan"
  console.log(person[nombre]); // "Juan"

  
  console.log(person["fecha de nacimiento"]); // "01/01/1990"
  //console.log(person["01/01/1990"]); // "FN"
  
  let propiedad = "edad", _segundoNombre = "apellido";
  console.log(person[propiedad]); // 30
  console.log(person[_segundoNombre]); // alejo
  person.edad = 33;
  person.apellido = "ricaño";

  console.log(person[propiedad]);
  console.log(person[_segundoNombre]);
  console.log(person[1]);
  