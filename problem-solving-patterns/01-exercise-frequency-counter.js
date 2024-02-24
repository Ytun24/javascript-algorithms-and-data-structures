/*
Frequency Counter - validAnagram
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)
*/

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  // return false if both str length are not equal
  if (str1.length !== str2.length) return false;

  let frequencyCount1 = {};
  let frequencyCount2 = {};

  // loop check frequecy of str1
  for (let char of str1) {
    frequencyCount1[char] = (frequencyCount1[char] || 0) + 1;
  }
  console.log("freq1" + JSON.stringify(frequencyCount1));

  // loop check frequecy of str2
  for (let char of str2) {
    frequencyCount2[char] = (frequencyCount2[char] || 0) + 1;
  }
  console.log("freq2" + JSON.stringify(frequencyCount1));

  //   validate frequecy in str1 and str2 are equal
  for (let key of Object.keys(frequencyCount1)) {
    if (frequencyCount1[key] !== frequencyCount2[key]) {
      return false;
    }
  }
  return true;
}
