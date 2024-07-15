function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if( !obj[key] || !Array.isArray(obj[key])){
        return [];
    }


    var newArray=obj[key].map(e => e*e);

    return newArray;

}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
