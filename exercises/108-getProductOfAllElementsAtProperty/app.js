function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if( !obj.key || !Array.isArray(obj.key) || obj.key.length === 0){
        return 0;
    }

    var prod=1;

    obj.key.forEach(e => {
        prod=prod*e;
    });

    return prod;
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
