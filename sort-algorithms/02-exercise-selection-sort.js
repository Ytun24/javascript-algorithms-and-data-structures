/*
Selection Sort Pseudocode

1. Store the first element as the smallest value you've seen so far.
2. Compare this item to the next item in the array until you find a smaller number.
3. If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
4. If the "minimum" is not the value (index) you initially began with, swap the two values.
5. Repeat this with the next element until the array is sorted.
*/

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr, arr[j], arr[smallestIndex]);
      if (arr[smallestIndex] > arr[j]) {
        smallestIndex = j;
      }
    }
    if (arr[i] != arr[smallestIndex]) {
      swap(arr, i, smallestIndex);
    }
    console.log("ONE TIME PASS!");
  }
  return arr;
}

/* 
Example
selectionSort([33, 24, 67, 8])
[33, 24, 67, 8] 67 24
[33, 24, 67, 8] 8 24
ONE TIME PASS!
[8, 24, 67, 33] 67 24
[8, 24, 67, 33] 33 24
ONE TIME PASS!
[8, 24, 67, 33] 33 67
ONE TIME PASS!

Return: [8, 24, 33, 67]
*/
