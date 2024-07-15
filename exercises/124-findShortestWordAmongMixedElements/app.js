function findShortestWordAmongMixedElements(arr) {
    if (arr.length === 0) return '';
    
    let shortestWord = '';
    
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
        if (shortestWord === '' || arr[i].length < shortestWord.length) {
          shortestWord = arr[i];
        }
      }
    }
    
    return shortestWord;
  }

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
