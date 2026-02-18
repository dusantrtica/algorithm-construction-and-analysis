import { describe, expect, it } from "vitest";

export const binSearch = <T>(input: T[], elem: T, cmp: (a: T, b: T) => number): number => {
    const n = input.length;
    let l = 0, r = n - 1;

    while (l <= r) {
        const mid = Math.ceil((l + r) / 2);
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

const barCodeSearch = (codes: number[], codesToSearch: number[]) => {
    return codesToSearch
        .map(code => binSearch(codes, code, (a, b) => a -b))
        .filter(x => x > -1)
        .length;
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

describe('barCodesSearch', () => {
    it('returns 2 as only 2 codes are in the array', () => {
        expect(barCodeSearch([1, 3, 5, 6, 7], [2, 3, 4, 5, 8])).toBe(2);
    })
})