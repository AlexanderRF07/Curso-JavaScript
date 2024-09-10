// Inicializamos un contador para los números pares
let contadorPares = 0;

// Recorremos los números del 1 al 100
for (let i = 1; i <= 100; i++) {
  // Verificamos si el número es par
  if (i % 2 === 0) {
    contadorPares++;
  }
}

// Mostramos el resultado en la consola
console.log("La cantidad de números pares del 1 al 100 es:", contadorPares);
