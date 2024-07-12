function getElementsAfter(array, n) {
  // your code here
  let arreglo=[];
  for(let i=0;i < array.length;i++){
    if(i>n){
      arreglo.push(array[i]);
    }
  }
  return arreglo;
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
