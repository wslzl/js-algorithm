function Test(x) {
  this.x = x;
}

const obj = new Test(2);

console.log(Test.prototype);
console.log(obj.__proto__);
