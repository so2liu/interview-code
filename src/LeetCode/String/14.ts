export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  let index = 0;
  while (true) {
    const prefixChar = strs[0].length > index ? strs[0][index] : undefined;
    if (!prefixChar) return strs[0].slice(0, index);

    for (const str of strs) {
      if (str[index] !== prefixChar) return str.slice(0, index);
    }
    index++;
  }
}

console.log(longestCommonPrefix(["flower", "flow", "flight", "f"]));
console.log(longestCommonPrefix([]));
