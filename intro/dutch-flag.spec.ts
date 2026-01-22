import { describe, expect, it, test } from "vitest";

const dutchFlag = (input: Array<number>, a: number, b: number): void => {
    let n = input.length;
    let l = 0, r = n, i = 0;

    const swap = (x: number, y: number) => {
        const tmp = input[x];
        input[x] = input[y];
        input[y] = tmp;
    }

    while (i < r) {
        if (input[i] < a) {
            swap(i, l);
            i++;
            l++
        } else if (input[i] <= b) {
            i++;
        } else { // input[i] > b
            swap(i, --r);
        }
    }
}

describe('Dutch Flag', () => {
    it('reorders elements to according to the dutch flag assignment', () => {
        const input = [1, 3, 5, 8, 5, 7, 2, 3, 6];
        const a = 3, b = 5;
        dutchFlag(input, a, b);

        expect(input).toEqual([1, 2, 5, 3, 5, 3, 7, 6, 8]);
    });

    it("reorders elements which are sorted", () => {
        const input = [5, 4, 3, 2, 1];
        const a = 2, b = 4;
        dutchFlag(input, a, b);
        expect(input).toEqual([1, 4, 3, 2, 5])
    })
});
