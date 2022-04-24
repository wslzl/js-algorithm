class Observer {
  constructor(data) {
    this.walk(data);
  }
  walk(data) {
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = data[key];
      this.defineReactive(data, key, value);
    }
  }
  defineReactive(data, key, value) {
    Object.defineProperty(data, key, {
      get() {
        return value;
      },
      set(newVal) {
        if (value === newVal) {
          return;
        }
        console.log("改变了");
        value = newVal;
      },
    });
  }
}
function observer(data) {
  return new Observer(data);
}
const data = {
  x: 1,
  y: 2,
};
observer(data);
console.log(data.x, data.y);
data.x = 3;
console.log(data.x, data.y);
data.y = 4;
console.log(data.x, data.y);
