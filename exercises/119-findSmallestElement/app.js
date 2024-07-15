function findSmallestElement(arr) {
    // your code here
    if ( arr.length == 0){
        return 0;
    }

    var n=0;
    var bandera= false;

    arr.forEach(e=>{
        if(bandera == false){
            n=e;
            bandera=true;
        }

        if(e < n){
            n=e;
        }
    });

    return n;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1