/*
Given the array of elements and the number,
return the number of sub arrays that sum up to the given number
*/

import { describe, expect, it } from "vitest";

export const getPrefixSumArray = (input: number[]): number[] => {
    const prefixSumArray = new Array(input.length + 1).fill(0);
    for (let i = 0; i < input.length; i++) {
        prefixSumArray[i+1] = (i === 0 ? input[i] : prefixSumArray[i] + input[i]);
    }

    return prefixSumArray;
}

const consecutiveSumCount = (input: number[], target: number): number => {
    const prefixSumArray = getPrefixSumArray(input);

    let counter = 0;

    for(let i = 0; i < prefixSumArray.length; i++) {
        for(let j = 0; j < i; j++) {
            if(prefixSumArray[i] - prefixSumArray[j] === target) {
                counter++;
            }
        }
    }
    return counter;
}

describe('consecutiveSumCounter', () => {
    describe('getPrefixSumArray', () => {
        it('returns prefix sum array of given array', () => {
            expect(getPrefixSumArray([1, 2, 3, 4, 5, 6])).toEqual([0, 1, 3, 6, 10, 15, 21])
        })
    });
    it('returns 7 when there are 7 subarrays that sum to 11', () => {
        expect(consecutiveSumCount([1, 2, 3, 5, 1, -1, 1, 5, 3, 2], 11)).toBe(7);
    })
});
