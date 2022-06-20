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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false;
  }
  let res = false;
  const dep = (node, total) => {
    if (node.left === null && node.right === null && node.val === total) {
      res = true;
    }
    node.left && dep(node.left, total - node.val);
    node.right && dep(node.right, total - node.val);
  };
  dep(root, targetSum);
  return res;
};
