const mergeSortedArray = (arr1, arr2) => {
  const results = [];
  let left = 0;
  let right = 0;
  while (left < arr1.length && right < arr2.length) {
    // O(n)
    if (arr1[left] < arr2[right]) {
      results.push(arr1[left]);
      left++;
    } else if (arr1[left] > arr2[right]) {
      results.push(arr2[right]);
      right++;
    } else {
      results.push(arr1[left]);
      results.push(arr2[right]);
      left++;
      right++;
    }
  }
  if (left === arr1.length)
    for (let i = right; i < arr2.length; i++) results.push(arr2[i]);
  else for (let i = left; i < arr1.length; i++) results.push(arr1[i]);
  return results;
};

const mergeSort = (arr) => {
  // O(n log n)
  if (arr.length === 1) return arr;
  const middleIndex = Math.floor(arr.length / 2);
  const leftSortedArr = mergeSort(arr.slice(0, middleIndex)); // O(log n)
  const rightSortedArr = mergeSort(arr.slice(middleIndex, arr.length)); // O(log n)
  return mergeSortedArray(leftSortedArr, rightSortedArr); // O(n)
};

console.log(mergeSort([5, 3, 4, 6, 1, 65, 1, 8, 4, 2, 6, 5, 3, 2, 6, 7, 3, 4]));
