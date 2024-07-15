function getLengthOfShortestElement(arr) {
    // your code here
    if( arr.length == 0){
        return 0;
    }

    var corto=0;
    var bandera=false;

    arr.forEach(e=>{
        if( bandera == false){
            corto=e.length;
            bandera=true;
        }

        if(e.length < corto){
            corto=e.length;
        }
    });

    return corto;
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
