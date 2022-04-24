/**
 * 反转链表
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null;
  let cur = head;
  let next = null;
  while (cur) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const head = new ListNode(1, null);
const node1 = new ListNode(2, null);
const node2 = new ListNode(3, null);

head.next = node1;
node1.next = node2;

let h = reverseList(head);
while (h) {
  console.log(h.val);
  h = h.next;
}
