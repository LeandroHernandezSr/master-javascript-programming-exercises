function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let word1L=word1.length;
    let word2L=word2.length;
    let word3L=word3.length;

    if( word1L <= word2L && word1L <= word3L){
        return word1;
    } else if ( word2L <= word1L && word2L <= word3L){
        return word2;
    }else{
        return word3;
    }
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
