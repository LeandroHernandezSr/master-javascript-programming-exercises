function filterOddLengthWords(words) {
    // your code here
    let newArray=[];

    words.filter(item =>{
        if(item.length % 2 != 0){
            newArray.push(item);
        }
    });

    return newArray;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
