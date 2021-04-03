const squareOfSum = (limit: number) => {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += i;
  }
  return sum * sum;
};

const sumOfSquares = (limit: number) => {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += i * i;
  }
  return sum;
};

const start = Date.now();
console.log(squareOfSum(100) - sumOfSquares(100));
const end = Date.now();

console.log(`Execution took ${end - start}ms`);
export { };