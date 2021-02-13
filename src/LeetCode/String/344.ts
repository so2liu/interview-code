import { reverse } from "dns";

function reverseString(s: string[]): void {
  // if (s.length <= 1) return;
  for (let index = 0; index < Math.floor(s.length / 2); index++) {
    const tmp = s[index];
    s[index] = s[s.length - index - 1];
    s[s.length - index - 1] = tmp;
    console.log(s);
  }
}

const input = ["h", "e", "l", "l", "o"];
reverseString(input);
console.log(String(input) === String(["o", "l", "l", "e", "h"]));

const input2 = ["H", "a", "n", "n", "a", "h"];
reverseString(input2);
console.log(input2 === ["h", "a", "n", "n", "a", "H"]);

const input3 = ["0"];
reverseString(input3);
console.log(input3);
