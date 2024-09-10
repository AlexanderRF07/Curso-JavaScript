function determinarSigno(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}

// Ejemplo de uso:
const numero = parseFloat(prompt("Introduce un número:"));
const resultado = determinarSigno(numero);
alert(`El número ${numero} es ${resultado}.`);
