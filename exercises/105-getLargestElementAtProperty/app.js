function getLargestElementAtProperty(obj, key) {
    // your code here
    if( !obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
      return [];
    }

    var bandera=false;
    var n=0;

    obj[key].forEach(e=>{
          if(bandera === false){
              n=e;
              bandera=true;
          }

          if(e > n){
              n=e;
          }
    });

    return n;
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
