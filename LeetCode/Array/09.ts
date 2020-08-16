export function isPalindrome(x: number): boolean {
  const chars = String(x).split("");
  for (let index = 0; index < chars.length / 2; index++) {
    const cur = chars[index];
    if (cur !== chars[chars.length - 1 - index]) return false;
  }

  return true;
}

const input = 1211;
console.log(isPalindrome(input));
