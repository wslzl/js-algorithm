class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  hashFunc(value) {
    let result = 0;
    for (let i of value) {
      result += i.charCodeAt(0);
    }
    return result % this.size;
  }
  get() {
    const key = this.hashFunc(value);
    return this.table[key];
  }
  set(value) {
    let key = this.hashFunc(value);
    // 线性探测
    while (this.table[key] !== undefined && this.table[key] !== value) {
      key++;
      if (key >= this.size) {
        throw new Error("No Seat");
      }
    }
    if (this.table[key] !== value) {
      this.table[key] = value;
    }
  }
  delete() {}
  has() {}
  display() {
    console.log("total" + this.table.length);
    this.table.forEach((item) => {
      console.log(item);
    });
  }
}

const hash = new HashTable(7);
hash.set("1");
hash.set("6");
hash.set("1a");
hash.set("9c");
hash.set("c9");
hash.display();
