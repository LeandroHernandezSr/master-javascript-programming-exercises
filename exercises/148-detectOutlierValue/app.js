function detectOutlierValue(string) {
    // your code here
    let oddCount = 0;
    let evenCount = 0;
    let numbers = string.split(' ');
  
    
    for (let num of numbers) {
      if (Number.parseInt(num) % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    
    let isOutlierEven = evenCount > oddCount;
  
    
    for (let i = 0; i < numbers.length; i++) {
      if ((isOutlierEven && Number.parseInt(numbers[i]) % 2 !== 0) || (!isOutlierEven && Number.parseInt(numbers[i]) % 2 === 0)) {
        return i + 1; 
      }
    }
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
