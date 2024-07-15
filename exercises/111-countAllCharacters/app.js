// Write your function here
function countAllCharacters(string){
    if(string.length == 0){
        return {};
    }

    var obj={};

    for(let i=0; i<string.length;i++){
        if(obj[string[i]]){
            obj[string[i]]=obj[string[i]]+1;
        }else{
            obj[string[i]]=1;
        }
    }

    return obj;
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
