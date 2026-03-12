const arr = [1, 4, 2, 5, 6, 4];
const findLinearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) if (arr[i] === num) return i;
  return -1;
};
console.log(findLinearSearch(arr, 9));
