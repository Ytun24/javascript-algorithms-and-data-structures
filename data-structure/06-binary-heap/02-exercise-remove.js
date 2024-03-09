/*
REMOVING

1. Swap the first value in the values property with the last one
2. Pop from the values property, so you can return the value at the end.
3. Have the new root "sink down" to the correct spot...​
   3.1 Your parent index starts at 0 (the root)
   3.2 Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
   3.3 Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
   3.4 If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
   3.5 The child index you swapped to now becomes the new parent index.  
   3.6 Keep looping and swapping until neither child is larger than the element.
   3.7 Return the old root!
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  exactMax() {
    var root = this.values[0];
    var last = this.values.pop();

    this.values[0] = last;

    this.sinkDown();

    return root;
  }

  sinkDown() {
    var currentIndex = 0;
    while (true) {
      var leftChildIndex = 2 * currentIndex + 1;
      var rightChildIndex = 2 * currentIndex + 2;
      var leftChild = this.values[leftChildIndex];
      var rightChild = this.values[rightChildIndex];
      var current = this.values[currentIndex];
      console.log(current, leftChild, rightChild);
      if (leftChild > current && rightChild > current) {
        if (leftChild > rightChild) {
          this.values[leftChildIndex] = current;
          this.values[currentIndex] = leftChild;
          currentIndex = leftChildIndex;
        } else {
          this.values[rightChildIndex] = current;
          this.values[currentIndex] = rightChild;
          currentIndex = rightChildIndex;
        }
      } else if (leftChild > current) {
        this.values[leftChildIndex] = current;
        this.values[currentIndex] = leftChild;
        currentIndex = leftChildIndex;
      } else if (rightChild > current) {
        this.values[rightChildIndex] = current;
        this.values[currentIndex] = rightChild;
        currentIndex = rightChildIndex;
      }

      if (!leftChild || !rightChild) {
        break;
      }
    }
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);

heap.exactMax();
console.log(heap.values);

heap.exactMax();
console.log(heap.values);
