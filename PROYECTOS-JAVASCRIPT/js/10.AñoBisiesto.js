function esBisiesto(anio) {
    // Un año es bisiesto si es divisible por 4
    // pero no es divisible por 100, excepto si también es divisible por 400
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

// Ejemplo de uso:
const anio = 2024;
if (esBisiesto(anio)) {
    console.log(`${anio} es un año bisiesto.`);
} else {
    console.log(`${anio} no es un año bisiesto.`);
}
