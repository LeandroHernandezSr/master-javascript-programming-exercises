function removeOddValues(obj) {
    // your code here
    for (item in obj){
      if(obj[item] % 2 != 0 ){
          delete obj[item];
      }
    }
    return obj;
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
