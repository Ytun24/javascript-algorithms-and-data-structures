/*

Pivot Pseudocode
1. It will help to accept three arguments: an arr, a start index, and an end index (these can default to 0 and the arr length minus 1, respectively)
2. Grab the pivot from the start of the arr 
3. Store the current pivot index in a variable (this will keep track of where the pivot should end up)
4. Loop through the arr from the start until the end
   If the pivot is greater than the current element, 
   increment the pivot index variable 
   and then swap the current element with the element at the pivot index
5. Swap the starting element (i.e. the pivot) with the pivot index
6. Return the pivot index

*/

function pivot(arr, startIndex, endIndex) {
   let pivotPoint = 0;
   let pivot = arr[startIndex];

   const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };


   for (let i = 1; i < arr.length; i++) {

        // compare pivot greater than current value
        if (pivot > arr[i]) {
            // increase pivotPoint
            pivotPoint += 1;
            swap(arr, i, pivotPoint);
            console.log(i, pivotPoint);
        }
        console.log(arr, arr[i], pivotPoint);
   }

   swap(arr, startIndex, pivotPoint);
   console.log("result: ", arr, pivotPoint);

   return pivotPoint;
}

// pivot([ 5, 2, 1, 4, 6, 3 ], 0, 5)

// pivot([ 4, 8, 2, 1, 6, 3 ], 0, 5)