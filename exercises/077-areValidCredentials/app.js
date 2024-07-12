// Write your function here
function areValidCredentials(username,password){
    if(password.length >= 8 && username.length > 3){
        return true;
    } else{
        return false;
    }
}
