class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const node = new TreeNode(data, null, null);
    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (data < current.value) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
            break;
          }
        } else {
          if (current.right) {
            current = current.right;
          } else {
            current.right = node;
            break;
          }
        }
      }
    }
  }
  preOrderRecursion() {
    const pre = (node) => {
      if (!node) {
        return;
      }
      console.log(node.value);
      pre(node.left);
      pre(node.right);
    };
    pre(this.root);
  }
  preOrder() {
    if (!this.root) {
      return;
    }
    const stack = [this.root];
    while (stack.length) {
      const n = stack.pop();
      console.log(n.value);
      if (n.right) {
        stack.push(n.right);
      }
      if (n.left) {
        stack.push(n.left);
      }
    }
  }
  inOrderRecursion() {
    const ino = (node) => {
      if (!node) {
        return;
      }
      ino(node.left);
      console.log(node.value);
      ino(node.right);
    };
  }
  inOrder() {
    if (!this.root) {
      return;
    }
    const stack = [];
    let p = this.root;
  }
  postOrder() {}
}

const tree = new BinaryTree();
tree.insert(9);
tree.insert(6);
tree.insert(11);
tree.insert(7);
tree.insert(4);
tree.preOrder();
