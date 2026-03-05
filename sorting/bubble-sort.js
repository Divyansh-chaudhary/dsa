//https://takeuforward.org/data-structure/bubble-sort-algorithm

// brute force

const arr = [10, 34, 9, 12, 43, 1];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr); // worst case O(n2) , average case same

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    let didSwap = false;
    if (arr[i] > arr[j]) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      didSwap = true;
    }
    if (!didSwap) break;
  }
}

console.log(arr); // worst case O(n2) , average case O(n)
