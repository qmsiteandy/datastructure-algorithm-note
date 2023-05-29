class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.queue = [];
    this.path = "";
  }

  insertNode(newNode) {
    let parent = null;
    let x = this.root;
    while (x) {
      parent = x;
      if (newNode.value < x.value) x = x.left;
      else x = x.right;
    }
    if (parent == null) this.root = newNode;
    else {
      if (newNode.value < parent.value) parent.left = newNode;
      else parent.right = newNode;
    }
  }

  bftt(n) {
    if (this.root != null) {
      this.queue.push(this.root);
      for (let i = 0; i < this.queue.length; i++) {
        let currentNode = this.queue[i];
        this.path += currentNode.value + " ";
        if (currentNode.left) this.queue.push(currentNode.left);
        if (currentNode.right) this.queue.push(currentNode.right);
      }
    }
  }

  preOrder(n) {
    if (n != null) {
      this.path += n.value + " ";
      if (n.left) this.preOrder(n.left);
      if (n.right) this.preOrder(n.right);
    }
  }

  inOrder(n) {
    if (n != null) {
      if (n.left) this.inOrder(n.left);
      this.path += n.value + " ";
      if (n.right) this.inOrder(n.right);
    }
  }

  postOrder(n) {
    if (n != null) {
      if (n.left) this.postOrder(n.left);
      if (n.right) this.postOrder(n.right);
      this.path += n.value + " ";
    }
  }

  // Recursively
  //   search(node, target) {
  //     if (node === null || node.value === target) return node;
  //     else if (target < node.value) return this.search(node.left, target);
  //     else return this.search(node.right, target);
  //   }

  // Iteratively
  search(node, target) {
    while (node && node.value !== target) {
      if (target < node.value) node = node.left;
      else node = node.right;
    }
    return node;
  }
}

let bst = new BinarySearchTree();
bst.insertNode(new Node(15));
bst.insertNode(new Node(6));
bst.insertNode(new Node(5));
bst.insertNode(new Node(1));
bst.insertNode(new Node(13));
bst.insertNode(new Node(-7));
bst.insertNode(new Node(3));

// bst.bftt(bst.root);
// console.log(bst.path);

console.log(bst);
console.log(bst.search(bst.root, 6));
