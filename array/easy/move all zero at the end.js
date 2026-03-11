// time O(n) space O(n)
const moveZero = (arr) => {
  const results = [];
  arr.forEach((num) => {
    if (num !== 0) results.push(num);
  });
  results.push(...Array(arr.length - results.length).fill(0));
  return results;
};
// time O(n) space O(1)
const moveZero2 = (arr) => {
  let lastZeroIndex = null; //1
  arr.forEach((num, i) => {
    if (num === 0 && lastZeroIndex === null) {
      lastZeroIndex = i;
    } else if (num !== 0 && lastZeroIndex !== null) {
      [arr[lastZeroIndex], arr[i]] = [arr[i], arr[lastZeroIndex]];
      lastZeroIndex++;
    }
  });
};
const arr = [1, 0, 0, 4, 0, 2, 4, 0, 2];
console.log("original:", JSON.stringify(arr));
const results = moveZero2(arr);
console.log("results :>> ", JSON.stringify(results));
console.log("arr :>> ", JSON.stringify(arr));
