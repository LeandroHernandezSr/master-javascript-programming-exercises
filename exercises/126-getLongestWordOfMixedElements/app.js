function getLongestWordOfMixedElements(arr) {
    // your code here

    var palabra="";

    if( arr.length == 0 ){
        return "";
    }

    arr.forEach(e=>{
        if( typeof e == 'string' && e.length > palabra.length){
            palabra=e;
        }
    });

    return palabra;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
