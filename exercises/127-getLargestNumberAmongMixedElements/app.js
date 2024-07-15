function getLargestNumberAmongMixedElements(arr) {
    // your code here
    var n=0;

    if(arr.length == 0){
        return 0;
    }

    arr.forEach(e =>{
        if( typeof e == 'number' && e > n){
            n=e;
        }
    });

    return n;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
