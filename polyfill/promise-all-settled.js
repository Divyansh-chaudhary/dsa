function myPromiseAllSettled(promises) {
  return new Promise((res) => {
    const results = [];
    let completedCount = 0;
    promises.forEach((p, i) => {
      p.then((response) => {
        results[i] = {
          status: "fulfilled",
          value: response,
        };
      })
        .catch((err) => {
          results[i] = {
            status: "rejected",
            reason: err,
          };
        })
        .finally(() => {
          completedCount++;
          if (completedCount === promises.length) res(results);
        });
    });
  });
}

const p3 = new Promise((res) => setTimeout(() => res(1), 500));
const p1 = new Promise((res) => res(1));
const p4 = new Promise((_, rej) => setTimeout(() => rej("error"), 500));
const p2 = new Promise((_, rej) => rej("reject"));

myPromiseAllSettled([p1, p2, p3, p4]).then((res) => {
  console.log(res);
});

// const promises = Promise.allSettled([p1, p2, p3, p4]);

// promises.then((res) => {
//   console.log(res);
// });
