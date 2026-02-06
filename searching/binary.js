function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
}

console.log(binarySearch([1, 2, 3, 5, 6, 10, 33], 1) === 0);
console.log(binarySearch([1, 2, 3, 5, 6, 10, 33], 2) === 1);
console.log(binarySearch([1, 2, 3, 5, 6, 10, 33], 3) === 2);
console.log(binarySearch([1, 2, 3, 5, 6, 10, 33], 5) === 3);
console.log(binarySearch([1, 2, 3, 5, 6, 10, 33], 6) === 4);
console.log(binarySearch([1, 2, 3, 5, 6, 10, 33], 10) === 5);
console.log(binarySearch([1, 2, 3, 5, 6, 10, 33], 33) === 6);
