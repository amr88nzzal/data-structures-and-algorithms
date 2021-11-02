
function binarySearch(arr, key) {
  let mid;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) { return (mid) }
    else if (arr[mid] < key) { low = mid + 1; }

    else { high = mid - 1; }
  }
  return -1;
}
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 11));
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 14));
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 12));