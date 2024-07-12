function removeNumberValues(obj) {
    // your code here
    for (item in obj){
        if(!isNaN(obj[item])){
            delete obj[item];
        }
    }
    return obj;
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
