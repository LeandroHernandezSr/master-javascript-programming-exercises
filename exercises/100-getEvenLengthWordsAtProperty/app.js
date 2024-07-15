function getEvenLengthWordsAtProperty(obj, key) {
    // your code here

    let newArray=[];

    if(!Array.isArray(obj[key]) || !obj[key]){
      return [];
    }

    obj[key].filter(e => {
        if(e.length % 2 == 0){
          newArray.push(e);
        }
    });

    return newArray;
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
