function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if(!obj.key || !Array.isArray(obj.key) || obj.key.length === 0){
        return 0;
    }

    var suma = 0;

    obj.key.forEach(e=>{
       suma=suma+e;
    });

    return suma;
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
