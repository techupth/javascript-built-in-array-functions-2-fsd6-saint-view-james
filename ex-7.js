function isPalindrome(string) {
  // Start coding here
  // ทำการสร้าง string ใหม่ที่เป็น reverse ของ string เดิม
  const reversedString = string.split("").reverse().join("");

  // เปรียบเทียบ string เดิมกับ reversedString
  return string === reversedString;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
