function computeFactorialOfN(n) {
    // your code here
    var contador=1;
    var factorial=1;
    for (let i=0;i<n;i++){
        factorial=factorial*contador;
        contador=contador+1;
    }
    return factorial;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
