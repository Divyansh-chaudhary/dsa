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
const arr = [1, 2, 3, 4, 5];
const result = rotate(arr, 2);
console.log(result);
