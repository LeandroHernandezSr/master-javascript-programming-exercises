function search(array, value) {
  // your code here
  let left = 0;
  let right = array.length - 1;
  
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (array[mid] === value) {
          return mid; // Encontrado, retorna el índice
      } else if (array[mid] > value) {
          right = mid - 1; // Busca en la mitad izquierda
      } else {
          left = mid + 1; // Busca en la mitad derecha
      }
  }
  
  return null; // No encontrado
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4
