/*
Unshifting pseudocode

1. This function should accept a value
2. Create a new node using the value passed to the function
3. If there is no head property on the list, set the head and tail to be the newly created node
4. Otherwise set the newly created node's next property to be the current head property on the list
5. Set the head property on the list to be that newly created node
6. Increment the length of the list by 1

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

  unshift(val) {
    var newHead = new Node(val);

    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;

    return this;
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

console.log(list.unshift("HI"));
console.log(list.unshift("HO"));
console.log("--------------------");
console.log(list.head);
