let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for (item in obj2){
            if(!( item in obj1)){
                obj1[item] = obj2[item];
            }
    }
    return obj1;
}