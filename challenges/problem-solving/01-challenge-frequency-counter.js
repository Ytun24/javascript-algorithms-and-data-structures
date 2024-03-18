/*

Frequency Counter - sameFrequency

Write a function called sameFrequency. 
Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)

Example:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/

function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  let freq1 = {};
  let freq2 = {};

  if (num1.toString().length !== num2.toString().length) return false;

  for (let digit of num1.toString()) {
    console.log(digit);
    if (freq1[digit]) {
      freq1[digit] += 1;
    } else {
      freq1[digit] = 1;
    }
  }

  for (let digit of num2.toString()) {
    if (freq1[digit] && freq1[digit] > 0) {
      freq1[digit] -= 1;
    } else {
      return false;
    }
  }
  return true;
}
