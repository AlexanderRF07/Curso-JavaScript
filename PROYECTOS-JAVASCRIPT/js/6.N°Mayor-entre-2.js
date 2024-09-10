function encontrarMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

const numero1 = 7;
const numero2 = 12;
console.log("El número mayor es:", encontrarMayor(numero1, numero2));
