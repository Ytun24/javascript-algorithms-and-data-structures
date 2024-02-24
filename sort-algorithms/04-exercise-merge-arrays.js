/*

Merging Arrays Pseudocode
Given two arrays which are sorted, 
this helper function should create a new array which is also sorted, 
and consists of all of the elements in the two input arrays

1. Create an empty array, take a look at the smallest values in each input array
2. While there are still values we haven't looked at...
   2.1 If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
   2.2 If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
   2.3 Once we exhaust one array, push in all remaining values from the other array


This function should run in O(n + m) time and O(n + m) space 
and should not modify the parameters passed to it.

*/

export function merge(arr1, arr2) {
    mergedArr = [];
    i = 0;
    j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }

    if (i === arr1.length) {
        while (j < arr2.length) {
            mergedArr.push(arr2[j]);
            j++;
        }
    } else if (j === arr2.length) {
        while (i < arr1.length) {
            mergedArr.push(arr1[i]);
            i++;
        }
    }

    return mergedArr;
}

console.log(merge([2, 14, 99, 100], [1, 10, 50]));