// brute force space O(n) time O(n)
const rotate = (arr, k) => {
  const firstArr = [];
  const secArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.length - k - 1 < i) firstArr.push(arr[i]);
    else secArr.push(arr[i]);
  }
  return [...firstArr, ...secArr];
};

const arr = [1, 2, 3, 4, 5, 6];
const result = rotate(arr, 2);
console.log(result);

const isEven = (num) => num % 2 === 0;
/**
 * reverse the whole array
 * than reverse the k element
 * reverse the n -k elements
 */
const rotate2 = (arr, k) => {
  for (let i = 0; i < arr.length / 2 - (isEven(arr.length) ? 0 : 1); i++)
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];

  for (let i = 0; i < k / 2 - (isEven(k) ? 0 : 1); i++)
    [arr[i], arr[k - 1 - i]] = [arr[k - 1 - i], arr[i]];

  for (let i = k, j = arr.length - 1; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

const arr1 = [1, 2, 3, 4, 5];
const arr3 = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate2(arr1, k);
rotate2(arr3, k);
console.log(JSON.stringify(arr1));
console.log(JSON.stringify(arr3));
