'use strict';

function insertionSort(arr) {
  if (arr.length === 0) {
    return 'empty array';
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
}

insertionSort([81, 14, 43, 12,7,65]);
module.exports = insertionSort;
