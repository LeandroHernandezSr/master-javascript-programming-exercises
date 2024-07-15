function computeSumBetween(num1, num2) {
    // your code here
    if( num1 > num2){
        return 0;
    }

    var n=0;
    var contador=num1;

    while (contador < num2){
        n=n+contador;
        contador=contador+1;
    }

    return n;
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
