import { describe, expect, it } from "vitest"
import { splittingPoint } from "./splittingPoint.spec";
import { binSearch } from "./binsearch.spec";

export const closestElement = (input: number[], x: number): number => {
    const foundIdx = binSearch(input, x, (a, b)=> Number(a) - Number(b));
    if(foundIdx > -1) {
        return foundIdx;
    }

    const closestLeftIdx = splittingPoint(input, (a) => a >= x)-1
    const closestRightIdx = splittingPoint(input, a => a > x);

    if(x - input[closestLeftIdx] <= input[closestRightIdx] - x) {
        return closestLeftIdx;
    }
    
    return closestRightIdx <= input.length-1 ? closestRightIdx : input.length-1;
}

describe('closestElement', () => {
    const input = [1, 10, 17, 17, 24, 28];
    const testCases = [[-3, 0], [9, 1], [2, 0], [15, 2], [26, 4], [20, 3], [17, 2], [35, 5]];
    it.each(testCases)(`Returns index $1 for element $0`, (elem, idx) => {
        expect(closestElement(input, elem)).toBe(idx);
    })
});