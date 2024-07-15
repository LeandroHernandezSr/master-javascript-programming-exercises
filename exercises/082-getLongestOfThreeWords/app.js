function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let word1L=word1.length;
    let word2L=word2.length;
    let word3L=word3.length;
    let palabra;

    if(word1L >= word2L && word1L >= word3L){
        palabra=word1;
    }else if( word2L >= word1L && word2L >= word3L){
        palabra=word2;
    }else{
        palabra=word3;
    }
    return palabra;
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
