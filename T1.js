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
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;

    let current = this.root;
    const foundIt = false;

    while (current && !foundIt) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  contain(value) {
    if (!this.root) return false;

    let current = this.root;
    let foundIt = false;

    while (current && !foundIt) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        foundIt = true;
      }
    }
    if (!foundIt) {
      return undefined;
    }
    return current;
  }

  // BREADTH FIRST SEARCH
  // BFS

  breadthFirstSearch() {
    let node = this.root;
    let data = [];
    let queue = [];

    queue.push(node);
    // while there's something the queue
    while (queue.length) {
      // remove an item from the queue
      node = queue.shift();
      // now add the item or node to the list
      data.push(node.value);
      // check if there's a left
      if (node.left) {
        queue.push(node.left);
      }
      // check if there's a right
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }

  // DEPTH FIRST SEARCH
  // DFS

  depthFirstSearchPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);

    return data;
  }

  depthFirstSearchPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
    }

    traverse(current);

    return data;
  }

  depthFirstSearchInOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);

    return data;
  }
}

const tree = new BinarySearchTree();
// tree.insert(50);
// tree.insert(25);
// tree.insert(65);
// tree.insert(20);
// tree.insert(35);
// tree.insert(55);
// tree.insert(75);

// console.log(`----------  Inserting ------------`);
// console.log(tree);

// console.log(`----------  Finding ------------`);
// console.log(tree.find(20));
// console.log(tree.find(30));
// console.log(`---------- Contains ------------`);
// console.log(tree.contain(20));
// console.log(tree.contain(300));

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(`----------  BFS ------------`);
console.log(tree.breadthFirstSearch());

console.log(`----------  DFS-PRE-ORDER ------------`);
console.log(tree.depthFirstSearchPreOrder());

console.log(`----------  DFS-POST-ORDER ------------`);
console.log(tree.depthFirstSearchPostOrder());

console.log(`----------  DFS-IN-ORDER ------------`);
console.log(tree.depthFirstSearchInOrder());
