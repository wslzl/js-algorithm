class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  display() {
    let cur = this.head;
    while (cur) {
      console.log(cur.val);
      cur = cur.next;
    }
  }
  find(val) {
    let cur = this.head;
    while (cur !== null && cur.next !== null && cur.val !== val) {
      cur = cur.next;
    }
    return cur;
  }
  insert(item, val) {
    const newNode = new ListNode(val);
    const cur = this.find(item);
    newNode.next = cur.next;
    cur.next = newNode;
  }
  remove() {}
  reverse() {
    if (!this.head) {
      return null;
    }
    let pre = null;
    let cur = this.head;

    while (cur) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    this.head = pre;
  }
}

const head = new ListNode(3);
const list = new LinkedList(head);
list.insert(3, 1);
list.insert(1, 5);
list.insert(5, 9);
list.insert("", 6);
list.display();
list.reverse();
list.display();
