import { describe, expect, it } from "vitest"

/** 
 * input array of n elements, which are numbers from 0 to n.
 * One number is missing..
 * If we sum all numbers, we get n*(n+1)/2
*/
const missingNumber = (input: Array<number>) : number => {
    const n = input.length;
    let arraySum = Math.floor(n*(n+1)/2);
    for(const elem of input) {
        arraySum -= elem;
    }
    return arraySum;
}

describe('missingNumber', () => {
    it('finds missing number in one pass through array', () => {
        expect(missingNumber([0, 4, 2, 5, 1])).toBe(3);
    })
})