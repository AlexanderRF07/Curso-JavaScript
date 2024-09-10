// Inicializa un contador con un nombre único
let count = 0;

// Itera a través de los números del 1 al 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        count++;
    }
}

// Muestra el total de números impares
console.log(`Total de números impares: ${count}`);
