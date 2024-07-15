// Write your function here
function getElementsLessThan100AtProperty(obj,key){

    let newArray=[];

    if(!obj[key] || !Array.isArray(obj[key])){
        return newArray;
    }else{
        obj[key].filter(e=>{
            if(e < 100){
                newArray.push(e);
            }
        })

        return newArray;
    }
}

let obj = {
  key: [1000, 20, 50, 500]
};
let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]
