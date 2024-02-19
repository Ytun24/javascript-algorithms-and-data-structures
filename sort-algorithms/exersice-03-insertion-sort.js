/*
Insertion Sort Pseudocode

1. Start by picking the second element in the array
2. Now compare the second element with the one before it and swap if necessary.
3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
4. Repeat until the array is sorted.
*/

/* 
First draft: use swap

function insertionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  
  for(let i = 1; i < arr.length; i++) {
    for(let j = 0; j < (arr.length - (arr.length-i)); j++) {
      console.log(arr, arr[i] , arr[j]);
      if (arr[i] < arr[j]) {
        swap(arr, i, j);
      }

    }
    console.log("ONE TIME PASS!");
  }

  return arr;
}
*/

      
function insertionSort(arr) {

  for(let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for(var j = i - 1; j >= 0; j--) {
      console.log(arr, i , j);

      if (currentValue < arr[j]) {
        arr[j+1] = arr[j];
        break;
      }
    }

    if (j >= 0) {
      arr[j] = currentValue;
    }

    console.log("j = ", j);
    console.log("ONE TIME PASS!");
  }

  return arr;
}


insertionSort([2, 1, 9, 76, 4]);


/* 
Example
insertionSort([2, 1, 9, 76, 4])

[2, 1, 9, 76, 4] 1 0
j =  0
ONE TIME PASS!
[1, 2, 9, 76, 4] 2 1
[1, 2, 9, 76, 4] 2 0
j =  -1
ONE TIME PASS!
[1, 2, 9, 76, 4] 3 2
[1, 2, 9, 76, 4] 3 1
[1, 2, 9, 76, 4] 3 0
j =  -1
ONE TIME PASS!
[1, 2, 9, 76, 4] 4 3
j =  3
ONE TIME PASS!

Return: [1, 2, 9, 4, 76]
*/
