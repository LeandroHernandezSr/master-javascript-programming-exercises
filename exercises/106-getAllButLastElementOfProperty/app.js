function getAllButLastElementOfProperty(obj, key) {
  
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) {
      return [];
  }

  var arr = [];

  obj[key].forEach((e, i) => {
      if (i < obj[key].length - 1) {
          arr.push(e);
      }
  });

  return arr;
}


let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
