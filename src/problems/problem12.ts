const numberOfDivisors = (number: number) => {
  let divisorCount = 0;
  let i = 0;
  const numberSquareRoot = Math.sqrt(number);
  while (i < numberSquareRoot) {
    if (number % i === 0) {
      divisorCount += number / i === i ? 1 : 2;
    }
    i++;
  }
  return divisorCount;
};

const findFirstTriangularNumberWithNDivisors = (N: number): number => {
  let i = 1;
  let divisors = 0;
  let triangularNumber = 0;

  while (divisors < N) {
    triangularNumber += i;
    divisors = numberOfDivisors(triangularNumber);
    i++;
  }
  return triangularNumber;
};



const start = Date.now();
console.log(findFirstTriangularNumberWithNDivisors(500));
const end = Date.now();

console.log(`Execution took ${end - start}ms`);


export { };

