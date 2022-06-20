/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let res = 0;
  const dep = (node) => {
    if (node === null) {
      return;
    }
    dep(node.left);
    if (
      node.left !== null &&
      node.left.left === null &&
      node.left.right === null
    ) {
      res += node.left.val;
    }
    dep(node.right);
  };
  dep(root);
  return res;
};
