function isEvenWithoutModulo(num) {
    // your code here
    num = Math.abs(num);

    if ((num & 1) === 0) {
        return true; // Es par
    } else {
        return false; // Es impar
    }
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
