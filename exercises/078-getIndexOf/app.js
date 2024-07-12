// Write your function here
function getIndexOf(ch,str){
    for (let i=0; i < str.length;i++){
        if(str[i] == ch){
            return i;
        }
    }
    return -1;
}

let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
