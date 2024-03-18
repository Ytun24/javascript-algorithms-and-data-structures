/*
Recursive - reverse
Write a recursive function called reverse which accepts a string and returns a new string in reverse.

Example
reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir
*/

function reverse(string) {
  // add whatever parameters you deem necessary - good luck!
  let reverseStr = "";

  if (string.length === 0) return "";

  reverseStr = reverseStr.concat(string[string.length - 1]);

  return reverseStr.concat(reverse(string.slice(0, string.length - 1)));
}
