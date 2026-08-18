import { describe, expect, it } from "vitest"

const largestSumOfRotatedArray = (input: number[]): [number, number] => {
    const arrSum = input.reduce((prev, curr) => prev + curr, 0);
    const n = input.length;
    let sum = input.reduce((prev, curr, idx) => prev += idx * curr, 0);
    let maxSum = arrSum;
    let maxSumIdx = 0;
    for(let i = 1; i < n; i++) {
        sum -= arrSum;
        sum += n * input[i-1];

        if(sum > maxSum) {
            maxSum = sum;
            maxSumIdx = i;
        }
    }
    return [maxSum, maxSumIdx]
}

describe('largestSumOfRotatedArray', () => {
    it('returns the sum and the number of number of rotations', () => {
        expect(largestSumOfRotatedArray([5,4,1])).toEqual([13, 2])
    })
})