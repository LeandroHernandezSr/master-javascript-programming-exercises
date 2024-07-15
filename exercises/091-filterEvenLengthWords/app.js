function filterEvenLengthWords(words) {
    // your code here
    let newArray=[];

    words.filter(e=>{
        if(e.length % 2 == 0){
            newArray.push(e);
        }
    });
    
    return newArray;
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
