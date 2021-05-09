const getLargestThreeDigitPalindrome = () => {
  let [num1, num2] = [999, 999];
  let biggest = 0;
  while (num1 >= 900) {
    while (num2 >= 900) {
      const possiblePalindromeStr = String(num1 * num2);
      if (possiblePalindromeStr[0] === possiblePalindromeStr[5]) {
        if (possiblePalindromeStr[1] === possiblePalindromeStr[4]) {
          if (possiblePalindromeStr[2] === possiblePalindromeStr[3]) {
            biggest = num1 * num2 > biggest ? num1 * num2 : biggest;
          }
        }
      }
      num2--;
    }
    num1--;
    num2 = 999;
  }
  return biggest;
};

const start = Date.now();
console.log(getLargestThreeDigitPalindrome());
const end = Date.now();

console.log(`Execution took ${end - start}ms`);



export { };