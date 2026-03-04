import { describe, it, expect } from "vitest";

export const binSearch = <T>(
    input: T[],
    elem: T,
    cmp: (a: T, b: T) => number,
    l: number = 0,
    r: number = input.length-1,
): number => {    
    while (l <= r) {
        const mid = l + Math.ceil((r-l) / 2);
        const midElem = input[mid];
        if (cmp(midElem, elem) === 0) {
            return mid;
        } else if (cmp(midElem, elem) < 0) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
}

describe('binSearch', () => {
    it('returns index of element that is in the middle of the array', () => {
        expect(binSearch([1, 2, 3, 4, 5], 3, (a, b) => a - b)).toBe(2);
    })

    it('returns index of the last element', () => {
        expect(binSearch([1, 2, 3, 4, 5], 5, (a, b) => a - b)).toBe(4);
    });

    it('returns index of the first element', () => {
        expect(binSearch([1, 2, 3, 4, 5], 1, (a, b) => a - b)).toBe(0);
    });

    it('returns -1 if the element is not in the array', () => {
        expect(binSearch([1, 2, 3, 4, 6], 0, (a, b) => a - b)).toBe(-1);
        expect(binSearch([1, 2, 3, 4, 6], 5, (a, b) => a - b)).toBe(-1);
    })
});
