function computeProductOfAllElements(arr) {
  // your code here

  if(arr.length == 0){
    return 0;
  }

  var producto=1;

  arr.forEach(e=>{
      producto=producto*e;
  });

  return producto;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
