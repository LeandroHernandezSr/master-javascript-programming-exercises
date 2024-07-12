// Write your function here
function findMinLengthOfThreeWords(a,b,c){
    let aC=a.length;
    let bC=b.length;
    let cC=c.length;

    if(aC < bC && aC < cC){
        return aC;
    }else if(bC < aC && bC < cC){
        return bC;
    }else{
        return cC;
    }
}