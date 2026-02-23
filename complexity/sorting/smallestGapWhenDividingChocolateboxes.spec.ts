import { describe, expect, it } from "vitest";

const smallestGapWhenSplittinChocolateBoxes = (chocolateBoxes: number[], numOfKids: number): number => {
    chocolateBoxes.sort((a, b) => Number(a) - Number(b));
    const n = chocolateBoxes.length;
    let minDifference = chocolateBoxes[n-1] - chocolateBoxes[0];

    for(let i = 0; i+numOfKids < n; i++) {
        const diff = chocolateBoxes[i+numOfKids-1] - chocolateBoxes[i];
        if (diff < minDifference) {
            minDifference = diff;
        }
    }

    return minDifference;
}

describe('smallestGap', () => {
    it('returns the smallest possible gap when giving away chocolate boxes', () => {
        const numOfKids = 4;
        expect(smallestGapWhenSplittinChocolateBoxes([3, 8, 1, 17, 4, 7, 12, 9], numOfKids)).toBe(5);
    })
})