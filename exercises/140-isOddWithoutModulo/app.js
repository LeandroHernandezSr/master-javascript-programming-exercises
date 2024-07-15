function isOddWithoutModulo(num) {
    // your code here
    num = Math.abs(num);

    if ((num & 1) === 1) {
        return true; // Es impar
    } else {
        return false; // Es par
    }
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
