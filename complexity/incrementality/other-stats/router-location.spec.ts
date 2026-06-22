import { describe, expect, it } from "vitest";
import { getPrefixSumArray } from "../sum-and-product/consecutiveSumCounter.spec";

const calculateCableLen = (buildingsResidentsCount: number[], routerPos: number) => {
    return buildingsResidentsCount.reduce((prev, curr, idx) => {
        return prev += Math.abs(idx - routerPos)*curr
    }, 0);

}

const calculateMinCablesLength = (buildingsResidentsCount: number[]): number => {
    const prefixSum = getPrefixSumArray(buildingsResidentsCount);
    const n = buildingsResidentsCount.length;
    let currRouterPos = 0 
    let currCableLen = calculateCableLen(buildingsResidentsCount, currRouterPos);
    let minCablesLength = currCableLen;

    for(let i = 1; i < buildingsResidentsCount.length; i++) {
        currCableLen += prefixSum[i];
        currCableLen -= (prefixSum[n] - prefixSum[i]);

        minCablesLength = Math.min(currCableLen, minCablesLength);
    }

    return minCablesLength;
}

describe('minCablesLength', () => {
    describe('calculateCableLen', () => {
        it('returns 30 when pos is 3', () => {
            expect(calculateCableLen([3, 5, 1, 6, 2, 4], 3)).toBe(30)
        })
        it('returns 45 when we start from the first element', () => {
            expect(calculateCableLen([3, 5, 1, 6, 2, 4], 0)).toBe(53)
        })
    })
    it("returns total cable length of 30 as if the router is placed in the 3rd building", () => {
        expect(calculateMinCablesLength([3, 5, 1, 6, 2, 4])).toBe(30)
    })
})