function isPalindrome(s) {
  var sNoSpace = s.replace(/\s/g,'')
  var stringReverse = sNoSpace.split("").reverse().join("");

  return sNoSpace == stringReverse;
}

// console.log(isPalindrome("abba"))
// console.log(isPalindrome("not"))
// console.log(isPalindrome("a man a plan a canal panama"))
// console.log(isPalindrome("this is not a palindrome"))



/* ORIGINAL CODE
function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("");
  return s == stringReverse;
}

*/


module.exports = isPalindrome;
