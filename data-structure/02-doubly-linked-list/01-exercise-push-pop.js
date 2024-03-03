/* 
Pushing pseudocode

1. Create a new node with the value passed to the function
2. If the head property is null set the head and tail to be the newly created node 
3. If not, set the next property on the tail to be that node
4. Set the previous property on the newly created node to be the tail
5. Set the tail to be the newly created node
6. Increment the length
7. Return the Doubly Linked List


Popping pseudocode
1. If there is no head, return undefined
2. Store the current tail in a variable to return later
3. If the length is 1, set the head and tail to be null
4. Update the tail to be the previous Node.
5. Set the newTail's next to null
6. Decrement the length
7. Return the value removed

*/

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    var lastNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      var newLastNode = lastNode.prev;
      newLastNode.next = null;
      this.tail = newLastNode;
    }

    this.length--;
    // remove lingering connection to access other node
    lastNode.prev = null;
    return lastNode;
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
list.push("GOODBYE");
list.push("!");

console.log(list.pop());

console.log("---------------------")
console.log(list);
