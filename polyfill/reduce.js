let result = [1, 3, 4, 4].reduce((acc, item, index, arr) => {
  acc.set(item, false);
  return acc;
}, new Map());
console.log(result);

Array.prototype.customReduce = function (callback, initialValue) {
  const arr = this;
  let acc = initialValue || arr[0];
  for (let i = initialValue ? 0 : 1; i < arr.length; i++) {
    const item = arr[i];
    acc = callback(acc, item, i, arr);
  }

  return acc;
};

result = [1, 3, 4, 4].customReduce((acc, item, index, arr) => {
  acc.set(item, false);
  return acc;
}, new Map());
console.log("customReduce: ", result);
