// Número de filas
const numFilas = 5;

// Bucle para cada fila
for (let i = 1; i <= numFilas; i++) {
    // Crear una cadena para la fila actual
    let fila = '';

    // Añadir los asteriscos correspondientes a la fila actual
    for (let j = 1; j <= i; j++) {
        fila += '*';
    }

    // Imprimir la fila
    console.log(fila);
}
