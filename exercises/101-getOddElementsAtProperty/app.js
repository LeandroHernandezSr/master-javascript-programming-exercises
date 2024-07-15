function getOddElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key] || !Array.isArray(obj[key])){
      return [];
    }

    let array=[];

    obj[key].filter(e=>{
        if(e % 2 != 0){
          array.push(e);
        }
    });

    return array;
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
