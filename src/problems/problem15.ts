import factorial from "../utils/Factorial";

const getNumOfLatticePaths = (gridSize: number) => {
  return factorial(gridSize * 2) / factorial(gridSize) ** 2;
};

const start = Date.now();
console.log(getNumOfLatticePaths(20));
const end = Date.now();
console.log(`Execution took ${end - start}ms`);


export { };
