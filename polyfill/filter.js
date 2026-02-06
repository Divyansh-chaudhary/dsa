Array.prototype.customFilter = function (callback) {
  const arr = this,
    result = [];
  for (let i = 0; i < arr.length; i++) {
    const res = callback(arr[i], i, arr);
    if (res) result.push(arr[i]);
  }

  return result;
};

const result = [1, 2, 3, 4].customFilter((item, index, arr) => {
  return item < 3;
});
console.log("customFilter: ", result);
