/*
Get Pseudocode

1. If the index is less than 0 or greater or equal to the length, return null
2. If the index is less than or equal to half the length of the list
   2.1 Loop through the list starting from the head and loop towards the middle
   2.2 Return the node once it is found
3. If the index is greater than half the length of the list
​   3.1 Loop through the list starting from the tail and loop towards the middle
   3.2 Return the node once it is found


Set pseudocode

1. Create a variable which is the result of the get method at the index passed to the function
  1.1 If the get method returns a valid node, set the value of that node to be the value passed to the function
  1.2 Return true
2. Otherwise, return false

*/

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  set(index, value) {
    var node = this.get(index);
    if (!node) return false;
    node.val = value
    return true;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    var half = Math.floor(this.length / 2);

    if (index <= half) {
      var count = 0;
      var node = this.head;
      while (count < index) {
        node = node.next;
        count++;
      }
      return node;
    } else {
      var count = this.length - 1;
      var node = this.tail;
      while (count > index) {
        node = node.prev;
        count--;
      }
      return node;
    }
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

var list = new DoublyLinkedList();
list.push("HELLO");
list.push("Harry");
list.push("Ron");
list.push("Hermione");

console.log(list.get(1));

list.set(1,"HOHOHO")

console.log("--------------");
console.log(list);
