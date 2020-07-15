function flipInt(n) {
  let digit,
    result = 0;

  while (n) {
    digit = n % 10;
    result = result * 10 + digit;
    n = (n / 10) | 0;
  }

  return result > 0x7fffffff || result < -0x7fffffff - 1 ? 0 : result;
}

// console.log(flipInt(123));
// console.log(flipInt(1534236469));
console.log(flipInt(-2147483648));
// console.log(flipInt(-123));
// console.log(flipInt(0));
