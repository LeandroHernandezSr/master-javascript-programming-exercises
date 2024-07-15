function average(arr) {
  // your code here
  var n=sum(arr);

  return n/arr.length;
}

function sum(arr) {
  // your code here

  var n=0;
  
  if(arr.length == 0){
    return 0;
  }

  arr.forEach(e=>{
    n=n+e;
  });

  return n;

}

console.log(average([1, 2])); // --> 1.5
