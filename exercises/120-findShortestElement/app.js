function findShortestElement(arr) {
    // your code here
    if(arr.length == 0){
        return "";
    }

    var palabra="";
    var bandera=false;

    arr.forEach(e=>{
        if(bandera == false){
            palabra=e;
            bandera=true;
        }
        if(e.length < palabra.length){
            palabra=e;
        }else if (e.length==palabra.length){
            palabra=palabra;
        }
    });

    return palabra;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'