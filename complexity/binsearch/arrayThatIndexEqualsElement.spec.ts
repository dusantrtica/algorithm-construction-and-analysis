/**
 * find if there is an element st a[i] = i
 * array is increasing
 * else return -1;
 */

import { describe, expect, it } from "vitest"

const elemEqualToIndex = (input: Array<number>): number => {
    const n = input.length;
    let l = 0, r = n-1;
    while(l <= r) {
        const mid = Math.ceil((l + r) / 2);
        const midElem = input[mid];

        if(mid === midElem) {
            return mid;
        } else if (mid < midElem) {
            r = mid-1;
        } else {
            l = mid + 1;
        }
    }

    return -1;
}

describe('elemEqualToIndex', () => {
    it('returns true for array where a[3] == 3', () => {
        expect(elemEqualToIndex([-3, -1, 1, 3, 5, 7])).toBe(3);
    })

    it('return false as there is no such element', () => {
        expect(elemEqualToIndex([1,2,3,4,5,6,7])).toBe(-1);
    })
})