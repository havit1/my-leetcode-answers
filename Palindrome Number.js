var isPalindrome = function (x) {
  let digit,
    newNumber = 0;
  let prevNumber = x;
  while (x) {
    digit = x % 10;
    newNumber = newNumber * 10 + digit;
    x = (x / 10) | 0;
  }
  return prevNumber < 0 || newNumber !== prevNumber ? false : true;
};

console.log(isPalindrome(0));
