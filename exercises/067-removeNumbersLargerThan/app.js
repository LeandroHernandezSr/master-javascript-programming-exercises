let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
    for (item in obj){
        if( obj[item] > num){
            delete obj[item];
        }
    }
    return obj;
}
