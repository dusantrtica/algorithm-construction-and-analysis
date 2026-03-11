import { describe, expect, it } from "vitest"

const minOfRotatedSortedArray = (input: number[]): number => {
    let l = 0, r = input.length - 1;

    if (input[l] < input[r]) {
        return input[l];
    }

    while (l < r) {
        const mid = l + Math.ceil((r - l) / 2);
        const midElem = input[mid];
        if (input[mid - 1] > input[mid]) {
            return input[mid];
        } else if (input[l] < input[mid]) {
            l = mid;
        } else {
            r = mid;
        }
    }
    return input[r];
}

describe('minOfRotatedSortedArray', () => {
    it('returns minimum when array is rotated to k = 0 places', () => {
        expect(minOfRotatedSortedArray([1, 2, 3, 4, 5, 6])).toEqual(1);
    })

    it('returns min when array is rotaed to k = n-1 places', () => {
        expect(minOfRotatedSortedArray([2, 3, 4, 5, 6, 1])).toEqual(1);
    })

    it('returns min when array is rotated to k places (1 < k < n-1)', () => {
        expect(minOfRotatedSortedArray([3, 4, 5, 1, 2])).toBe(1)
    })

    it('returns min when array is rotated', () => {
        expect(minOfRotatedSortedArray([4,5,6,7,8,1,2,3])).toBe(1)

    })
})