/*
Remove pseudocode

1. If the index is less than zero or greater than the length, return undefined
2. If the index is the same as the length-1, pop
3. If the index is 0, shift
4. Otherwise, using the get method, access the node at the index - 1
5. Set the next property on that node to be the next of the next node
6. Decrement the length
7. Return the value of the node removed
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
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    var removeNode = this.get(index);
    var previousNode = this.get(index-1);
    previousNode.next = removeNode.next;
    this.length--;

    return removeNode;
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

console.log(list.remove(2));
console.log("--------------------");
console.log(list);
console.log(list.get(2));
