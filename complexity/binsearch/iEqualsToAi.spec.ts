import { describe, expect, it } from "vitest"

const iEqualsToNumOfI = (input: number[],): number => {
    let l = 0, r = input.length-1;

    while(l <= r) {
        const mid = l + Math.ceil((r-l)/2);
        const midElem = input[mid];

        if(midElem === mid) {
            return mid;
        } else if (mid < midElem) {
            r = mid -1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
}

describe('iEqualsToNumofI', () => {
    it('returns index of element such that input[index] = index', () => {
        expect(iEqualsToNumOfI([-3, -1, 1, 3, 5, 7])).toEqual(3);
    })
})