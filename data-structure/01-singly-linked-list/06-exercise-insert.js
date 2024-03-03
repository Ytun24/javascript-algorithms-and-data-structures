/*
Insert pseudocode

1. If the index is less than zero or greater than the length, return false
2. If the index is the same as the length, push a new node to the end of the list
3. If the index is 0, unshift a new node to the start of the list
4. Otherwise, using the get method, access the node at the index - 1
5. Set the next property on that node to be the new node
5. Set the next property on the new node to be the previous next
6. Increment the length
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
  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) {
      this.push(value);
    } else if (index === 0) {
      this.unshift(value);
    } else {
      var previousNode = this.get(index - 1);
      var targetNode = this.get(index);
      var newNode = new Node(value);
      newNode.next = targetNode;
      previousNode.next = newNode;
      this.length++;
    }

    return true;
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
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}

var list = new SinglyLinkedList();

list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.push("<3");
list.push(":)");

console.log(list.insert(2, "HOHOHO"));
console.log("--------------------");
console.log(list);
console.log(list.get(2));
