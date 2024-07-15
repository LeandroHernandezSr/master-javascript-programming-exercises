function getLargestElement(arr) {
  // your code here
  if (arr.length == 0){
    return 0;
  }

  var numero=arr[0];

  arr.forEach(e=>{
    if(e > numero){
      numero=e;
    }
  });

  return numero;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;