let resultado;
let operacion;

while (true) {
  let entrada = prompt("introduzca un numero multiplicacion division suma o resta");

  if (entrada === "=") {
    break;
  } else if (entrada === "suma" || entrada === "resta" || entrada === "multiplicación" || entrada === "división") {
    operacion = entrada;
    continue;
  }

  let numero = parseFloat(entrada);

  if (!isNaN(numero)) {
    if (operacion === undefined) {
      resultado = numero;
    } else {
      if (operacion === "suma") {
        resultado += numero;
      } else if (operacion === "resta") {
        resultado -= numero;
      } else if (operacion === "multiplicación") {
        resultado *= numero;
      } else if (operacion === "división") {
        if (numero !== 0) {
          resultado /= numero;
        } else {
          alert("No se puede dividir por cero.");
        }
      }
    }
  } else {
    alert("no valido ingrese suma resta multiplicacion.");
  }
}

console.log("El resultado de la operación es: " + resultado);
