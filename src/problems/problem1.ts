const sumOfMultiples = (limit: number, divisor1: number, divisor2: number) => {
  let sum = 0;
  for (let i = 0; i < limit; i++) {
    if (i % divisor1 === 0 || i % divisor2 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumOfMultiples(1000, 5, 3));