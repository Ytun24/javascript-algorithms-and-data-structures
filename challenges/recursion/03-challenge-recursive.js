// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(text) {
  // add whatever parameters you deem necessary - good luck!
  if (text.length < 2) {
    return true;
  }
        
  var first = text[0];
  var last = text[text.length - 1];

  console.log(first, last);
  console.log(text.slice(1, text.length - 1));

  if (first === last) {
    var nextText = text.slice(1, text.length - 1);
    return isPalindrome(nextText);
  } else {
    return false;
  }
}

console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));