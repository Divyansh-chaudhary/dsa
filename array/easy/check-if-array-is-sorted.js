const arr = [1, 2, 5, 4, 5];

let isSorted = true;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    isSorted = false;
    break;
  }
}

console.log("isSorted : ", isSorted);
