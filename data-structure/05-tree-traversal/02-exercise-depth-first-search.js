/*
DFS - PreOrder

1. Create a variable to store the values of nodes visited
2. Store the root of the BST in a variable called current
3. Write a helper function which accepts a node
    3.1 Push the value of the node to the variable that stores the values
    3.2 If the node has a left property, call the helper function with the left property on the node
    3.3 If the node has a right property, call the helper function with the right property on the node
5. Invoke the helper function with the current variable
6. Return the array of values


DFS - PostOrder

3. Write a helper function which accepts a node
   3.1 If the node has a left property, call the helper function with the left property on the node
   3.2 If the node has a right property, call the helper function with the right property on the node
   3.3 Push the value of the node to the variable that stores the values


DFS - InOrder

3. Write a helper function which accepts a node
   3.1 If the node has a left property, call the helper function with the left property on the node
   3.2 Push the value of the node to the variable that stores the values
   3.3 If the node has a right property, call the helper function with the right property on the node
*/

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
  dfsPreOrder() {
    var visited = [];
    var current = this.root;

    function traverse(node) {
      visited.push(node.value);
      if (!node.left && !node.right) {
        return;
      }
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);

    return visited;
  }

  dfsPostOrder() {
    var visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(this.root);
    return visited;
  }

  dfsInOrder() {
    var visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

/*
      10
   6     15
 3  8      20
 */
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

/*
Result: [ 10, 6, 3, 8, 15, 20 ]
 */
console.log(tree.dfsPreOrder());


/*
Result: [ 3, 8, 6, 20, 15, 10 ]
 */
console.log(tree.dfsPostOrder());


/*
Result: [ 3, 6, 8, 10, 15, 20 ]
 */
console.log(tree.dfsInOrder());