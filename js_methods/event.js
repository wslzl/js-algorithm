class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(type, callback) {
    if (!this.events[type]) {
      this.events[type] = [callback];
    } else {
      this.events[type].push(callback);
    }
  }
  off(type, callback) {
    if (!this.events[type]) {
      return;
    }
    this.events[type] = this.events[type].filter((item) => {
      return item !== callback;
    });
  }
  emit(type, ...args) {
    this.events[type] &&
      this.events[type].forEach((fn) => fn.apply(this, args));
  }
}

const e = new EventEmitter();
function handle(v) {
  console.log("click", v);
}
e.on("click", handle);
e.emit("click", 1, 2);
e.off("click", handle);
e.emit("click", 1, 2);
