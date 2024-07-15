function filterEvenElements(arr) {
    // your code here
    
    var newArr=[];

    newArr=arr.filter(e => e % 2 == 0);

    return newArr;
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
