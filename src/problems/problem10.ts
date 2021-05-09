import sieveOfEratosthenes from '../utils/SieveOfEratosthenes';

const sumOfPrimesUntil = (limit: number) => sieveOfEratosthenes(limit).reduce((sum, value) => sum + value, 0);


const start = Date.now();
console.log(sumOfPrimesUntil(2000000));
const end = Date.now();

console.log(`Execution took ${end - start}ms`);



export { };