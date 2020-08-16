import { randomBytes, randomFillSync } from "crypto";

function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) return false;

  const map = {};
  for (let index = 0; index < magazine.length; index++) {
    const found = map[magazine[index]];
    if (found !== undefined) map[magazine[index]]++;
    else map[magazine[index]] = 1;
  }

  for (let index = 0; index < ransomNote.length; index++) {
    const char = ransomNote[index];
    if (map[char] === undefined) return false;
    map[char]--;
    if (map[char] < 0) return false;
  }
  return true;
}

console.log(canConstruct("aab", "baa"));
