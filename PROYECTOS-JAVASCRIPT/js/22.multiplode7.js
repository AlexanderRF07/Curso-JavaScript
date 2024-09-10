let contador = 0;

const inicio = 50;
const fin = 150;

// Bucle para contar múltiplos de 7
for (let i = inicio; i <= fin; i++) {
  if (i % 7 === 0) {
    contador++;
  }
}

// Imprime el resultado
console.log("Número de múltiplos de 7 entre 50 y 150:", contador);
