let result = [1, 2, 3, 4].map((item, index, arr) => {
  return item * 2;
});
console.log("original: ", result);

Array.prototype.customMap = function (callback) {
  const arr = this,
    result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
};

result = [1, 2, 3, 4].customMap((item, index, arr) => {
  return item * 2;
});
console.log("customMap: ", result);
