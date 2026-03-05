// https://takeuforward.org/sorting/selection-sort-algorithm
// O(n2)
const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2];

for (let i = 0; i < arr.length - 1; i++) {
  const smallest = { value: arr[i], index: i };
  for (let j = i + 1; j < arr.length; j++) {
    if (smallest.value > arr[j]) {
      smallest.value = arr[j];
      smallest.index = j;
    }
  }
  const temp = arr[i];
  arr[i] = smallest.value;
  arr[smallest.index] = temp;
}

console.log(arr);
