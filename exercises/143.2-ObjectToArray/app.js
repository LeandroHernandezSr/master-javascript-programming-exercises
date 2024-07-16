function listAllValues(obj) {
  // your code here

  var arr=[];

  for (item in obj){
      arr.push(obj[item]);
  }
  return arr;
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
