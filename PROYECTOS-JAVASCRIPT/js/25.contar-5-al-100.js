// Inicializa el contador con un nombre diferente
let countWithFive = 0;

// Itera a través de los números del 1 al 100
for (let i = 1; i <= 100; i++) {
    // Convierte el número a una cadena de texto
    let numberAsString = i.toString();
    
    // Verifica si la cadena contiene el dígito '5'
    if (numberAsString.includes('5')) {
        // Incrementa el contador si cumple con la condición
        countWithFive++;
    }
}

// Muestra el resultado
console.log(`Número de números del 1 al 100 que contienen el dígito 5: ${countWithFive}`);

