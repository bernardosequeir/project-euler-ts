const specialPythagoreanTriplet = (magicValue: number) => {
  for (let a = 1; a < magicValue / 3; a++) {
    for (let b = a; b < magicValue / 2; b++) {
      const c = magicValue - a - b;
      if (isPythagoreanTriplet(a, b, c)) return a * b * c;
    }
  }
  return 0;
};

const isPythagoreanTriplet = (a: number, b: number, c: number): boolean => (a ** 2 + b ** 2 === c ** 2);




const start = Date.now();
console.log(specialPythagoreanTriplet(1000));
const end = Date.now();

console.log(`Execution took ${end - start}ms`);



export { };