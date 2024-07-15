// Write your function here
function getElementsThatEqual10AtProperty(obj,key){
    let newArray=[];

    if(!Array.isArray(obj[key]) || !obj[key]){
        return newArray;
    }

    obj[key].filter(e=>{
        if(e == 10){
            newArray.push(e);
        }
    })

    return newArray;
}
