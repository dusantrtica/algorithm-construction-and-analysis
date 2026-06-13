import { describe, expect, it } from "vitest"

const bestSubmit = (submits: number[]): number[] => {
    const best = new Array(submits.length);
    best[0] = submits[0];
    for(let i = 1; i < submits.length; i++) {
        best[i] = Math.max(best[i-1], submits[i]);
    }

    return best;
}

describe('bestSubmit', () => {
    it('returns array of best submits so far', () => {
        expect(bestSubmit([3,2,4,1,5])).toEqual([3,3,4,4,5])
    })
})