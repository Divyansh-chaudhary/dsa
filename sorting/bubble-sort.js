//https://takeuforward.org/data-structure/bubble-sort-algorithm

// brute force

const arr = [10, 34, 9, 12, 43, 1];

for (let i = arr.length; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

console.log(arr, ": brute force with loop"); // worst case O(n2) , average case same

const recursionBubbleSort = (arr, n) => {
  if (n === 1) return arr;
  for (let i = 0; i < n - 2; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return recursionBubbleSort(arr, n - 1);
};

console.log(
  recursionBubbleSort(arr, arr.length),
  ": brute force with recursion",
); // worst case O(n2) , average case same

for (let i = arr.length; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    let didSwap = false;
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      didSwap = true;
    }
    if (!didSwap) break;
  }
}

console.log(arr, ": brute force and O(n) for already sorted"); // worst case O(n2) , average case O(n)
