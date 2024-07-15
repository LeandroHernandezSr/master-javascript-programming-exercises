function getLongestElement(arr) {
    // your code here
    if( arr.length == 0){
        return "";
    }

    var largo=0;
    var palabra="";

    arr.forEach(e=>{
        if(e.length > largo){
            palabra=e;
            largo=e.length;
        }else if(e.length == largo){
            palabra=palabra;
        }
    });

    return palabra;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
