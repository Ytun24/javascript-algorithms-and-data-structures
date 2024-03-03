/*
INSERTING A NODE

1. Create a new node
2. Starting at the root
3. Check if there is a root, if not - the root now becomes that new node!
4. If there is a root, check if the value of the new node is greater than or less than the value of the root
5. If it is greater 
6. Check to see if there is a node to the right
   6.1 If there is, move to that node and repeat these steps
   6.2 If there is not, add that node as the right property
7. If it is less
   7.1 Check to see if there is a node to the left
   7.2 If there is, move to that node and repeat these steps
   7.3 If there is not, add that node as the left property


Finding a Node

1. Starting at the root
2. Check if there is a root, if not - we're done searching!
3. If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
4. If not, check to see if the value is greater than or less than the value of the root
5. If it is greater 
   5.1 Check to see if there is a node to the right
   5.2 If there is, move to that node and repeat these steps
   5.3 If there is not, we're done searching!
6. If it is less
   6.1 Check to see if there is a node to the left
   6.2 If there is, move to that node and repeat these steps
   6.3 If there is not, we're done searching!
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  find(val) {
    if (!this.root) return false;

    var found = false;
    var currentNode = this.root;
    while (currentNode && !found) {
      if (val == currentNode.val) {
        found = true;
      } else if (val > currentNode.val) {
        // right
        currentNode = currentNode.right;
      } else if (val < currentNode.val) {
        //left
        currentNode = currentNode.left;
      }
    }
    return found;
  }

  insert(val) {
    var newNode = new Node(val);
    var foundPlace = false;
    if (!this.root) {
      this.root = newNode;
    } else {
      var currentNode = this.root;
      while (!foundPlace) {
        if (val > currentNode.val) {
          // right
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            foundPlace = true;
          }
        } else {
          // left
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            foundPlace = true;
          }
        }
      }
    }
    return this;
  }
}

var tree = new BinarySearchTree();

console.log(tree.insert(10));
console.log(tree.insert(15));
console.log(tree.insert(6));
console.log(tree.insert(12));
console.log(tree.insert(3));
console.log(tree.insert(20));
console.log(tree.insert(50));

console.log(tree.root.left);
console.log(tree.root.right);

console.log(tree.find(10));
console.log(tree.find(12));
console.log(tree.find(50));
console.log(tree.find(3));
console.log(tree.find(55));
