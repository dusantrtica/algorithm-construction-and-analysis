import { describe, expect, it } from "vitest"

const largestSubArrayOfConsecutiveNumbers = (input: number[]): number[] => {
    input.sort((a, b) => Number(a) - Number(b));
    const n = input.length;
    let bestArray: number[] = [];
    let bestArraySoFar = [];
    let i = 0;
    while(i < n-1) {     
        let j = i;   
        while(j < n-1 && input[j+1] <= input[j]+1) {
            if(input[j+1] === input[j]+1) {
                bestArraySoFar.push(input[j]);
            }
            j++;
        }
        if(input[j-1] + 1 === input[j]) {
            bestArraySoFar.push(input[j]);
        }
        if(bestArray.length < bestArraySoFar.length) {
            bestArray = [...bestArraySoFar];
        }
        bestArraySoFar =[];
        i++
    }
    return bestArray;
}

describe('largestSubArrayOfConsecutiveNumbers', () => {
    it('returns largest array of consecutive numbers', () => {
        const numbers = [4, 8, 1, -6, 9, 5, -9, 10, -1, 3, 0, 1, 2];
        expect(largestSubArrayOfConsecutiveNumbers(numbers)).toEqual([-1, 0, 1, 2, 3, 4, 5])
    });
})