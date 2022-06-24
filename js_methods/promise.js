class MyPromise {
  constructor(executor) {
    this.status = "pending";
    this.value = null;
    this.reason = null;
    this.callbacks = [];
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }
  resolve = (value) => {
    if (this.status !== "pending") {
      return;
    }
    this.status = "fulfilled";
    this.value = value;
    this.callbacks.forEach((item) => item.fulfilled());
  };
  reject = (reason) => {
    if (this.status !== "pending") {
      return;
    }
    this.status = "rejected";
    this.reason = reason;
    this.callbacks.forEach((item) => item.rejected());
  };
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : () => {};
    onRejected = typeof onRejected === "function" ? onRejected : () => {};
    if (this.status === "fulfilled") {
      onFulfilled(this.value);
    }
    if (this.status === "rejected") {
      onRejected(this.reason);
    }
    if (this.status === "pending") {
      this.callbacks.push({
        fulfilled: () => onFulfilled(this.value),
        rejected: () => onRejected(this.reason),
      });
    }
  }
  static all(arr) {
    return new Promise((resolve, reject) => {
      let count = 0;
      const res = [];
      for (let i = 0; i < arr.length; i++) {
        Promise.resolve(arr[i]).then((v) => {
          count++;
          res[i] = v;
          if (count === arr.length) {
            resolve(res);
          }
        });
      }
    });
  }
  static race(arr) {
    let hasValue = fasle;
    let hasError = fasle;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i]
          .then((data) => {
            !hasValue && !hasError && resolve(data);
            hasValue = true;
          })
          .catch((data) => {
            !hasValue && !hasError && reject(data);
            hasError = true;
          });
      }
    });
  }
}

const x = new MyPromise((resolve, reject) => {
  resolve({ x: 1 });
});
x.then((res) => {
  console.log(res);
});
