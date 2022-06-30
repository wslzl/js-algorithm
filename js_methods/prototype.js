function Parent(val) {
  this.p = val;
}

Parent.prototype.pFun = function () {
  console.log(this.p);
};

/*
 * 原型链继承
 *
 * 优点：
 * 简单，易实现
 *
 * 缺点：
 * 无法实现多继承
 * 创建子类实例无法向父类构造函数中传参数
 */
function Son1(val) {
  this.s1 = val;
}

Son1.prototype = new Parent(8);

/*
 * 借用构造函数继承
 *
 * 优点：
 * 子类构造函数可以向父类构造函数中传递参数
 * 可以实现多继承
 *
 * 缺点：
 * 不能继承原型属性和方法，只能继承父类的实例属性和方法
 */
function Son2(val) {
  this.s2 = val;
  Parent.call(this, val);
}

/*
 * 原型式继承（实例继承）
 *
 * 优点：
 * 简单，不限制调用方式
 *
 * 缺点：
 * 不能多次继承
 */
function Son3(val) {
  const instance = new Parent(val);
  instance.s3 = val;
  return instance;
}

/*
 * 组合式继承
 *
 * 优点：
 * 可以继承属性和方法，并且可以继承原型的属性和方法
 *
 * 缺点：
 * 调用了两次父类，所以产生了两份实例
 */
function Son4(val) {
  Parent.call(this);
}

Son4.prototype = new Parent();
Son4.prototype.constructor = Son4;

/*
 * 寄生组合继承
 *
 * 优点：
 *
 * 缺点：
 *
 */
function Son5(val) {
  Parent.call(this, val);
}
(function () {
  const cons = function () {};
  cons.prototype = Parent.prototype;
  Son5.prototype = new cons();
})();
Son5.prototype.constructor = Son5;

// Test
const p = new Parent();
p.pFun();

const s = new Son5(9);
s.pFun();
