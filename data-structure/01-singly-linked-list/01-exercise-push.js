/*
Pushing pseudocode
Let's visualize this!

1. This function should accept a value
2. Create a new node using the value passed to the function
3. If there is no head property on the list, set the head and tail to be the newly created node
4. Otherwise set the next property on the tail to be the new node 
   and set the tail property on the list to be the newly created node
5. Increment the length by one
6. Return the linked list
*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var node = new Node(val);
    if (this.head) {
      this.tail.next = node;
      this.tail = new Node(val); // node
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  }
}

class Node {
  constructor(val) {
    this.next = null;
    this.value = val;
  }
}

var first = new SinglyLinkedList();

first.push("HELLO");
first.push("GOODBYE");
first.push("!");

console.log(first);
console.log(first.head.next);
console.log(first.head.next.next);
