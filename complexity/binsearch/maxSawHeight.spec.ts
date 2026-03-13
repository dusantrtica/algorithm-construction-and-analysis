import { describe, expect, it } from "vitest";

const calculateWoodAmount = (treeHeights: number[], sawLevel: number): number => {
    return treeHeights.reduce((prev, curr) => prev + Math.max(curr - sawLevel, 0), 0)
}

const maxSawLevel = (treeHeights: number[], demands: number): number => {
    let low = 0, high = Math.max(...treeHeights);
    while (low < high) {
        let midLevel = low + Math.ceil((high - low) / 2);
        let woodAmount = calculateWoodAmount(treeHeights, midLevel);
        if (woodAmount < demands) {
            high = midLevel - 1
        } else {
            low = midLevel + 1
        }
    }
    return high;
}

describe('maxSawHeight', () => {
    describe('calculateWoodAmount', () => {
        it('case 1', () => {
            expect(calculateWoodAmount([24, 21, 19, 14, 22, 14], 18)).toBe(14);
        })
    })
    it('returns max height so we get our demands fullfilled with min waste', () => {
        const treeHeights = [24, 21, 19, 14, 22, 14]
        const demands = 14 // 14 meters of wood
        expect(maxSawLevel(treeHeights, demands)).toBe(18);
    })
})