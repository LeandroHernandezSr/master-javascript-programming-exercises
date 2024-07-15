function isEvenWithoutModulo(num) {
    // your code here
    num = Math.abs(num);

    if ((num & 1) === 0) {
        return true; 
    } else {
        return false; 
    }
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
