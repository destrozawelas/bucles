
let numero = parseInt(prompt("Ingrese un número:"));

if (!isNaN(numero)) {

  console.log(`Tabla de multiplicación del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
} else {
  console.log("ingrse un NUMERO.");
}
