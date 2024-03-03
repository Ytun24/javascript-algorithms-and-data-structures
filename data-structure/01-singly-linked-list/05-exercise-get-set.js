/*
Get pseudocode

1. This function should accept an index
2. If the index is less than zero or greater than or equal to the length of the list, return null
3. Loop through the list until you reach the index and return the node at that specific index


Set pseudocode

1. This function should accept a value and an index
2. Use your get function to find the specific node.
3. If the node is not found, return false
4. If the node is found, set the value of that node to be the value passed to the function and return true
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  set(index, value) {
    var node = this.get(index);
    if (!node) return false

    node.val = value;

    return true;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    var counter = 0;
    var current = this.head;

    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");

console.log(list.get(1));
console.log("--------------------");
console.log(list.set(1, ":)"));
console.log("--------------------");
console.log(list);
