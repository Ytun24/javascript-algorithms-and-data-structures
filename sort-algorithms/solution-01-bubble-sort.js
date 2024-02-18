// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // Optimized with noSwaps
  for (let i = arr.length; i > 0; i--) {
    var noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j+1]);
      
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
    console.log("ONE TIME PASS!")
  }
  return arr;
}

/* 
Example
bubbleSort([6, 4, 15, 10]);

[6, 4, 15, 10] 6 4
[4, 6, 15, 10] 6 15
[4, 6, 15, 10] 15 10
ONE TIME PASS!
[4, 6, 10, 15] 4 6
[4, 6, 10, 15] 6 10
[4, 6, 10, 15]
*/

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])