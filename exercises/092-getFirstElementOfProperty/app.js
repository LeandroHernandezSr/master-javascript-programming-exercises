// Write your function here
function getFirstElementOfProperty(obj,key){
    if(!Array.isArray(obj[key]) || !obj[key]){
        return undefined;
    }
    return obj[key][0]
}
