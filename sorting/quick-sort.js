// worst O(n log n)
// pick a pivot
// place smaller in left and higher on right
// repeat for left and right both until left or right elements length is 1
const quickSort = (arr) => {
  if (arr.length === 1 || arr.length === 0) return arr;
  const pivot = 0;
  const leftArr = [],
    rightArr = [];
  for (let i = pivot + 1; i < arr.length; i++) {
    if (arr[i] < arr[pivot] || arr[i] === arr[pivot]) leftArr.push(arr[i]);
    else if (arr[i] > arr[pivot]) rightArr.push(arr[i]);
  }
  return [...quickSort(leftArr), arr[pivot], ...quickSort(rightArr)];
};

console.log(quickSort([4, 3, 56, 7, 3, 2, 2, 1, 44]));
