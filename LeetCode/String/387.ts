import { performance } from "perf_hooks";

const t0 = performance.now();

export function firstUniqChar(s: string): number {
  s = s.trim();
  if (s.length === 0) return -1;
  const map: { [k: string]: null | number } = {};
  for (let index = 0; index < s.length; index++) {
    if (map[s[index]] !== undefined) map[s[index]] = null;
    else map[s[index]] = 1;
  }

  for (let index = 0; index < s.length; index++) {
    console.log(map);
    const char = s[index];
    if (map[char] === 1) return index;
  }
  return -1;
}

console.log(firstUniqChar("aa"));
console.log(performance.now() - t0);
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar(" loveleetcode"));
console.log(firstUniqChar(" "));
