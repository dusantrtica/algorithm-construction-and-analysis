import { describe, expect, it } from "vitest"

const minBuildingHeights = (heights: number[]): number[] => {
    const n = heights.length;
    const minHeights = new Array(n);
    minHeights[n-1] = heights[n-1];
    
    for(let i = n-2; i >= 0; i--) {
        minHeights[i] = Math.max(heights[i], minHeights[i+1])
    }

    return minHeights;
}

describe('minBuildingHeights', () => {
    it('returns min height so the last floor can see the river', () => {
        expect(minBuildingHeights([13, 23, 11, 17, 13])).toEqual([23, 23, 17, 17, 13])
    })
})