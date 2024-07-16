function getStringLength(string) {
    // your code here
    var contador=0;
    for (let i of string){
        contador=contador+1;
    }
    return contador;
}

let output = getStringLength('hello');
console.log(output); // --> 5
