/*
1. Write a Min Binary Heap - lower number means higher priority.
2. Each Node has a val and a priority.  Use the priority to build the heap.
3. Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
4. Dequeue method removes root element, returns it, and rearranges heap using priority.
*/

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    var node =new Node(val, priority);
    this.values.push(node);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const currentNode = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentNode = this.values[parentIdx];
      if (currentNode.priority >= parentNode.priority) break;
      this.values[parentIdx] = currentNode;
      this.values[idx] = parentNode;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    // edge case
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      // no swap
      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let queue = new PriorityQueue();
queue.enqueue("common cold", 5);
queue.enqueue("gunshot wound", 1);
queue.enqueue("high fever", 4);
queue.enqueue("broken arm", 2);
queue.enqueue("glass in foot", 3);

// queue.enqueue('walk dog', 2);
// queue.enqueue('go out', 3);
// queue.enqueue('pay bill', 1);
// queue.enqueue('sleep', 0);

console.log(queue.values);

queue.dequeue();

console.log(queue.values);



