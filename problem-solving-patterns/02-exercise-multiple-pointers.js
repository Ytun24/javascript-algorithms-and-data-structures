/*

Multiple Pointers - countUniqueValues
Implement a function called countUniqueValues, 
which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

Time Complexity - O(n)
Space Complexity - O(n)

Bonus
You must do this with constant or O(1) space and O(n) time.

*/

function countUniqueValues(numArray) {
  // add whatever parameters you deem necessary - good luck!
  let pointer1 = 0;
  let pointer2 = 1;

  const numArrayLength = numArray.length;

  // rewrite new unique value
  while (pointer2 <= numArrayLength) {
    if (numArray[pointer1] !== numArray[pointer2]) {
      pointer1++;
      numArray[pointer1] = numArray[pointer2];
    }
    pointer2++;
  }

  console.log(numArray);

  return pointer1;
}
