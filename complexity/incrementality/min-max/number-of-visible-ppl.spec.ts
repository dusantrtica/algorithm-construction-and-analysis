import { describe, expect, it, vi } from "vitest";

const numOfVisiblePplInLine = (heights: number[]): number => {
    let max = heights[0];
    let visiblePplCount = 1;
    for(let i = 1; i < heights.length; i++) {
        if(heights[i] > max) {
            max = heights[i];
            visiblePplCount++;
        }
    }

    return visiblePplCount;
}

describe('numOfVisiblePplInLine', () => {
    it('return 3 as the clerk can see only 3 people giving their heights and the fact they stand in the line', () => {
        expect(numOfVisiblePplInLine([165, 178, 170, 178, 183, 176, 168, 183])).toBe(3)
    });
});