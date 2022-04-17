class Stack {
  constructor() {
    this.stack = [];
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  push(val) {
    this.stack.push(val);
  }
  pop() {
    return this.stack.pop();
  }
  size() {
    return this.stack.length;
  }
}
