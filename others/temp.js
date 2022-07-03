function Parent(val) {
  this.p = val;
}

function Son(val) {
  this.s = val;
  Parent.call(this, val);
}

(function () {
  const c = function () {};
  c.prototype = Parent.prototype;
  Son.prototype = new c();
})();
Son.prototype.constructor = Son;

const test = new Son(9);
console.log(test);
