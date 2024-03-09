/*
INSERT PSEUDOCODE

1. Push the value into the values property on the heap
2. Bubble Up:
   2.1 Create a variable called index which is the length of the values property - 1
   2.2 Create a variable called parentIndex which is the floor of (index-1)/2
   2.3 Keep looping as long as the values element at the parentIndex is less than the values element at the child index
       2.3.1 Swap the value of the values element at the parentIndex with the value of the element property at the child index
       2.3.2 Set the index to be the parentIndex, and start over!
*/

class MaxBinarySearch {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    const swap = (arr, idx1, idx2) => {
      const temp = arr[idx1];
      arr[idx1] = arr[idx2];
      arr[idx2] = temp;
    };

    var index = this.values.length - 1;
    var parentIndex = Math.floor((index - 1) / 2);

    while (this.values[index] > this.values[parentIndex]) {
      console.log(index, parentIndex);
      if (this.values[index] > this.values[parentIndex]) {
        swap(this.values, index, parentIndex);
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
      }
      // console.log(index, parentIndex);
    }

    console.log(this.values);
  }
}

var tree = new MaxBinarySearch();

/*
Example
[41 39 33 18 27 12]

1 swap: [41 39 33 18 27 12 55]
         0  1  2  3  4  5  6

2 swap: [41 39 55 18 27 12 33]

Result: [55 39 41 18 27 12 33]

      55
   39     41
18  27  12  33
*/

tree.insert(41);
tree.insert(39);
tree.insert(33);
tree.insert(18);
tree.insert(27);
tree.insert(12);

tree.insert(55);
