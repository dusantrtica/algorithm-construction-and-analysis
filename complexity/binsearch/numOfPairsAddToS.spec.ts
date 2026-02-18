import { describe, expect, it } from "vitest"
import { binSearch } from "./barCodeSearch.spec";

/**
 * 
 * @param s sum 
 * @param operands array of numbers
 * @returns number of pairs in the operands array that add up to s
 */

const numberOfNumbersThatAddsToSum = (s: number, operands: number[]): number => {
    operands.sort((a, b) => Number(a) - Number(b));

    let numOfPairs = 0;

    for(let i = 0; i < operands.length; i++) {
        if(binSearch([...operands.slice(0, i), ...operands.slice(i+1)], s - operands[i], (a, b) => a-b) !== -1) {
            numOfPairs += 1;
        }
    }

    return numOfPairs/2;
}

describe('numberOfNumbersThatAddsToSum', () => {
    it('returns 2 as there are 2 pairs that form number s', () => {
        expect(numberOfNumbersThatAddsToSum(5, [1, 4, 3, 6, -1, 5])).toBe(2);
    })
})