function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (item in obj){
    if(obj[item].length > num){
      delete obj[item];
    }
  }
  return obj;
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
