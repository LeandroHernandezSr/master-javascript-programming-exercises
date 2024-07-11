function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  return parseInt(word1.length)+parseInt(word2.length)+parseInt(word3.length);
}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
