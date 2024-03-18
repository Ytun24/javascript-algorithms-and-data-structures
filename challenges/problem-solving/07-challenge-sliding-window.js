/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. 
If there isn't one, return 0 instead.

Examples:
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3 [4,16,22]
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5 [16,22,5,7,8]
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2 [3, 8]
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

Time Complexity - O(n)
Space Complexity - O(1)
*/

function minSubArrayLen(numArr, targetNum) {
  var left = 0;
  var right = 1;
  var sum = numArr[left] + numArr[right];
  var length = Infinity;
  var candidateSum = sum;
  var candidateLength = 0;

  while (left <= right && right < numArr.length ) {
    // console.log(candidateSum);
    // console.log(left, right);
    // console.log("--------");
    if (candidateSum >= targetNum) {
      candidateLength = right - left + 1;
      candidateSum -= numArr[left];
      if (left === right) return 1;
      if (length >= candidateLength) length = candidateLength;
      left++;
    } else {
      right++;
      candidateSum += numArr[right];
    }

  }

  return (length !== Infinity) ? length : 0;

}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log("--------");
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log("--------");
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log("--------");
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3 [4,16,22]
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5 [16,22,5,7,8]
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2 [3, 8]
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0
