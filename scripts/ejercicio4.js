let numero = parseInt(prompt("Ingresa un número múltiplo de 5:"));

if (numero % 5 !== 0) {
  alert("no es multiplo.");
} else {
  do {
    console.log(numero);
    numero -= 5;
  } while (numero >= 5);
  
}
