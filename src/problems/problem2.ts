const evenFibonacciSequenceSum = (limit: number) => {
  let sum = 0;
  let [x, y] = [1, 2];

  while (x < limit) {
    if (x % 2 === 0) {
      sum += x;
    }
    [x, y] = [y, x + y];
  }

  return sum;

};

console.log(evenFibonacciSequenceSum(4000000));