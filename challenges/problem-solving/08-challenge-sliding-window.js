/*
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)
*/

function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
  var seenSubstring = {};
  var start = 0;
  var candidateStart = 0;
  var candidateLength = 0;
  var length = 0;

  for (let i = 0; i < str.length; i++) {
    // check if it already exist
    // if yes set new start from that point
    if (seenSubstring[str[i]]) {
      candidateStart = seenSubstring[str[i]];

      if (candidateStart > start) {
        start = candidateStart;
      }
    }

    console.log("start", str[i], start);

    // keep track of seen object
    seenSubstring[str[i]] = i + 1;

    // check length
    candidateLength = i + 1 - start;

    if (candidateLength > length) {
      length = candidateLength;
    }
  }

  console.log("-------------");
  console.log(length);
  return length;
}

findLongestSubstring("thisishowwedoit"); // 6

// t h i s i s h o w w e  d  o  i  t    --> w e  d  o  i  t
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14

findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6

