function removeArrayValues(obj) {
    // your code here
    for (item in obj){
        if(Array.isArray(obj[item])){
            delete obj[item];
        }
    }
    return obj;
}