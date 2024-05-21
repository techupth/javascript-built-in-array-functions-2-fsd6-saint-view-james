function isPalindrome(string) {
  // Start coding here

  let stringReverse =
    string.split("").reverse().join("") === string ? true : false;
  return stringReverse;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
