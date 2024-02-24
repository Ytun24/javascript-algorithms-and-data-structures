/*

mergeSort Pseudocode
1. Break up the array into halves until you have arrays that are empty or have one element
2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
3. Once the array has been merged back together, return the merged (and sorted!) array

*/

function mergeSort(arr) {
   // do recursive break array until arrays are empty or have one element
   if (arr.length === 1 || arr.length === 0) { return arr };

   // find where to break array
   let halfIndex = Math.floor(arr.length/2);
   console.log("mid: ", halfIndex);

   // break array into 2 parts
   let firstPart = arr.slice(0, halfIndex);
   let secondPart = arr.slice(halfIndex);
   console.log(firstPart, secondPart);

   // call recursive function - from solution
   let left = mergeSort(firstPart);
   let right = mergeSort(secondPart);
   return merge(left, right);
}

// Merges two already sorted arrays - from solution
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

mergeSort([5,8,3,6,9])

/* Example
mergeSort([5,8,3,6,9])

mid:  2
[ 5, 8 ] [ 3, 6, 9 ]
mid:  1
[ 5 ] [ 8 ]
mid:  1
[ 3 ] [ 6, 9 ]
mid:  1
[ 6 ] [ 9 ]

Result: [ 3, 5, 6, 8, 9 ]
*/
