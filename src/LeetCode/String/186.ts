function reverseWords(s: string[]): void {
  reverseArr(s, 0, s.length - 1);
  let idx = 0;
  let wordStartIdx = 0;
  while (true) {
    if (s[idx] === " " || idx === s.length) {
      reverseArr(s, wordStartIdx, idx - 1);
      wordStartIdx = idx + 1;
    }
    idx++;
    if (idx > s.length) break;
  }

  function reverseArr(arr: string[], start: number, end: number) {
    let left = start,
      right = end;
    while (left < right) {
      const tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;

      left++;
      right--;
    }
  }
}

const Input = [
  "t",
  "h",
  "e",
  " ",
  "s",
  "k",
  "y",
  " ",
  "i",
  "s",
  " ",
  "b",
  "l",
  "u",
  "e",
];
const Output = [
  "b",
  "l",
  "u",
  "e",
  " ",
  "i",
  "s",
  " ",
  "s",
  "k",
  "y",
  " ",
  "t",
  "h",
  "e",
];

reverseWords(Input);
console.log(Input);
console.log(String(Input) === String(Output));
