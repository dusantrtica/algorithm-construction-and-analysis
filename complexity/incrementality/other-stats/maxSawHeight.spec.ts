import { describe, expect, it } from "vitest";

const maxSawLevel = (treeHeights: number[], demands: number): number => {
    treeHeights.sort((a, b) => Number(b) - Number(a));
    let i = 0;
    let totalLogs = 0
    for (i = 1; i < treeHeights.length; i++) {
        const diff = treeHeights[i - 1] - treeHeights[i];
        totalLogs += i * diff;
        if (totalLogs >= demands) {
            break;
        }
    }
    return treeHeights[i] + Math.floor((totalLogs-demands)/i);
}

describe('maxSawLevel', () => {
    describe('implemented using incrementality approach', () => {
        it('returns 3 as level when tree heights are 4,3,2', () => {
            expect(maxSawLevel([2, 4, 3], 3)).toBe(2);
        })
        it('returns 18 when the case is not bound to the exact tree height', () => {
            expect(maxSawLevel([24, 21, 19, 14, 22], 14)).toBe(18)
        })
        it('returns 2 as level when tree heights are 4,3,1', () => {
            expect(maxSawLevel([4, 3, 1], 3)).toBe(2)
        })
    })
})