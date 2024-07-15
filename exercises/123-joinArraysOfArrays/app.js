function joinArrayOfArrays(arr) {
  // your code here
  var newArr=[];

  arr.forEach(e=>{
      newArr=newArr.concat(e);
  });

  return newArr;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
