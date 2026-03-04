import { describe, expect, it } from "vitest"

const closestElement = (input: number[], x: number): number => {
    let l = 0, r = input.length;
    
    while(l < r) {
        const mid = Math.ceil((l + r) /2 );
        const midElem = input[mid];

        break;
    }

    return 0;
}

describe('closestElement', () => {
    const input = [1, 10, 17, 17, 24, 28];
    const testCases = [[9, 1], [2, 0], [15, 2], [26, 4], [20, 2], [17, 2], [35, 5]];
    it.each(testCases)(`Returns index $0 for element $1`, (elem, idx) => {
        expect(closestElement(input, elem)).toBe(idx);
    })
});