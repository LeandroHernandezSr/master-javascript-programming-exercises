function getEvenElementsAtProperty(obj, key) {
    // your code here
    if( !obj[key] || !Array.isArray(obj[key])){
      return [];
    }

    var newArray=[];

    obj[key].forEach(e =>{
        if( e % 2 == 0){
          newArray.push(e);
        }
    });

    return newArray;
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
