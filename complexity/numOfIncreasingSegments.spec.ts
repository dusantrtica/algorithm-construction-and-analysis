import { describe, expect, it } from "vitest";

const numOfIncreasingSegments = (input: Array<number>): number => {
    let totalNum = 0;
    let curNum = 0;

    for(let i = 1; i < input.length; i++) {
        if(input[i-1] < input[i]) {
            curNum++;
        } else {
            curNum = 0;
        }

        totalNum += curNum;
    }
    return totalNum;
}

describe('numOfIncreasingSegments', () => {
    it('returns 3 for array of 3 elements each one bigger than prev', () => {
        expect(numOfIncreasingSegments([1,3,4])).toBe(3);
    });

    it('returns 4 for the basic case', () => {
        expect(numOfIncreasingSegments([1,3,4,-2, 10])).toBe(4);
    })

    it('return 0 for array sorted in reversed order', () => {
        expect(numOfIncreasingSegments([4,3,2,1])).toBe(0);
    })
})