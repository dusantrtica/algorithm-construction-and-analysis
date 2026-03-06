import { describe, expect, it } from "vitest";

/**
 * 
 * @param input array of elements
 * @param pred condition that we seek first element which satisfies it
 * @returns index of element or -1 is no element exists
 */
export const splittingPoint = <T>(input: T[], pred: (a: T) => boolean): number => {
    let l = 0, r = input.length;
    while(l < r) {
        const mid = l + Math.floor((r - l) / 2);
        const midElem = input[mid];

        if(!pred(midElem)) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return r;
}

describe('splittingPoint', () => {
    it('returns index of first 1 in the array', () => {
        const numPredicate = (a: number) => a >= 1;
        expect(splittingPoint([0, 0, 0, 1, 1], numPredicate)).toBe(3);
    });

    it('returns array length when there are no 1s in the array', () => {
        const numPredicate = (a: number) => a >= 1;
        expect(splittingPoint([0, 0, 0, 0], numPredicate)).toBe(4);
    });

    it('returns 0 when we seek for the first element that has property P', () => {
        const numPredicate = (a: number) => a >= 1;
        expect(splittingPoint([1,1,1,1,1], numPredicate)).toBe(0);
    })

    it("returns index of element which has property of being equal to an element", () => {
        const numPredicate = (a: number) => a === 1;
        expect(splittingPoint([0, 0, 0, 1, 1], numPredicate)).toBe(3);
    })

    it("returns index of element which has the property of being strictly larger than 0", () => {
        const numPredicate = (a: number) => a > 0;
        expect(splittingPoint([0, 0, 0, 1, 1], numPredicate)).toBe(3);
    })
})