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
var maxDepth = function (root) {
  let res = 0;
  const dfs = (node, level) => {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      res = Math.max(res, level);
    }
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  dfs(root, 1);
};
