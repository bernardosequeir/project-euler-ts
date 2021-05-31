const findCollatzSequenceLength = (startingNumber: number): number => {
  let currentValue = startingNumber;
  let length = 1;
  while (currentValue !== 1) {
    if (currentValue % 2 === 0) {
      currentValue /= 2;
    } else {
      currentValue = currentValue * 3 + 1;
    }
    length++;
  }
  return length + 1;
};

const findLongestCollatzSequence = (limit: number) => {
  let i = 1;
  let longestSequenceLength = 0;
  let longestSequenceStart = 0;
  while (i < limit) {
    const tempSequenceLength = findCollatzSequenceLength(i);
    longestSequenceStart = tempSequenceLength > longestSequenceLength ? i : longestSequenceStart;
    longestSequenceLength = tempSequenceLength > longestSequenceLength ? tempSequenceLength : longestSequenceLength;
    i++;
  }
  return longestSequenceStart;
};


const start = Date.now();
console.log(findLongestCollatzSequence(1000000));
const end = Date.now();
console.log(`Execution took ${end - start}ms`);


export { };
