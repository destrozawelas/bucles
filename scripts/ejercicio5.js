let suma = 0;

while (true) {
  let entrada = prompt("ingresa los numeros a sumar al finalizar ingrese =:");

  if (entrada === "=") {
    break; 
  }

  let numero = parseFloat(entrada);

  if (!isNaN(numero)) {
    suma += numero;
  } else {
    alert("esta mal ingresa un numero o =.");
  }
}

console.log("La suma da : " + suma);
