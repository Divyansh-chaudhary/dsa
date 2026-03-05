class MyPromise {
  constructor(executer) {
    this.state = "pending";
    this.value = undefined;
    this.successCb = [];
    this.failedCb = [];

    const resolve = (value) => {
      if (this.state !== "pending") return;
      this.state = "fulfilled";
      this.value = value;
      this.successCb.forEach((cb) => cb(value));
    };

    const reject = (value) => {
      if (this.state !== "pending") return;
      this.state = "rejected";
      this.value = value;
      this.failedCb.forEach((cb) => cb(value));
    };

    try {
      executer(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleFulfilled = (value) => {
        try {
          const result = onFulfilled ? onFulfilled(value) : value;
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };
      const handleRejected = (value) => {
        try {
          if (!onRejected) {
            reject(value);
            return;
          }
          const result = onRejected ? onRejected(value) : value;
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === "fulfilled")
        queueMicrotask(() => handleFulfilled(this.value));
      else if (this.state === "rejected")
        queueMicrotask(() => handleRejected(this.value));
      else {
        this.successCb.push((value) =>
          queueMicrotask(() => handleFulfilled(value)),
        );
        this.failedCb.push((value) =>
          queueMicrotask(() => handleFulfilled(value)),
        );
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

const promise = new MyPromise((res, rej) => {
  res(3);
});

console.log("start");
promise.then((res) => console.log("promise ", res));
console.log("end");

const promise1 = new MyPromise((res, rej) => {
  rej(3);
});

console.log("start");
promise1
  .then((res) => console.log("promise1 ", res))
  .catch((err) => console.log("promise1 ", err));
console.log("end");

const promise2 = new MyPromise((res, rej) => {
  setTimeout(() => {
    res(5);
  }, 3000);
});

console.log("start");
promise2
  .then((res) => console.log("promise2 ", res))
  .catch((err) => console.log("promise ", err));
console.log("end");

const promise3 = new MyPromise((res, rej) => {
  setTimeout(() => {
    rej("error");
  }, 2000);
});

console.log("start");
promise3
  .then((res) => console.log("promise3 ", res))
  .catch((err) => console.log("promise3 ", err));
console.log("end");
