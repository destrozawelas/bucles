const numero = parseInt(prompt("Ingresa un número:"));

// Verificar si se ingresó un número válido
if (isNaN(numero)) {
  console.log("el numero es par.");
} else if (numero % 2 !== 0) {


  console.log(`Tabla de multiplicación del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
} else {
  console.log("El número ingresado no es impar. No se mostrará la tabla de multiplicación.");
}




