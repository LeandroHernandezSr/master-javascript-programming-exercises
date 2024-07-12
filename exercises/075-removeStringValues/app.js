function removeStringValues(obj) {
    // your code here
    for (item in obj){
        if(isNaN(obj[item])){
            delete obj[item];
        }
    }
    return obj;
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
