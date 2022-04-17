class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(element) {}
  insert(element) {}
}

const list = new DoublyLinkedList();
list.append("abc");
