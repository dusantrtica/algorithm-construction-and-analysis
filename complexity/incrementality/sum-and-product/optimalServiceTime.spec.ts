import { describe, expect, it } from "vitest"
import { getPrefixSumArray } from "./consecutiveSumCounter.spec"

const optimalServiceTime = (mileages: number[]): number => {

    const prefixSumArray = getPrefixSumArray(mileages);
    const halfWay = prefixSumArray[prefixSumArray.length - 1] / 2;

    let min = prefixSumArray[prefixSumArray.length - 1] - prefixSumArray[0]

    let bestIndex = 0;
    for (let i = mileages.length - 1; i >= 0; i--) {
        if (Math.abs(prefixSumArray[i+1] - halfWay) <= min) {
            min = Math.abs(prefixSumArray[i+1] - halfWay);            
            bestIndex = i;
        }
    }
    return bestIndex;
}

describe('optimalServiceTime', () => {
    it('returns the optimal day in which service should be done', () => {
        const mileages = [100, 120, 50, 150, 70]
        expect(optimalServiceTime(mileages)).toBe(1)
    })
})
