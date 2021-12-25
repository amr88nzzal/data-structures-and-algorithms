'use strict';
const insertionSort = (arr) => {
  if (arr.length === 0) {
    return 'the array is empty';
  } else {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          min = j;
          let temp = arr[min];
          arr[min] = arr[i];
          arr[i] = temp;
        }
      }
    }
  }
  return arr;
};
let x = insertionSort([-6,-7,0,5,9,4,8]);
console.log(x);
module.exports=insertionSort;
