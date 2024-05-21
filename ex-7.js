function isPalindrome(string) {
  // Start coding here
  let originalWord = string;
  let reverseWord = string.split("").reverse().join("");
  return originalWord === reverseWord;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
