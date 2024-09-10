// Inicializa el contador con un nombre diferente
let countDivisibles = 0;

// Itera a través de los números del 1 al 30
for (let i = 1; i <= 30; i++) {
    // Verifica si el número es divisible por 3 o por 4
    if (i % 3 === 0 || i % 4 === 0) {
        // Incrementa el contador si cumple con la condición
        countDivisibles++;
    }
}

// Muestra el resultado
console.log(`Número de números del 1 al 30 divisibles por 3 o por 4: ${countDivisibles}`);
