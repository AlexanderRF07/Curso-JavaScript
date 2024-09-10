let contador = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        contador++;
    }
}

console.log("Cantidad de números del 1 al 50 que son divisibles entre 3:", contador);
