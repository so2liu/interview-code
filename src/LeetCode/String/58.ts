export function lengthOfLastWord(s: string): number {
  let counter = 0;
  let i = s.length - 1;

  while (s[i] === " ") {
    i--;
    if (i === -1) return 0;
  }

  while (i >= 0) {
    if (!s[i] || s[i] === " ") break;
    i--;
    counter++;
  }
  return counter;
}

console.log(lengthOfLastWord(" "));
console.log(lengthOfLastWord("a "));
console.log(lengthOfLastWord("a"));
console.log(lengthOfLastWord(" a"));
