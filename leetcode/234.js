/**
 * 回文链表
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let left = head;
  function traverse(right) {
    if (right == null) return true;
    let res = traverse(right.next);
    res = res && right.val === left.val;
    left = left.next;
    return res;
  }
  return traverse(head);
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(1, null);
const node1 = new ListNode(2, null);
const node2 = new ListNode(3, null);
const node3 = new ListNode(2, null);
const node4 = new ListNode(1, null);

head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

const res = isPalindrome(head);
console.log(res);
