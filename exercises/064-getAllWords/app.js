function getAllWords(str) {
    // your code here
    let arregloPalabras=str.split(" ");
    return arregloPalabras;
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
