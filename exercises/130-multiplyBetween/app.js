function multiplyBetween(num1, num2) {
    // your code here
    if (num1 > num2){
        return 0;
    }

    var n=1;
    var cont=num1;


    while(cont < num2){
        n=n*(cont);
        cont+=1;
    }

    return n;

}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
