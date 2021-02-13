// Implementn Str Str

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function twoPointers(haystack, needle) {
  let pH = 0;
  while (pH <= haystack.length - needle.length) {
    let pN = 0;
    for (; pN < needle.length; pN++) {
      if (needle[pN] === haystack[pH + pN]) continue;
      pH++;
      break;
    }
    if (pN === needle.length) return pH;
  }
  return -1;
}

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function rabinKarp(haystack, needle) {
  const hNeedle = hash(needle);

  let hHaystack = hash(haystack.slice(0, needle.length));

  if (hHaystack === hNeedle)
    if (isSameStr(haystack.slice(0, needle.length), needle)) return 0;
  for (let index = 1; index < haystack.length; index++) {
    hHaystack =
      hHaystack -
      haystack.charCodeAt(index - 1) +
      haystack.charCodeAt(index + needle.length - 1);
    if (hHaystack === hNeedle)
      if (isSameStr(haystack.slice(index, index + needle.length), needle))
        return index;
  }
  return -1;

  function hash(str) {
    let hStr = 0;
    for (let index = 0; index < str.length; index++) {
      hStr += str.charCodeAt(index);
    }
    return hStr;
  }
  function isSameStr(str1, str2) {
    if (str1.length !== str2.length) return false;
    for (let index = 0; index < str1.length; index++) {
      if (str1[index] !== str2[index]) return false;
    }
    return true;
  }
}

// Test
let haystack = "hello",
  needle = "ll";
console.log(twoPointers(haystack, needle));
console.log(rabinKarp(haystack, needle));
