// Reverse Integer
export function reverse(x: number): number {
  let num = Math.abs(x);
  let output = 0;
  while (num > 0) {
    const pop = num % 10;
    num = Math.floor(num / 10);

    output = output * 10 + pop;
    console.log(output);
  }
  if (output > 2 ** 31) return 0;
  return x >= 0 ? output : -output;
}

// test
const input = -123;
console.log(reverse(input));
