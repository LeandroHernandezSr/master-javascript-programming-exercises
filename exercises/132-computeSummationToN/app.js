function computeSummationToN(n) {
  // your code here
  var nn=1;
  var contador=n;

  while(contador > 1){
      nn=nn+contador;
      contador=contador-1;
  }

  return nn;
}

let output = computeSummationToN(6);
console.log(output); // --> 21

