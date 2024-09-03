//Operador ||
// Valor inicial puede estar vacío
let valorInicial = null;

// Utilizamos || para asignar un valor por defecto si el valor inicial está vacío
let valorPorDefecto = valorInicial || "Valor por defecto";

console.log(valorPorDefecto); // Imprimirá "Valor por defecto"

//Operador &&
// Variable que representa si un usuario está autenticado
let usuarioAutenticado = false;

// Si el usuario está autenticado, mostramos un mensaje de bienvenida
usuarioAutenticado && console.log("Bienvenido, usuario");

// Variable que representa el nivel de acceso de un usuario
let nivelAcceso = "admin";

// Si el usuario tiene nivel de acceso de administrador, mostramos un mensaje especial
nivelAcceso === "admin" && console.log("Acceso completo concedido");
