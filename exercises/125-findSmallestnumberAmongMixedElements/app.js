function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length === 0) return 0;
  
  let smallestNumber = Infinity;
  let hasNumber = false;
  
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      if (arr[i] < smallestNumber) {
        smallestNumber = arr[i];
      }
      hasNumber = true;
    }
  }
  
  return hasNumber ? smallestNumber : 0;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
