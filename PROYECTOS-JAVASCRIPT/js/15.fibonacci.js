
function fibonacciSeries(n) {
    let fibonacci = [0, 1];

    
    for (let i = 2; i < n; i++) {
       
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}

const n = 10;
const series = fibonacciSeries(n);

console.log(series);
