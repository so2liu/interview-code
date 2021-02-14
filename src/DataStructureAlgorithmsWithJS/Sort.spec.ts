import { bubbleSort, insertSort, selectSort, shellSort } from "./Sort";

class MockData {
    data: number[] = [];
    sorted: number[] = [];
    constructor(n: number, min: number = 1, max: number = 100) {
        for (let i = 0; i < n; i++) {
            this.data.push(Math.floor(Math.random() * max + min));
        }

        this.sorted = [...this.data].sort((a, b) => a - b);
    }
}

describe("Sort", () => {
    let mockdata: MockData;
    beforeEach(() => {
        mockdata = new MockData(10);
        expect(mockdata.data).not.toEqual(mockdata.sorted);
    });

    it("should sorted by bubble", () => {
        bubbleSort(mockdata.data);
        expect(mockdata.data).toEqual(mockdata.sorted);
    });

    it("should sorted by select", () => {
        selectSort(mockdata.data);
        expect(mockdata.data).toEqual(mockdata.sorted);
    });

    it("should sorted by insert", () => {
        insertSort(mockdata.data);
        expect(mockdata.data).toEqual(mockdata.sorted);
    });

    it("should sorted by shell", () => {
        shellSort(mockdata.data);
        expect(mockdata.data).toEqual(mockdata.sorted);
    });
});
