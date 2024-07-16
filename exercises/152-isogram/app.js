function isIsogram(text) {
  // your code here
  let lowerCaseText = text.toLowerCase();
  let set = new Set();
  
  for (let char of lowerCaseText) {
      if (set.has(char)) {
          return false;
      } else {
          set.add(char);
      }
  }
  
  return true;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
