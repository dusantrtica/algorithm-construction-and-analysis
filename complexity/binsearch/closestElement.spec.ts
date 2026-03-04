import { describe, expect, it } from "vitest"

const closestLessOrEqual = (input:number[], x: number): number => {
    let l = 0
    let r = input.length;
    while(l <= r) {
        const mid = l + Math.ceil((r-l) / 2);
        const midElem = input[mid];

        if (x <= midElem) {
            r = mid-1;
        } else {
            l = mid+1;
        }
    }
    return l;
}

const closestBiggerOrEqual = (input: number[], x: number): number => {
    let l = 0, r = input.length-1;

    while(l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        const midElem = input[mid];

        if (x <= midElem) {
            r = mid-1;
        } else {
            l = mid + 1;
        }
    }
    return l;
}

const closestElement = (input: number[], x: number): number => {
    const closestLeftIdx = closestLessOrEqual(input, x);
    const closestRightIdx = closestBiggerOrEqual(input, x);

    if(x - input[closestLeftIdx] <= input[closestRightIdx] - x) {
        return closestLeftIdx;
    }
    

    return closestRightIdx;
}

describe('closestLessOrEqual', () => {
    it('returns closest less or equal element', () => {
        expect(closestLessOrEqual([1,4,4,5,7, 10], 2)).toBe(0);
        expect(closestLessOrEqual([1,4,4,5,7, 10], 3)).toBe(0);
        expect(closestLessOrEqual([1,4,4,5,7, 10], 4)).toBe(1);
        expect(closestLessOrEqual([1,4,4,5,7, 10], 6)).toBe(3);
    })

    it("returns 2 for 20", () => {
        const input = [1, 10, 17, 17, 24, 28];
        expect(closestLessOrEqual(input, 20)).toBe(2);
    })
})

describe('closestBiggerOrEqual', () => {
    it('returns closest bigger or equal', () => {
        expect(closestBiggerOrEqual([1,4,5,7, 10], 2)).toBe(1);
        expect(closestBiggerOrEqual([1,4,5,7, 10], 3)).toBe(1);
        expect(closestBiggerOrEqual([1,4,5,7, 10], 4)).toBe(1);
        expect(closestBiggerOrEqual([1,4,5,7, 10], 6)).toBe(3);
    })
});

describe('closestElement', () => {
    const input = [1, 10, 17, 17, 24, 28];
    const testCases = [[9, 1], [2, 0], [15, 2], [26, 4], [20, 2], [17, 2], [35, 5]];
    it.each(testCases)(`Returns index $1 for element $0`, (elem, idx) => {
        expect(closestElement(input, elem)).toBe(idx);
    })
});