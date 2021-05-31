import factorial from "../utils/Factorial";

const factorialDigitSum = (n: number) => {
  const resultDigits = String(factorial(n)).split('').map(Number);
  console.log(factorial(n));

  return resultDigits.reduce((sum, num) => sum + num, 0);
};

const start = Date.now();
console.log(factorialDigitSum(100));
const end = Date.now();
console.log(`Execution took ${end - start}ms`);


export { };