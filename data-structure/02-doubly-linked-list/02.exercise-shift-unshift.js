/*
Shifting pseudocode

1. If length is 0, return undefined
2. Store the current head property in a variable (we'll call it old head)
3. If the length is one
   3.1 set the head to be null
   3.2 set the tail to be null
4. Update the head to be the next of the old head
5. Set the head's prev property to null
6. Set the old head's next to null
7. Decrement the length
8. Return old head


Unshifting pseudocode
1. Create a new node with the value passed to the function
2. If the length is 0
3. Set the head to be the new node
4. Set the tail to be the new node
5. Otherwise
   5.1 Set the prev property on the head of the list to be the new node
   5.2 Set the next property on the new node to be the head property 
6. Update the head to be the new node
7. Increment the length
8. Return the list
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;

    var oldHead = this.head;
    if (this.length === 1) {
        this.head = null;
        this.tail = null
    } else {
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
    }
    this.length--;
    return oldHead;
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

var list = new DoublyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");

console.log(list.shift());
console.log("---------------------");
console.log(list);
console.log("---------------------");
console.log(list.unshift("HOHOHO"));
