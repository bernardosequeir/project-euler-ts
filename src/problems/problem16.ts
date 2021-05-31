const powerDigitSum = (power: number) => {
  const powerResult = BigInt(2 ** power);

  const resultDigits = String(powerResult).split('').map(Number);

  return resultDigits.reduce((sum, num) => sum + num, 0);

};

const start = Date.now();
console.log(powerDigitSum(1000));
const end = Date.now();
console.log(`Execution took ${end - start}ms`);


export { };
