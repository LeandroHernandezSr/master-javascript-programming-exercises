// Write your function here
function getOddLengthWordsAtProperty(obj,key){

    let newArray=[];

    if(!Array.isArray(obj[key]) || !obj[key]){
        return [];
    }

    obj[key].filter(e=>{
        if(e.length % 2 != 0){
            newArray.push(e);
        }
    });

    return newArray;
}
