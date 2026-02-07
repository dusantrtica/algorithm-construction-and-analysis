import { describe, expect, it } from "vitest";

const largestSumOfSubArrays = (input: Array<number>): number => {
    let largestSum = input[0];
    let currSum = input[0];

    let i = 0, n = input.length;

    for(i = 1; i < n; i++) {
        if(currSum + input[i] > input[i]) {
            currSum += input[i];
        } else {
            currSum = input[i];
        }

        if(currSum > largestSum) {
            largestSum = currSum;
        }
    }

    return largestSum;
}

describe('largestSumOfSubArrays', () => {
    it('calculates largest sum case 1', () => {
        expect(largestSumOfSubArrays([2, -3, 4, -1, 3, -2])).toBe(6);
    })
})