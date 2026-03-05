function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new TypeError("arguments must be array"));
      return;
    }

    const result = [];
    let completedCount = 0;

    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          result[index] = res;
          completedCount += 1;

          if (completedCount === promises.length) {
            resolve(result);
            return;
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

const promise1 = Promise.resolve(2);
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3);
  }, 1000);
});
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Error");
//   }, 900);
// });
myPromiseAll([promise2, promise1])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
