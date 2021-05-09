const getLargestPrimeFactorOf = (number: number) => {
  let temp = number;
  let largestFactor = 0;

  let counter = 2;
  while (counter * counter < temp) {
    if (temp % counter === 0) {
      temp /= counter;
      largestFactor = counter;
    } else {
      counter++;
    }
  }
  if (temp > largestFactor) {
    largestFactor = temp;
  }

  return largestFactor;
};

const start = Date.now();
console.log(getLargestPrimeFactorOf(600851475143));
const end = Date.now();

console.log(`Execution took ${end - start}ms`);

export { };