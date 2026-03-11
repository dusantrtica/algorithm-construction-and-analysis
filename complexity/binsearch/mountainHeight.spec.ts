import { describe, expect, it } from "vitest";

const mountainHeight = (heights: number[]): number => {
    const n = heights.length;
    let l = 1, r = n-2;

    while(l <= r) {
        const mid = l + Math.ceil((r - l) / 2);
        const midElem = heights[mid];

        if(heights[mid-1] <  heights[mid] && heights[mid] > heights[mid+1]) {
            return heights[mid];
        } else if (heights[mid] < heights[mid+1]) {
            l = mid+1;
        } else {
            r = mid-1;
        }
    }
    return -1;
}

describe('mountainHeight', () => {
    it('returns height when there are only 3 reported heights', () => {
        expect(mountainHeight([1,2,1])).toBe(2);
    })

    it('returns height when there are multiple points', () => {
        expect(mountainHeight([3,5,8,6,3])).toBe(8);
    })

    it('returns height when there is only one step upwards', () => {
        expect(mountainHeight([1, 10, 8, 7, 4, 2])).toBe(10);
    })

    it('returns height when there is only one downward step', () => {
        expect(mountainHeight([1,3,4,6,7,8, 10, 1])).toBe(10);
    })
})