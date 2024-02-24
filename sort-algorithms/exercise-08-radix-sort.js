/*
RADIX SORT PSEUDOCODE

1. Define a function that accepts list of numbers
2. Figure out how many digits the largest number has
3. Loop from k = 0 up to this largest number of digits
4. For each iteration of the loop:
   4.1 Create buckets for each digit (0 to 9)
   4.2 Place each number in the corresponding bucket based on its kth digit
5. Replace our existing array with values in our buckets, starting with 0 and going up to 9
6. return list at the end!

*/

function radixSort(numArr) {
  const largestDigit = mostDigits(numArr);
  for (let k = 0; k < largestDigit; k++) {
    let buckets = [[], [], [], [], [], [], [], [], [], []];
    for (let i = 0; i < numArr.length; i++) {
        let digit = getDigit(numArr[i], k);
        buckets[digit].push(numArr[i]);
    }
    console.log("buckets: ", buckets);
    numArr = buckets.flat();
    console.log("numArr:" , numArr);
  }
  return numArr;
}

// Radix Sort Helper: from solution
// 1. returns the digit in num at the given place value
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// 2. returns the number of digits in num
function digitCount(num) {
  if (num === 0) return 1; // if no num === 0, it well return - Infinity
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 3. Given an array of numbers, returns the number of digits in the largest numbers in the list
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}



radixSort([1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29])