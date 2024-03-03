/*

Insert pseudocode

1. If the index is less than zero or greater than or equal to the length return false
2. If the index is 0, unshift
3. If the index is the same as the length, push
4. Use the get method to access the index -1
5. Set the next and prev properties on the correct nodes to link everything together
6. Increment the length 
7. Return true


Remove pseudocode

1. If the index is less than zero or greater than or equal to the length return undefined
2. If the index is 0, shift
3. If the index is the same as the length-1, pop
4. Use the get method to retrieve the item to be removed
5. Update the next and prev properties to remove the found node from the list
6. Set next and prev to null on the found node
7. Decrement the length
8. Return the removed node.

*/

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;

    if (index === 0) return this.shift(val);
    if (index === this.length - 1) return this.pop(val);

    var targetNode = this.get(index);
    var prevNode = targetNode.prev;
    var afterNode = targetNode.next;

    prevNode.next = afterNode;
    afterNode.prev = prevNode;
    targetNode.next = null;
    targetNode.prev = null;
    this.length--;

    return targetNode;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var prevNode = this.get(index - 1);
    var indexNode = this.get(index);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    indexNode.prev = newNode;
    this.length++;

    return true;
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
  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
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
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
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
list.push("Harry");
list.push("Ron");
list.push("Hermione");

list.insert(1, "HOHOHO");

console.log(list.get(1));
console.log("----------");
console.log(list);
console.log("----------");
console.log(list.remove(1));
console.log("----------");
console.log(list.get(1));
console.log("----------");
console.log(list);
