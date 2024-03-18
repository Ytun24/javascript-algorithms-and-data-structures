/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60
*/

function productOfArray(numArr) {
  if (numArr.length == 1) return numArr[0];
  return numArr.pop() * productOfArray(numArr);
}

console.log("productOfArray") 
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

/*
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

recursiveRange(6) // 21
recursiveRange(10) // 55 
*/

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

console.log("recursiveRange") 
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

/*

Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465
*/

function fib(num) {
  // add whatever parameters you deem necessary - good luck!
  if (num === 1 || num === 2) return 1;
  return fib(num-2) + fib(num-1)
}

console.log("fib") 
console.log(fib(4)) // 3
console.log(fib(10)) // 55