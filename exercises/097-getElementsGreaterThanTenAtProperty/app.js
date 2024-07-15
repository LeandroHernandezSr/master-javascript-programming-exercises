// Write your function here
function getElementsGreaterThan10AtProperty(obj,key){
    
    let newArray=[];

    if(!obj[key] || !Array.isArray(obj[key])){
        return newArray;
    }else{
        
        obj[key].filter(e => {
            if(e > 10){
                newArray.push(e);
            }
        });

        return newArray;
    }
}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]