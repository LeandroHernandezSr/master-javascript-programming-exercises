function getLengthOfLongestElement(arr) {
    // Your code here
    if(arr.length == 0){
        return 0;
    }

    var largo=0;

    arr.forEach(e=>{
        if( e.length > largo){
            largo=e.length;
        }
    });

    return largo;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
