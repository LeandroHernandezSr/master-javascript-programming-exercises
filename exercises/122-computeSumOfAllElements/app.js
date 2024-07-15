function computeSumOfAllElements(arr) {
  // your code here
  var suma=0;
  arr.forEach(e=>{
    suma=suma+e;
  });
  return suma;
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
