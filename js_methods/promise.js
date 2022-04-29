class MyPromise {
  constructor(exector) {
    this.status = "pending";
    this.value = null;
    this.reason = null;
    this.callbacks = [];
    try {
      exector(this.resolve, this.reject);
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
  static all() {}
  static race() {}
}

const x = new MyPromise((resolve, reject) => {
  resolve("");
});
x.then((res) => {
  console.log("x", res);
});
