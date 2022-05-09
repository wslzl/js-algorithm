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
    ino(this.root);
  }
  inOrder() {
    if (!this.root) {
      return;
    }
    const stack = [];
    let p = this.root;
    while (stack.length || p) {
      while (p) {
        stack.push(p);
        p = p.left;
      }
      const n = stack.pop();
      console.log(n.value);
      p = n.right;
    }
  }
  postOrderRecursion() {
    const post = (n) => {
      if (!n) {
        return;
      }
      post(n.left);
      post(n.right);
      console.log(n.value);
    };
    post(this.root);
  }
  postOrder() {}
  dfsOrder() {
    const dfs = (n) => {
      if (!n) {
        return;
      }
      console.log(n.value);
      dfs(n.left);
      dfs(n.right);
    };
    dfs(this.root);
  }
  bfsOrder() {
    const queue = [this.root];
    while (queue.length) {
      const head = queue.shift();
      console.log(head.value);
      if (head.left) {
        queue.push(head.left);
      }
      if (head.right) {
        queue.push(head.right);
      }
    }
  }
}

const tree = new BinaryTree();
tree.insert(9);
tree.insert(6);
tree.insert(11);
tree.insert(7);
tree.insert(4);
// tree.dfsOrder();
// tree.bfsOrder();
tree.postOrderRecursion();
