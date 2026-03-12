// brute force space complexity O(n)
const removeDuplicates = (arr) => {
  if (arr.length === 0 || arr.length === 1) return arr;
  const results = [arr[0]];
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (results[results.length - 1] === arr[i]) {
      count++;
    } else {
      results.push(arr[i]);
    }
  }
  results.push(...Array(count).fill("_"));
  return results;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5, 6, 6]));

// optimal  space complexity O(1)
const removeDuplicates1 = (arr) => {
  if (arr.length === 0 || arr.length === 1) return arr;
  let i = 0;
  let j = 1;
  let count = 0;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
      count++;
    } else arr[++i] = arr[j++];
  }
  for (let k = i + 1; k < arr.length; k++) arr[k] = "_";
};

const arr = [1, 1, 2, 2, 2, 3, 4];
removeDuplicates1(arr);
console.log(JSON.stringify(arr));
