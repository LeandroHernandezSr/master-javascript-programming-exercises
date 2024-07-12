function getAllLetters(str) {
    // your code here
    let caracteres=[];
    for(let i=0 ; i < str.length ; i++){
        caracteres[i]=str[i];
    }
    return caracteres;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
