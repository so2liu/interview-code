export function reverseWords(s: string): string {
  const arr = s.split(" ");
  reverseArr(arr);
  return arr.filter((v) => Boolean(v)).join(" ");

  function reverseArr(arr: string[]) {
    let left = 0,
      right = arr.length - 1;
    while (left < right) {
      const tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;

      left++;
      right--;
    }
  }
}

const Input = "a good   example!";
const Output = "example! good a";
console.log(reverseWords(Input) === Output);
