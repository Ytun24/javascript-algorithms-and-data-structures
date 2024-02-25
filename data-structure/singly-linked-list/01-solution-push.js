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
list.push("HELLO")
list.push("GOODBYE")
list.push("!")

/*

console.log(list)
SinglyLinkedList {
  head: Node { val: 'HELLO', next: Node { val: 'GOODBYE', next: [Node] } },
  tail: Node { val: '!', next: null },
  length: 3
}

console.log(list.head.next);
Node { val: 'GOODBYE', next: Node { val: '!', next: null } }

console.log(list.head.next.next);
head next next:  Node { val: '!', next: null }

*/
