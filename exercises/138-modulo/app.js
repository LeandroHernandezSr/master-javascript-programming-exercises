function modulo(num1, num2) {
    if (isNaN(num1) || isNaN(num2) || num2 === 0) {
        return NaN;
    }

    let resto = num1 - num2 * Math.floor(num1 / num2);

    if (num1 < 0 && resto > 0) {
        resto -= Math.abs(num2);
    } else if (num1 > 0 && resto < 0) {
        resto += Math.abs(num2);
    }

    return resto;
}

let output = modulo(25, 4);
console.log(output); // --> 1
