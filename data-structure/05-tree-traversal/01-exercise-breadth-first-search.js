/*
BFS

1. Create a queue (this can be an array) and a variable to store the values of nodes visited
2. Place the root node in the queue
3. Loop as long as there is anything in the queue
4. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
   4.1 If there is a left property on the node dequeued - add it to the queue
   4.2 If there is a right property on the node dequeued - add it to the queue
5. Return the variable that stores the values
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

  breadthFirstSearch() {
    let queue = [];
    let visited = [];

    queue.push(this.root);

    while (queue.length > 0) {
      var current = queue.shift();
      visited.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

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

//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree.breadthFirstSearch());

/*
Example
      10
   5     13
 2  7  11  16

Queue: [10]
Visited: []

Queue: [5,13]
Visited: [10]

Queue: [13, 2, 7]
Visited: [10, 5]

Queue: [2, 7, 11, 16]
Visited: [10, 5, 13]

Queue: [7, 11, 16]
Visited: [10, 5, 13, 2]

...

Result: [ 10, 5, 13, 2, 7, 11, 16]
*/