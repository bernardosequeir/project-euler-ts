export default function factorial(n: number) {
  let result = BigInt(1);

  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }
  return result;
}