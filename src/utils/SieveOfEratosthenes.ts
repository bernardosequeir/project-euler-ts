export default function sieveOfErastothenes(upperBound: number) {
  const array: Array<boolean> = Array.from({ length: upperBound }, () => true);
  array[0] = false;
  array[1] = false;
  const squareRootLimit = Math.round(Math.sqrt(upperBound));
  for (let i = 2; i <= squareRootLimit; i++) {
    if (array[i]) {
      for (let j = i ** 2; j <= upperBound; j += i) {
        array[j] = false;
      }
    }
  }

  return array.reduce((newArray: Array<number>, bool, index) => bool ? newArray.concat(index) : newArray, []);
}