/**
 * we check from 1st element to next element
 * whichever is bigger place it to next position
 * and keep swapping until reaches at the end to place the largest at the end.
 *
 * then repeat by changing last position to (length - swapped length) so we don't check the swapped number again
 *
 * this case is expensive for sorted array too,
 * so we can add a flag to know if there was any swap or not
 * if there was no swap it means array is sorted which results in O(n)
 */

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
