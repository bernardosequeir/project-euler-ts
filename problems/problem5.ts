const smallestEvenlyDivisibleFromOneToTwenty = () => {
  let smallest = 2520;
  let divisor = 20;

  while (divisor != 1) {
    if (smallest % divisor === 0) divisor--;
    else {
      divisor = 20;
      smallest += 20;
    }
  }
  return smallest;
};

const start = Date.now();
console.log(smallestEvenlyDivisibleFromOneToTwenty());
const end = Date.now();

console.log(`Execution took ${end - start}ms`);




export { };