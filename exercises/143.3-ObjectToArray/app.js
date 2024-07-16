function convertObjectToList(obj) {
  // your code here
  var arrX=[];

  for (item in obj){
    let arrY=[];
    arrY.push(item);
    arrY.push(obj[item]);
    arrX.push(arrY);
  }
  return arrX;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
