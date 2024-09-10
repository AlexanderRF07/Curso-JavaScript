// Inicializar el contador
let contador = 0;

// Definir el rango
const inicio = 1;
const fin = 50;
const umbral = 25;

// Iterar a través de los números en el rango
for (let i = inicio; i <= fin; i++) {
  // Comprobar si el número es mayor que el umbral
  if (i > umbral) {
    // Incrementar el contador si el número es mayor que el umbral
    contador++;
  }
}

// Imprimir el resultado
console.log("Número de números entre 1 y 50 que son mayores que 25:", contador);
