// 冒泡
export function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    const stop = arr.length - i;
    for (let j = 0; j < stop; j++) {
      if (arr[j] > arr[j + 1]) swap(j, j + 1, arr);
    }
  }

  return arr;

  function swap(i: number, j: number, arr: number[]) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// 快排
export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const middleIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(middleIndex, 1)[0];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < pivot) left.push(element);
    else right.push(element);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
