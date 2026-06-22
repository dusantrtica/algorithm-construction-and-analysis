import { describe, expect, it } from "vitest"

const centralNodeLocation = (cablesPerLocation: number[][]): [number, number] => {
    const n = cablesPerLocation.length;
    const m = cablesPerLocation[0].length;
    let minRow = 0, minCol = 0
    let cost = 0;
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            cost = cost + ((i - minRow) + (j - minCol)) * cablesPerLocation[i][j];
        }
    }
    let minCost = cost;


    return [0, 0];
}

describe('centralNodeLocation', () => {
    it('returns location for the building where the main node should be', () => {
        const cablesPerLocation = [
            [2, 1, 1, 4],
            [1, 3, 2, 1],
            [2, 2, 2, 1]
        ]
        expect(centralNodeLocation(cablesPerLocation)).toEqual([1, 1])
    })
})