import { describe, expect, it } from "vitest";

const decomposeToSumOfConsecutiveNumbers = (n: number): number => {
    let sum = 0;
    let i = 0;
    let j = 1;
    let numOfCombination = 0;

    while(i < n) {
        if(sum == n) {
            numOfCombination += 1;
            sum += i;
            i++;
        } else if(sum < n) {
            sum += i;       
            i++;     
        } else {
            sum -= j;
            j += 1;
        }
    }
    return numOfCombination;
}

describe('decomposeToSumOfConsecutiveNumbers', () => {
    it('returns 3 for number 15', () => {
        expect(decomposeToSumOfConsecutiveNumbers(15)).toBe(3);
    })
});