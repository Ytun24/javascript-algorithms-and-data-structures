/*
Popping pseudocode

1. If there are no nodes in the list, return undefined
2. Loop through the list until you reach the tail
3. Set the next property of the 2nd to last node to be null
4. Set the tail to be the 2nd to last node
5. Decrement the length of the list by 1
6. Return the value of the node removed
*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  pop() {
    var current = this.head;
    
    if (!current) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return current;
    } 

    while (current.next) {
        var previous = current;
        current = current.next;
        
        console.log(current.next);

        if (current.next === null) {
          previous.next = null;
          this.tail = previous;
          this.length--;
        }
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

class Node {
  constructor(val) {
    this.next = null;
    this.value = val;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO")
list.push("GOODBYE")
list.push("!")


console.log(list.pop());
console.log("----------------------");
console.log(list);
