function transformEmployeeData(array) {
  var arr = [];
  for (let item of array) {
    var obj = {};
    for (let i of item) {
      obj[i[0]] = i[1];
    }
    arr.push(obj);
  }
  return arr;
}



let output = transformEmployeeData([
  [
    ['firstName', 'Joe'],
    ['lastName', 'Blow'],
    ['age', 42],
    ['role', 'clerk'],
  ],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['role', 'manager'],
  ],
]);

console.log(output);