// Write your function here
function computeAverageOfNumbers(arr) {
    let valor = 0;
    
    if (arr.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < arr.length; i++) {
            valor = valor + arr[i];
        }
        return valor / arr.length;
    }
}
