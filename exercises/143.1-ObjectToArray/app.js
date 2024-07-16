function getAllKeys(obj) {
  // your code here
  var arr=[];
  for (item in obj){
      arr.push(item);
  }
  return arr;
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
