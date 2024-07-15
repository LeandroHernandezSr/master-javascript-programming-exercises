function getSmallestElementAtProperty(obj, key) {
    // your code here
    if( !obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
        return [];
    }

    var n=0;
    var bandera=false;

    obj[key].forEach(e =>{

        if(bandera == false){
          n=e;
          bandera=true;
        }

        if( e < n){
            n=e;
        }    
    });

    return n;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
