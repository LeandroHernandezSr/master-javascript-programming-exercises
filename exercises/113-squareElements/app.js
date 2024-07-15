function squareElements(arr) {
  // your code here
  var newArr=[];

  arr.forEach(e => {
      newArr.push(e*e);
  });

  return newArr;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
