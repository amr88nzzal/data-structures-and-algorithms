'use strict';

function _mergeSort(arr) {
  const n = arr.length;
  if (n > 1) {
    const mid = Math.ceil(n / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(_mergeSort(left), _mergeSort(right));
  } else {
    return arr;
  }
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  let k = [];
  console.log('left  ', left);
  console.log('right  ', right);
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      k.push(left[i]);
      i++;
    } else {
      k.push(right[j]);
      j++;
    }
  }

  return k.concat(left.slice(i)).concat(right.slice(j));
}
console.log(_mergeSort([30, 20, 40, 5, 90, 80, 10]));

module.exports = _mergeSort;
