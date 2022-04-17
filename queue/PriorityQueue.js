class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  dequeue() {
    this.queue.shift();
  }
  enqueue(element, priority) {
    const ele = new QueueElement(element, priority);
    if (this.queue.length === 0) {
      this.queue.push(ele);
      return;
    }

    let isFind = false;
    for (let i = 0; i < this.queue.length; i++) {
      const item = this.queue[i];
      if (item.priority > ele.priority) {
        isFind = true;
        this.queue.splice(i, 0, ele);
        break;
      }
    }
    if (!isFind) {
      this.queue.push(ele);
    }
  }
  display() {
    this.queue.forEach((item) => {
      console.log(item);
    });
  }
}

const queue = new PriorityQueue();
queue.enqueue(1, 6);
queue.enqueue(2, 5);
queue.enqueue(3, 4);
queue.enqueue(4, 9);
queue.dequeue();
queue.display();
