const findNthPrimeNumber = (limit: number) => {
  let counter = 1;
  const primes = [2];

  while (primes.length < limit) {
    counter += 2;
    let isPrime = true;
    let i = 0;
    while (primes[i] * primes[i] <= counter) {
      if (counter % primes[i] === 0) {
        isPrime = false;
        break;
      }
      i++;
    }
    if (isPrime) {
      primes.push(counter);
    }
  }
  return primes[primes.length - 1];
};

const start = Date.now();
console.log(findNthPrimeNumber(10001));
const end = Date.now();

console.log(`Execution took ${end - start}ms`);
export { };