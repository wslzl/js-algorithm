class BasicSort {
  constructor(arr = []) {
    this.array = arr;
    this.len = arr.length;
  }
  // O(n^2)
  bubbleSort() {
    for (let i = this.len - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }
  }
  selectionSort() {
    let minIndex = 0;

    for (let i = 0; i < this.len - 1; i++) {
      minIndex = i;
      for (let j = i + 1; j < this.len; j++) {
        if (this.array[j] < this.array[minIndex]) {
          minIndex = j;
        }
      }
      this.swap(i, minIndex);
    }
  }
  insertionSort() {
    for (let i = 0; i < this.len; i++) {
      let j = i;
      let temp = this.array[i];
      while (j > 0 && this.array[j - 1] > temp) {
        this.array[j] = this.array[j - 1];
        j--;
      }
      this.array[j] = temp;
    }
  }
  shellSort() {
    let gap = Math.floor(this.len / 2);
    while (gap >= 1) {
      for (let i = gap; i < this.len; i++) {
        let j = i;
        let temp = this.array[i];
        while (j > gap - 1 && temp < this.array[j - gap]) {
          this.array[j] = this.array[j - gap];
          j -= gap;
        }
        this.array[j] = temp;
      }
      gap = Math.floor(gap / 2);
    }
  }
  quickSort() {
    const quick = (arr) => {
      if (arr.length <= 1) {
        return arr;
      }
      let left = [];
      let right = [];
      const middle = arr.splice(Math.floor(this.len / 2), 1)[0];
      arr.forEach((val) => {
        val >= middle ? right.push(val) : left.push(val);
      });
      return quick(left).concat(middle, quick(right));
    };
    console.log(quick(this.array));
  }
  swap(x, y) {
    const temp = this.array[x];
    this.array[x] = this.array[y];
    this.array[y] = temp;
  }
  display() {
    this.array.forEach((item) => {
      console.log(item);
    });
  }
}

const arr = [3, 8, 1, 4, 6, 2, 7, 5, 9, 0];
const s = new BasicSort(arr);
// s.bubbleSort();
// s.selectionSort();
// s.insertionSort();
// s.shellSort();
s.quickSort();
s.display();
