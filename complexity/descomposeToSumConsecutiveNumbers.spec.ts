import { describe, expect, it } from "vitest";

const decomposeToSumOfConsecutiveNumbers = (n: number): number => {
    let sum = 0;
    let i = 0;
    let j = 1;
    let numOfCombination = 0;

    while (i < n) {
        if (sum == n) {
            numOfCombination += 1;
            sum += i;
            i++;
        } else if (sum < n) {
            sum += i;
            i++;
        } else {
            sum -= j;
            j += 1;
        }
    }
    return numOfCombination;
}

const decomposeToSumOfConsecutiveNumbersByNumberOfOperands = (n: number): number => {
    let numOfCombination = 0;
    for (let m = 2; m + m * (m - 1) / 2 <= n; m++) {
        if ((n - m * (m - 1) / 2) % m === 0) {
            console.log('combination for ', m);
            numOfCombination++;
        }
    }
    
    return numOfCombination;
}

describe('decomposeToSumOfConsecutiveNumbers', () => {
    it('returns 3 for number 15', () => {
        // 1+2+3+4+5 = 15
        // 4+5+6 = 15
        // 7+8 = 15
        expect(decomposeToSumOfConsecutiveNumbers(15)).toBe(3);
    })

    it('returns 3 for 15, faster version', () => {
        expect(decomposeToSumOfConsecutiveNumbersByNumberOfOperands(15)).toBe(3);
    })
});