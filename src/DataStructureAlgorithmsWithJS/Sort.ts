export function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        const stop = arr.length - 1;
        for (let j = 0; j < stop; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr);
            }
        }
    }
}

export function selectSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) swap(i, minIndex, arr);
    }
}

export function insertSort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            const tmp = arr[i];
            for (let j = i; j > 0 && tmp < arr[j - 1]; j--) {
                swap(j, j - 1, arr);
            }
        }
    }
}

export function shellSort(arr: number[], gaps?: number[]) {
    const N = arr.length;
    let h = 1;
    while (h < N / 3) {
        h = 3 * h + 1;
    }

    while (h >= 1) {
        for (let i = h; i < N; i++) {
            const tmp = arr[i];
            for (let j = i; j >= h && tmp < arr[j - h]; j -= h) {
                swap(j, j - h, arr);
            }
        }

        h = (h - 1) / 3;
    }
}

function swap(i: number, j: number, arr: any[]) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
